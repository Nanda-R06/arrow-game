/**
 * Main Application Controller for Arrow Escape.
 * Wire up UI, Modals, State Listeners, and Game Lifecycle.
 */

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('game-canvas');

    // UI Elements
    const elLevelBadge = document.getElementById('level-indicator');
    const elMoves = document.getElementById('stat-moves');
    const elMistakes = document.getElementById('stat-mistakes');
    const elScore = document.getElementById('stat-score');
    const elCombo = document.getElementById('stat-combo');
    const elTime = document.getElementById('stat-time');
    const elHintBanner = document.getElementById('hint-banner');
    const elSoundIcon = document.getElementById('sound-icon');

    // Buttons
    const btnUndo = document.getElementById('btn-undo');
    const btnHint = document.getElementById('btn-hint');
    const btnRestart = document.getElementById('btn-restart');
    const btnSound = document.getElementById('btn-sound');
    const btnTheme = document.getElementById('btn-theme');
    const btnLevels = document.getElementById('btn-levels');
    const btnEndless = document.getElementById('btn-endless');
    const btnHelp = document.getElementById('btn-help');

    // Modals
    const modalVictory = document.getElementById('modal-victory');
    const modalLevels = document.getElementById('modal-levels');
    const modalEndless = document.getElementById('modal-endless');
    const modalHelp = document.getElementById('modal-help');
    const modalMath = document.getElementById('modal-math');

    // Math Checkpoint Elements
    const mathQuestionEl = document.getElementById('math-question');
    const mathOptionsEl = document.getElementById('math-options');
    const mathFeedbackEl = document.getElementById('math-feedback');
    const mathSubtitleEl = document.getElementById('math-subtitle');
    const btnMathSkip = document.getElementById('btn-math-skip');
    let currentMathData = null;
    let pendingVictoryData = null;

    // Victory Elements
    const btnNextLevel = document.getElementById('btn-next-level');
    const btnVictoryReplay = document.getElementById('btn-victory-replay');
    const btnVictoryLevels = document.getElementById('btn-victory-levels');
    const summaryMoves = document.getElementById('summary-moves');
    const summaryMistakes = document.getElementById('summary-mistakes');
    const summaryTime = document.getElementById('summary-time');
    const summaryScore = document.getElementById('summary-score');
    const star1 = document.getElementById('star-1');
    const star2 = document.getElementById('star-2');
    const star3 = document.getElementById('star-3');

    // Endless options
    let selectedSize = 5;
    let selectedDiff = 'casual';

    // Theme list
    const themeKeys = ['dark', 'zen', 'sunset', 'cyberpunk'];
    let currentThemeIdx = themeKeys.indexOf(localStorage.getItem('arrow_game_theme') || 'dark');
    if (currentThemeIdx === -1) currentThemeIdx = 0;

    // Helper to format time
    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    // Instantiate Game with callbacks
    const game = new ArrowGame(canvas, {
        onLevelLoaded: (g) => {
            if (g.mode === 'campaign') {
                elLevelBadge.textContent = `Level ${g.levelId}: ${g.levelTitle}`;
            } else {
                elLevelBadge.textContent = g.levelTitle;
            }
            elHintBanner.textContent = g.hintText || "Release arrows in the right order!";
            updateHUD(g);
        },
        onMoveMade: (g) => {
            updateHUD(g);
        },
        onComboReset: () => {
            elCombo.classList.remove('combo-active');
            elCombo.textContent = '0x';
        },
        onVictory: (data) => {
            pendingVictoryData = data;
            if (data.isCampaign && data.levelId < CAMPAIGN_LEVELS.length) {
                // Show Brain Gate Math Challenge between campaign levels!
                showMathCheckpoint(data);
            } else {
                showVictoryModal(data);
            }
        }
    });

    // Update HUD Stats
    function updateHUD(g) {
        elMoves.textContent = g.moves;
        elMistakes.textContent = g.mistakes;
        elScore.textContent = g.score;

        if (g.combo > 1) {
            elCombo.textContent = `${g.combo}x 🔥`;
            elCombo.classList.add('combo-active');
        } else {
            elCombo.textContent = `${g.combo}x`;
            elCombo.classList.remove('combo-active');
        }

        // Enable/disable undo button
        if (g.undoStack.length > 0 && !g.isCompleted) {
            btnUndo.classList.remove('disabled');
        } else {
            btnUndo.classList.add('disabled');
        }
    }

    // Timer updater interval
    setInterval(() => {
        if (game.isRunning && !game.isCompleted) {
            elTime.textContent = formatTime(game.timer);
        }
    }, 500);

    // Initial theme setup
    document.body.className = `theme-${themeKeys[currentThemeIdx]}`;
    game.renderer.setTheme(themeKeys[currentThemeIdx]);

    // Initial sound icon
    elSoundIcon.textContent = window.soundEngine.muted ? '🔇' : '🔊';

    // Start Campaign Level 1 (or highest unlocked level)
    const initialLevel = Math.min(window.levelManager.progress.unlockedLevel || 1, CAMPAIGN_LEVELS.length);
    game.loadCampaignLevel(initialLevel);
    game.start();

    // =========================================================================
    // Button Event Listeners
    // =========================================================================

    btnUndo.addEventListener('click', () => {
        game.undo();
    });

    btnHint.addEventListener('click', () => {
        game.triggerHint();
    });

    btnRestart.addEventListener('click', () => {
        window.soundEngine.playClick();
        game.restart();
    });

    btnSound.addEventListener('click', () => {
        const isMuted = window.soundEngine.toggleMute();
        elSoundIcon.textContent = isMuted ? '🔇' : '🔊';
        window.soundEngine.playClick();
    });

    btnTheme.addEventListener('click', () => {
        currentThemeIdx = (currentThemeIdx + 1) % themeKeys.length;
        const newTheme = themeKeys[currentThemeIdx];
        document.body.className = `theme-${newTheme}`;
        game.renderer.setTheme(newTheme);
        window.soundEngine.playClick();
    });

    btnHelp.addEventListener('click', () => {
        window.soundEngine.playClick();
        modalHelp.classList.add('active');
    });

    document.getElementById('btn-close-help').addEventListener('click', () => {
        window.soundEngine.playClick();
        modalHelp.classList.remove('active');
    });

    // =========================================================================
    // Level Select Modal
    // =========================================================================

    btnLevels.addEventListener('click', () => {
        window.soundEngine.playClick();
        renderLevelGrid();
        modalLevels.classList.add('active');
    });

    document.getElementById('btn-close-levels').addEventListener('click', () => {
        window.soundEngine.playClick();
        modalLevels.classList.remove('active');
    });

    function renderLevelGrid() {
        const container = document.getElementById('levels-container');
        container.innerHTML = '';

        const levels = CAMPAIGN_LEVELS;
        const unlockedLvl = window.levelManager.progress.unlockedLevel || 1;

        levels.forEach(lvl => {
            const isUnlocked = lvl.id <= unlockedLvl;
            const stats = window.levelManager.getLevelStats(lvl.id);
            const isCurrent = (game.mode === 'campaign' && game.levelId === lvl.id);

            const cell = document.createElement('div');
            cell.className = `level-cell ${isUnlocked ? '' : 'locked'} ${isCurrent ? 'current' : ''}`;

            if (!isUnlocked) {
                cell.innerHTML = `<span>🔒</span>`;
            } else {
                let starsHtml = '';
                if (stats && stats.stars) {
                    starsHtml = `<div class="stars-mini">${'★'.repeat(stats.stars)}${'☆'.repeat(3 - stats.stars)}</div>`;
                }
                cell.innerHTML = `<span>${lvl.id}</span>${starsHtml}`;

                cell.addEventListener('click', () => {
                    window.soundEngine.playClick();
                    modalLevels.classList.remove('active');
                    game.loadCampaignLevel(lvl.id);
                });
            }

            container.appendChild(cell);
        });
    }

    // =========================================================================
    // Endless Mode Modal
    // =========================================================================

    btnEndless.addEventListener('click', () => {
        window.soundEngine.playClick();
        modalEndless.classList.add('active');
    });

    document.getElementById('btn-close-endless').addEventListener('click', () => {
        window.soundEngine.playClick();
        modalEndless.classList.remove('active');
    });

    // Segmented Size Buttons
    document.querySelectorAll('#gen-size-control .segment-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('#gen-size-control .segment-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedSize = parseInt(btn.dataset.size, 10);
            window.soundEngine.playClick();
        });
    });

    // Segmented Diff Buttons
    document.querySelectorAll('#gen-diff-control .segment-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('#gen-diff-control .segment-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedDiff = btn.dataset.diff;
            window.soundEngine.playClick();
        });
    });

    document.getElementById('btn-generate-play').addEventListener('click', () => {
        window.soundEngine.playClick();

        let density = 0.5;
        let allowDiagonals = false;
        let obstacles = 0;

        if (selectedDiff === 'casual') {
            density = 0.45;
            allowDiagonals = false;
            obstacles = 0;
        } else if (selectedDiff === 'tricky') {
            density = 0.6;
            allowDiagonals = true;
            obstacles = selectedSize >= 6 ? 1 : 0;
        } else if (selectedDiff === 'master') {
            density = 0.72;
            allowDiagonals = true;
            obstacles = selectedSize >= 6 ? 2 : 1;
        }

        const arrowCount = Math.floor(selectedSize * selectedSize * density);

        const generated = PuzzleGenerator.generate({
            rows: selectedSize,
            cols: selectedSize,
            arrowCount: arrowCount,
            allowDiagonals: allowDiagonals,
            obstacleCount: obstacles
        });

        modalEndless.classList.remove('active');
        game.loadCustomOrGenerated(
            generated,
            `Endless: ${selectedSize}x${selectedSize} (${selectedDiff.toUpperCase()})`
        );
    });

    // =========================================================================
    // Victory Modal
    // =========================================================================

    function showVictoryModal(data) {
        summaryMoves.textContent = data.moves;
        summaryMistakes.textContent = data.mistakes;
        summaryTime.textContent = formatTime(data.time);
        summaryScore.textContent = data.score;

        // Reset stars
        [star1, star2, star3].forEach(s => s.classList.remove('earned'));

        modalVictory.classList.add('active');

        // Sequenced star pop animation
        for (let i = 1; i <= data.stars; i++) {
            setTimeout(() => {
                const starEl = document.getElementById(`star-${i}`);
                if (starEl) starEl.classList.add('earned');
            }, i * 260);
        }

        // Configure Next Level button
        if (data.isCampaign) {
            if (data.levelId < CAMPAIGN_LEVELS.length) {
                btnNextLevel.style.display = 'inline-flex';
                btnNextLevel.textContent = `Next Level (${data.levelId + 1}) ➔`;
            } else {
                btnNextLevel.style.display = 'inline-flex';
                btnNextLevel.textContent = `Campaign Completed! Try Endless ♾️`;
            }
        } else {
            btnNextLevel.style.display = 'inline-flex';
            btnNextLevel.textContent = `Generate Another ♾️`;
        }
    }

    btnNextLevel.addEventListener('click', () => {
        window.soundEngine.playClick();
        modalVictory.classList.remove('active');

        if (game.mode === 'campaign') {
            if (game.levelId < CAMPAIGN_LEVELS.length) {
                game.loadCampaignLevel(game.levelId + 1);
            } else {
                modalEndless.classList.add('active');
            }
        } else {
            // Re-generate endless puzzle with current settings
            document.getElementById('btn-generate-play').click();
        }
    });

    btnVictoryReplay.addEventListener('click', () => {
        window.soundEngine.playClick();
        modalVictory.classList.remove('active');
        game.restart();
    });

    btnVictoryLevels.addEventListener('click', () => {
        window.soundEngine.playClick();
        modalVictory.classList.remove('active');
        renderLevelGrid();
        modalLevels.classList.add('active');
    });

    // =========================================================================
    // Brain Gate: Math Checkpoint
    // =========================================================================

    function showMathCheckpoint(data) {
        currentMathData = window.MathChallenge.generate(data.levelId);
        pendingVictoryData = data;

        const nextLvl = window.levelManager.getLevel(data.levelId + 1);
        mathSubtitleEl.textContent = `Solve to unlock Level ${data.levelId + 1}${nextLvl ? ': ' + nextLvl.title : ''}!`;
        mathQuestionEl.textContent = currentMathData.question;
        mathFeedbackEl.textContent = "Select an option or press 1-4 on your keyboard";
        mathFeedbackEl.className = "math-feedback";

        // Render options
        mathOptionsEl.innerHTML = '';
        currentMathData.options.forEach((opt, index) => {
            const btn = document.createElement('button');
            btn.className = 'math-option-btn';
            btn.dataset.val = opt;
            btn.dataset.idx = index + 1;
            btn.innerHTML = `<span class="math-option-badge">${index + 1}</span><span>${opt}</span>`;

            btn.addEventListener('click', () => {
                handleMathAnswer(opt, btn, data);
            });

            mathOptionsEl.appendChild(btn);
        });

        modalMath.classList.add('active');
    }

    let mathAnswerLock = false;

    function handleMathAnswer(chosen, btnEl, data) {
        if (mathAnswerLock || !currentMathData) return;

        if (chosen === currentMathData.answer) {
            // Correct Answer!
            mathAnswerLock = true;
            btnEl.classList.add('correct');
            window.soundEngine.playMathCorrect();

            // Bonus score
            game.score += 500;
            updateHUD(game);

            mathFeedbackEl.textContent = "🎉 Correct! +500 Math Bonus!";
            mathFeedbackEl.className = "math-feedback success";

            setTimeout(() => {
                modalMath.classList.remove('active');
                mathAnswerLock = false;
                currentMathData = null;
                // Advance directly to next level!
                game.loadCampaignLevel(data.levelId + 1);
            }, 850);
        } else {
            // Wrong Answer
            btnEl.classList.add('wrong');
            window.soundEngine.playMathWrong();
            mathFeedbackEl.textContent = "❌ Not quite! Give it another try.";
            mathFeedbackEl.className = "math-feedback error";

            setTimeout(() => {
                btnEl.classList.remove('wrong');
            }, 500);
        }
    }

    btnMathSkip.addEventListener('click', () => {
        window.soundEngine.playClick();
        modalMath.classList.remove('active');
        if (pendingVictoryData) {
            showVictoryModal(pendingVictoryData);
        }
    });

    // =========================================================================
    // Keyboard Shortcuts
    // =========================================================================

    window.addEventListener('keydown', (e) => {
        // If Math Modal is active, allow 1, 2, 3, 4 to pick answers
        if (modalMath.classList.contains('active')) {
            if (['1', '2', '3', '4'].includes(e.key)) {
                const idx = parseInt(e.key, 10);
                const targetBtn = mathOptionsEl.querySelector(`[data-idx="${idx}"]`);
                if (targetBtn) {
                    targetBtn.click();
                }
                return;
            }
            if (e.key === 'Escape') {
                modalMath.classList.remove('active');
                if (pendingVictoryData) showVictoryModal(pendingVictoryData);
                return;
            }
        }

        // If modal open, Escape closes it
        if (e.key === 'Escape') {
            [modalVictory, modalLevels, modalEndless, modalHelp, modalMath].forEach(m => m.classList.remove('active'));
            return;
        }

        // Space / Enter on Victory advances to next level
        if (modalVictory.classList.contains('active')) {
            if (e.key === 'Enter' || e.key === ' ') {
                btnNextLevel.click();
            }
            return;
        }

        // Game hotkeys
        if (e.key === 'z' || e.key === 'Z' || e.key === 'u' || e.key === 'U') {
            game.undo();
        } else if (e.key === 'h' || e.key === 'H') {
            game.triggerHint();
        } else if (e.key === 'r' || e.key === 'R') {
            game.restart();
        } else if (e.key === 'm' || e.key === 'M') {
            btnSound.click();
        }
    });
});
