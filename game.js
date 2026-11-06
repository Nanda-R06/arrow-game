/**
 * Core Arrow Puzzle Game Controller.
 * Manages game state, physics, interactions, undo history, combo mechanics, and level flow.
 */
class ArrowGame {
    constructor(canvas, uiCallbacks = {}) {
        this.canvas = canvas;
        this.ui = uiCallbacks;
        this.renderer = new GameRenderer(canvas);
        this.particles = new ParticleSystem();

        // State variables
        this.mode = 'campaign'; // 'campaign' | 'endless'
        this.levelId = 1;
        this.levelTitle = "First Flight";
        this.rows = 3;
        this.cols = 3;

        this.arrows = [];
        this.obstacles = [];
        this.gridMap = {}; // "r,c" -> arrow or obstacle

        this.moves = 0;
        this.mistakes = 0;
        this.score = 0;
        this.combo = 0;
        this.comboResetTimer = 0;

        this.isCompleted = false;
        this.timer = 0;
        this.isRunning = false;

        this.undoStack = [];
        this.hoveredArrowId = null;
        this.hintedArrowId = null;
        this.hintTimer = 0;

        // Animation loop
        this.lastTime = 0;
        this.rafId = null;

        this.initEvents();
    }

    initEvents() {
        // Window Resize
        window.addEventListener('resize', () => {
            this.renderer.resize(this.rows, this.cols);
        });

        // Mouse & Touch Handling
        const handlePointer = (e) => {
            if (this.isCompleted) return;

            const rect = this.canvas.getBoundingClientRect();
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;

            const screenX = clientX - rect.left;
            const screenY = clientY - rect.top;

            return this.renderer.screenToGrid(screenX, screenY);
        };

        this.canvas.addEventListener('mousemove', (e) => {
            if (this.isCompleted) {
                this.hoveredArrowId = null;
                return;
            }
            const gridPos = handlePointer(e);
            if (gridPos) {
                const key = `${gridPos.r},${gridPos.c}`;
                const item = this.gridMap[key];
                if (item && item.active && !item.isObstacle) {
                    this.hoveredArrowId = item.id;
                    this.canvas.style.cursor = 'pointer';
                    return;
                }
            }
            this.hoveredArrowId = null;
            this.canvas.style.cursor = 'default';
        });

        this.canvas.addEventListener('mouseleave', () => {
            this.hoveredArrowId = null;
        });

        this.canvas.addEventListener('click', (e) => {
            const gridPos = handlePointer(e);
            if (gridPos) {
                this.onCellClicked(gridPos.r, gridPos.c);
            }
        });

        this.canvas.addEventListener('touchstart', (e) => {
            const gridPos = handlePointer(e);
            if (gridPos) {
                e.preventDefault();
                this.onCellClicked(gridPos.r, gridPos.c);
            }
        }, { passive: false });
    }

    start() {
        this.isRunning = true;
        this.lastTime = performance.now();
        this.loop = (time) => {
            const dt = Math.min((time - this.lastTime) / 1000, 0.1);
            this.lastTime = time;

            this.update(dt);
            this.render();

            if (this.isRunning) {
                this.rafId = requestAnimationFrame(this.loop);
            }
        };
        this.rafId = requestAnimationFrame(this.loop);
    }

    stop() {
        this.isRunning = false;
        if (this.rafId) {
            cancelAnimationFrame(this.rafId);
            this.rafId = null;
        }
    }

    loadCampaignLevel(levelId) {
        const lvl = window.levelManager.getLevel(levelId);
        this.mode = 'campaign';
        this.levelId = lvl.id;
        this.levelTitle = lvl.title;
        this.hintText = lvl.hintText || "";

        this.setupBoard(lvl.rows, lvl.cols, lvl.arrows, lvl.obstacles || []);
        if (this.ui.onLevelLoaded) {
            this.ui.onLevelLoaded(this);
        }
    }

    loadCustomOrGenerated(levelData, title = "Custom Puzzle") {
        this.mode = 'endless';
        this.levelId = 0;
        this.levelTitle = title;
        this.hintText = "Clear all arrows from the board!";

        this.setupBoard(levelData.rows, levelData.cols, levelData.arrows, levelData.obstacles || []);
        if (this.ui.onLevelLoaded) {
            this.ui.onLevelLoaded(this);
        }
    }

    setupBoard(rows, cols, arrows, obstacles = []) {
        this.rows = rows;
        this.cols = cols;
        this.moves = 0;
        this.mistakes = 0;
        this.score = 0;
        this.combo = 0;
        this.comboResetTimer = 0;
        this.isCompleted = false;
        this.timer = 0;
        this.undoStack = [];
        this.hoveredArrowId = null;
        this.hintedArrowId = null;

        this.particles.reset();

        // Deep copy obstacles
        this.obstacles = obstacles.map(obs => ({
            ...obs,
            id: obs.id || `obs_${obs.r}_${obs.c}`,
            isObstacle: true,
            active: true
        }));

        // Deep copy arrows and initialize animation properties
        this.arrows = arrows.map(a => ({
            ...a,
            active: true,
            animState: 'idle', // 'idle' | 'flying' | 'blocked' | 'released'
            animTimer: 0,
            animX: 0,
            animY: 0,
            animVx: 0,
            animVy: 0,
            animScale: 1.0,
            animAlpha: 1.0
        }));

        // Build gridMap
        this.rebuildGridMap();

        // Resize renderer
        this.renderer.resize(this.rows, this.cols);
    }

    rebuildGridMap() {
        this.gridMap = {};
        for (const obs of this.obstacles) {
            this.gridMap[`${obs.r},${obs.c}`] = obs;
        }
        for (const arrow of this.arrows) {
            if (arrow.active) {
                this.gridMap[`${arrow.r},${arrow.c}`] = arrow;
            }
        }
    }

    onCellClicked(r, c) {
        if (this.isCompleted) return;

        const key = `${r},${c}`;
        const item = this.gridMap[key];

        if (!item || !item.active || item.isObstacle) {
            return;
        }

        // Prevent clicking an arrow that is already in motion
        if (item.animState === 'flying') return;

        this.attemptRelease(item);
    }

    attemptRelease(arrow) {
        this.moves++;
        this.hintedArrowId = null; // Clear active hint

        // Pre-check which arrows were blocked before this release
        const previouslyBlocked = new Set();
        for (const a of this.arrows) {
            if (a.active && a.id !== arrow.id) {
                const check = PuzzleSolver.checkArrowClear(this.gridMap, a, this.rows, this.cols);
                if (!check.clear) {
                    previouslyBlocked.add(a.id);
                }
            }
        }

        // Check if this arrow is clear to escape
        const result = PuzzleSolver.checkArrowClear(this.gridMap, arrow, this.rows, this.cols);

        if (!result.clear) {
            // Collision! Arrow is blocked
            this.mistakes++;
            this.combo = 0; // Combo broke

            arrow.animState = 'blocked';
            arrow.animTimer = 0;

            const center = this.renderer.getCellCenter(arrow.r, arrow.c);
            const dirInfo = DIRECTIONS[arrow.dir];

            // Calculate contact point between arrow and blocker
            const cs = this.renderer.cellSize;
            const contactX = center.x + dirInfo.dc * (cs * 0.45);
            const contactY = center.y + dirInfo.dr * (cs * 0.45);

            // Audio & Juice
            window.soundEngine.playBlocked();
            this.renderer.triggerShake(5, 0.22);
            this.particles.addCollisionSparks(contactX, contactY, -dirInfo.dc, -dirInfo.dr);

            if (this.ui.onMoveMade) {
                this.ui.onMoveMade(this);
            }
            return;
        }

        // SUCCESS! Arrow is free to escape
        this.combo++;
        this.comboResetTimer = 4.0; // 4 seconds combo window

        const pts = 100 * this.combo;
        this.score += pts;

        const center = this.renderer.getCellCenter(arrow.r, arrow.c);
        const dirInfo = DIRECTIONS[arrow.dir];

        // Audio & Visual juice
        window.soundEngine.playRelease(this.combo);
        const comboText = this.combo > 1 ? `+${pts} COMBO x${this.combo}!` : `+${pts}`;
        this.particles.addFloatingText(center.x, center.y - 10, comboText, this.renderer.dirColors[arrow.dir]);

        // Push to undo stack
        this.undoStack.push({
            arrowId: arrow.id,
            r: arrow.r,
            c: arrow.c,
            dir: arrow.dir,
            score: this.score,
            combo: this.combo
        });

        // Remove from logical grid so it unblocks other arrows immediately
        delete this.gridMap[`${arrow.r},${arrow.c}`];

        // Find newly unblocked arrows and trigger unblock ripples
        for (const a of this.arrows) {
            if (a.active && previouslyBlocked.has(a.id)) {
                const nowCheck = PuzzleSolver.checkArrowClear(this.gridMap, a, this.rows, this.cols);
                if (nowCheck.clear) {
                    const freedCenter = this.renderer.getCellCenter(a.r, a.c);
                    this.particles.addUnblockPulse(freedCenter.x, freedCenter.y, '#34d399');
                }
            }
        }

        // Setup flight animation
        arrow.animState = 'flying';
        arrow.animX = center.x;
        arrow.animY = center.y;
        const flightSpeed = 1200; // px/sec
        arrow.animVx = dirInfo.dc * flightSpeed;
        arrow.animVy = dirInfo.dr * flightSpeed;
        arrow.animScale = 1.0;
        arrow.animAlpha = 1.0;

        if (this.ui.onMoveMade) {
            this.ui.onMoveMade(this);
        }
    }

    undo() {
        if (this.undoStack.length === 0 || this.isCompleted) return false;

        const lastMove = this.undoStack.pop();
        const arrow = this.arrows.find(a => a.id === lastMove.arrowId);

        if (arrow) {
            arrow.active = true;
            arrow.animState = 'idle';
            arrow.animAlpha = 1.0;
            arrow.animScale = 1.0;

            this.gridMap[`${arrow.r},${arrow.c}`] = arrow;

            // Restore combo / score state
            this.score = Math.max(0, this.score - (100 * (lastMove.combo || 1)));
            this.combo = Math.max(0, (lastMove.combo || 1) - 1);

            window.soundEngine.playUndo();

            const center = this.renderer.getCellCenter(arrow.r, arrow.c);
            this.particles.addUnblockPulse(center.x, center.y, '#60a5fa');

            if (this.ui.onMoveMade) {
                this.ui.onMoveMade(this);
            }
            return true;
        }

        return false;
    }

    triggerHint() {
        if (this.isCompleted) return false;

        const freeArrows = PuzzleSolver.getFreeArrows(this.gridMap, this.arrows, this.rows, this.cols);

        if (freeArrows.length > 0) {
            // Pick a free arrow
            const chosen = freeArrows[Math.floor(Math.random() * freeArrows.length)];
            this.hintedArrowId = chosen.id;
            this.hintTimer = 3.0; // Show hint for 3 seconds

            const center = this.renderer.getCellCenter(chosen.r, chosen.c);
            window.soundEngine.playHint();
            this.particles.addHintBeacon(center.x, center.y, '#fbbf24');
            return true;
        }

        return false;
    }

    restart() {
        if (this.mode === 'campaign') {
            this.loadCampaignLevel(this.levelId);
        } else {
            // Re-setup the existing endless/custom board
            this.setupBoard(this.rows, this.cols, this.arrows, this.obstacles);
            if (this.ui.onLevelLoaded) {
                this.ui.onLevelLoaded(this);
            }
        }
    }

    update(dt) {
        this.renderer.update(dt);
        this.particles.update();

        if (!this.isCompleted) {
            this.timer += dt;

            // Combo timer decay
            if (this.combo > 0) {
                this.comboResetTimer -= dt;
                if (this.comboResetTimer <= 0) {
                    this.combo = 0;
                    if (this.ui.onComboReset) {
                        this.ui.onComboReset();
                    }
                }
            }

            // Hint timer decay
            if (this.hintedArrowId) {
                this.hintTimer -= dt;
                if (this.hintTimer <= 0) {
                    this.hintedArrowId = null;
                }
            }
        }

        // Animate arrows
        const width = this.canvas.width / this.renderer.dpr;
        const height = this.canvas.height / this.renderer.dpr;

        let activeCount = 0;
        let anyFlying = false;

        for (const arrow of this.arrows) {
            if (arrow.animState === 'blocked') {
                arrow.animTimer += dt;
                if (arrow.animTimer >= 0.35) {
                    arrow.animState = 'idle';
                    arrow.animTimer = 0;
                }
            } else if (arrow.animState === 'flying') {
                anyFlying = true;
                // Move with accelerating speed
                arrow.animX += arrow.animVx * dt;
                arrow.animY += arrow.animVy * dt;
                arrow.animVx *= 1.05; // Acceleration
                arrow.animVy *= 1.05;

                // Add trailing dust
                const dirInfo = DIRECTIONS[arrow.dir];
                this.particles.addTrail(
                    arrow.animX,
                    arrow.animY,
                    dirInfo.dc,
                    dirInfo.dr,
                    this.renderer.dirColors[arrow.dir]
                );

                // Check if completely off canvas boundary
                const margin = 100;
                if (
                    arrow.animX < -margin ||
                    arrow.animX > width + margin ||
                    arrow.animY < -margin ||
                    arrow.animY > height + margin
                ) {
                    arrow.animState = 'released';
                    arrow.active = false;
                }
            }

            if (arrow.active) {
                activeCount++;
            }
        }

        // Check Victory condition: all arrows released and none currently flying
        if (!this.isCompleted && activeCount === 0 && !anyFlying) {
            this.handleVictory();
        }
    }

    handleVictory() {
        this.isCompleted = true;
        this.hintedArrowId = null;

        // Calculate star rating
        // 3 stars: 0 mistakes
        // 2 stars: 1 to 2 mistakes
        // 1 star: 3+ mistakes
        let stars = 3;
        if (this.mistakes >= 3) {
            stars = 1;
        } else if (this.mistakes >= 1) {
            stars = 2;
        }

        // Record progress if campaign
        if (this.mode === 'campaign') {
            window.levelManager.recordCompletion(this.levelId, stars, this.timer, this.moves);
        }

        // Victory fanfare and confetti
        window.soundEngine.playVictory();
        const width = this.canvas.width / this.renderer.dpr;
        const height = this.canvas.height / this.renderer.dpr;
        this.particles.addVictoryConfetti(width, height);

        if (this.ui.onVictory) {
            this.ui.onVictory({
                levelId: this.levelId,
                title: this.levelTitle,
                stars: stars,
                moves: this.moves,
                mistakes: this.mistakes,
                time: this.timer,
                score: this.score,
                isCampaign: this.mode === 'campaign'
            });
        }
    }

    render() {
        this.renderer.render(this, this.particles);
    }
}

window.ArrowGame = ArrowGame;
