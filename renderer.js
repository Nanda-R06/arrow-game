/**
 * Canvas Renderer for Arrow Puzzle Game.
 * Features High-DPI sub-pixel rendering, spring physics, dynamic lighting, and particle effects.
 */
class GameRenderer {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.dpr = window.devicePixelRatio || 1;

        // Visual Layout parameters (recalculated on resize)
        this.cellSize = 64;
        this.offsetX = 0;
        this.offsetY = 0;
        this.boardWidth = 0;
        this.boardHeight = 0;

        // Screen shake
        this.shakeTime = 0;
        this.shakeIntensity = 0;

        // Theme Definitions
        this.themes = {
            dark: {
                name: 'Midnight Neon',
                bg: '#0f172a',
                boardBg: '#1e293b',
                gridLine: 'rgba(255, 255, 255, 0.05)',
                tileBg: 'rgba(255, 255, 255, 0.03)',
                arrowBody: '#38bdf8',
                arrowHead: '#0284c7',
                arrowShadow: 'rgba(0, 0, 0, 0.4)',
                arrowGlow: 'rgba(56, 189, 248, 0.35)',
                blockedTint: '#ef4444',
                obstacleBg: '#475569',
                obstacleBorder: '#64748b',
                hintColor: '#fbbf24'
            },
            zen: {
                name: 'Clean Zen',
                bg: '#f8fafc',
                boardBg: '#ffffff',
                gridLine: 'rgba(0, 0, 0, 0.04)',
                tileBg: 'rgba(0, 0, 0, 0.02)',
                arrowBody: '#0ea5e9',
                arrowHead: '#0284c7',
                arrowShadow: 'rgba(0, 0, 0, 0.12)',
                arrowGlow: 'rgba(14, 165, 233, 0.25)',
                blockedTint: '#f43f5e',
                obstacleBg: '#94a3b8',
                obstacleBorder: '#cbd5e1',
                hintColor: '#f59e0b'
            },
            sunset: {
                name: 'Sunset Glow',
                bg: '#18181b',
                boardBg: '#27272a',
                gridLine: 'rgba(255, 255, 255, 0.06)',
                tileBg: 'rgba(255, 255, 255, 0.02)',
                arrowBody: '#f97316',
                arrowHead: '#ea580c',
                arrowShadow: 'rgba(0, 0, 0, 0.45)',
                arrowGlow: 'rgba(249, 115, 22, 0.4)',
                blockedTint: '#ef4444',
                obstacleBg: '#52525b',
                obstacleBorder: '#71717a',
                hintColor: '#fde047'
            },
            cyberpunk: {
                name: 'Cyberpunk',
                bg: '#09090b',
                boardBg: '#121217',
                gridLine: 'rgba(236, 72, 153, 0.1)',
                tileBg: 'rgba(255, 255, 255, 0.02)',
                arrowBody: '#06b6d4',
                arrowHead: '#ec4899',
                arrowShadow: 'rgba(0, 0, 0, 0.6)',
                arrowGlow: 'rgba(6, 182, 212, 0.5)',
                blockedTint: '#f43f5e',
                obstacleBg: '#27272a',
                obstacleBorder: '#a855f7',
                hintColor: '#a855f7'
            }
        };

        this.currentThemeKey = localStorage.getItem('arrow_game_theme') || 'dark';
        this.theme = this.themes[this.currentThemeKey] || this.themes.dark;

        // Direction specific hue shifts for visual variety
        this.dirColors = {
            'UP': '#38bdf8',       // Sky Blue
            'RIGHT': '#34d399',    // Emerald Green
            'DOWN': '#a78bfa',     // Purple
            'LEFT': '#fb923c',     // Warm Amber
            'UP_RIGHT': '#2dd4bf', // Teal
            'DOWN_RIGHT': '#f472b6',// Pink
            'DOWN_LEFT': '#c084fc', // Violet
            'UP_LEFT': '#facc15'    // Yellow
        };
    }

    setTheme(key) {
        if (this.themes[key]) {
            this.currentThemeKey = key;
            this.theme = this.themes[key];
            localStorage.setItem('arrow_game_theme', key);
            document.body.className = `theme-${key}`;
        }
    }

    triggerShake(intensity = 6, duration = 0.25) {
        this.shakeIntensity = intensity;
        this.shakeTime = duration;
    }

    resize(rows, cols) {
        const container = this.canvas.parentElement;
        const rect = container.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        this.dpr = window.devicePixelRatio || 1;
        this.canvas.width = width * this.dpr;
        this.canvas.height = height * this.dpr;
        this.canvas.style.width = `${width}px`;
        this.canvas.style.height = `${height}px`;

        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        this.ctx.scale(this.dpr, this.dpr);

        // Calculate responsive cell size based on board dimensions
        const padding = 48;
        const availW = Math.max(200, width - padding * 2);
        const availH = Math.max(200, height - padding * 2);

        const maxCellW = availW / cols;
        const maxCellH = availH / rows;

        // Clamp cell size between 44px and 80px for ideal touch and look
        this.cellSize = Math.min(80, Math.max(44, Math.floor(Math.min(maxCellW, maxCellH))));

        this.boardWidth = cols * this.cellSize;
        this.boardHeight = rows * this.cellSize;
        this.offsetX = Math.floor((width - this.boardWidth) / 2);
        this.offsetY = Math.floor((height - this.boardHeight) / 2);
    }

    screenToGrid(screenX, screenY) {
        const x = screenX - this.offsetX;
        const y = screenY - this.offsetY;

        if (x < 0 || y < 0 || x >= this.boardWidth || y >= this.boardHeight) {
            return null;
        }

        const col = Math.floor(x / this.cellSize);
        const row = Math.floor(y / this.cellSize);

        return { r: row, c: col };
    }

    getCellCenter(r, c) {
        return {
            x: this.offsetX + c * this.cellSize + this.cellSize / 2,
            y: this.offsetY + r * this.cellSize + this.cellSize / 2
        };
    }

    update(dt) {
        if (this.shakeTime > 0) {
            this.shakeTime -= dt;
            if (this.shakeTime <= 0) {
                this.shakeIntensity = 0;
            }
        }
    }

    render(gameState, particles) {
        const ctx = this.ctx;
        const width = this.canvas.width / this.dpr;
        const height = this.canvas.height / this.dpr;

        ctx.save();

        // 1. Clear background
        ctx.fillStyle = this.theme.bg;
        ctx.fillRect(0, 0, width, height);

        // Apply screen shake if active
        if (this.shakeTime > 0) {
            const currentShake = this.shakeIntensity * (this.shakeTime / 0.25);
            const ox = (Math.random() - 0.5) * currentShake * 2;
            const oy = (Math.random() - 0.5) * currentShake * 2;
            ctx.translate(ox, oy);
        }

        // 2. Draw Board Container
        this.drawBoardBackground(ctx, gameState.rows, gameState.cols);

        // 3. Draw Grid Tiles
        this.drawGridTiles(ctx, gameState.rows, gameState.cols);

        // 4. Draw Obstacles
        this.drawObstacles(ctx, gameState.obstacles);

        // 5. Draw Arrows (Idle & Animating)
        this.drawArrows(ctx, gameState.arrows, gameState.hoveredArrowId, gameState.hintedArrowId);

        // 6. Draw Particles and Pulses
        if (particles) {
            particles.render(ctx);
        }

        ctx.restore();
    }

    drawBoardBackground(ctx, rows, cols) {
        const pad = 12;
        const rx = this.offsetX - pad;
        const ry = this.offsetY - pad;
        const rw = this.boardWidth + pad * 2;
        const rh = this.boardHeight + pad * 2;

        ctx.save();
        ctx.fillStyle = this.theme.boardBg;
        ctx.shadowColor = 'rgba(0, 0, 0, 0.25)';
        ctx.shadowBlur = 24;
        ctx.shadowOffsetY = 8;

        this.roundRect(ctx, rx, ry, rw, rh, 20);
        ctx.fill();

        // Subtle border
        ctx.shadowColor = 'transparent';
        ctx.strokeStyle = this.theme.gridLine;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.restore();
    }

    drawGridTiles(ctx, rows, cols) {
        const cs = this.cellSize;
        const gap = 4;

        ctx.save();
        ctx.fillStyle = this.theme.tileBg;

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                const x = this.offsetX + c * cs + gap / 2;
                const y = this.offsetY + r * cs + gap / 2;
                const size = cs - gap;

                this.roundRect(ctx, x, y, size, size, 10);
                ctx.fill();
            }
        }
        ctx.restore();
    }

    drawObstacles(ctx, obstacles) {
        if (!obstacles || obstacles.length === 0) return;

        const cs = this.cellSize;
        const size = cs * 0.76;

        ctx.save();
        for (const obs of obstacles) {
            const center = this.getCellCenter(obs.r, obs.c);

            // Rock shadow
            ctx.shadowColor = 'rgba(0,0,0,0.35)';
            ctx.shadowBlur = 10;
            ctx.shadowOffsetY = 4;

            // Rock body
            ctx.fillStyle = this.theme.obstacleBg;
            this.roundRect(ctx, center.x - size / 2, center.y - size / 2, size, size, 12);
            ctx.fill();

            // Bevel & border
            ctx.shadowColor = 'transparent';
            ctx.strokeStyle = this.theme.obstacleBorder;
            ctx.lineWidth = 2;
            ctx.stroke();

            // Inner rock detail
            ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
            this.roundRect(ctx, center.x - size / 4, center.y - size / 4, size / 2, size / 2, 6);
            ctx.fill();
        }
        ctx.restore();
    }

    drawArrows(ctx, arrows, hoveredId, hintedId) {
        const cs = this.cellSize;

        for (const arrow of arrows) {
            if (!arrow.active && arrow.animState !== 'flying') continue;

            ctx.save();

            let x = 0;
            let y = 0;
            let scale = 1.0;
            let opacity = 1.0;
            let blockedShift = { x: 0, y: 0 };
            const isHovered = (arrow.id === hoveredId);
            const isHinted = (arrow.id === hintedId);

            const dirInfo = DIRECTIONS[arrow.dir] || DIRECTIONS.UP;

            if (arrow.animState === 'flying') {
                // Flying animation interpolation
                x = arrow.animX;
                y = arrow.animY;
                scale = arrow.animScale || 1.0;
                opacity = Math.max(0, arrow.animAlpha !== undefined ? arrow.animAlpha : 1.0);
            } else if (arrow.animState === 'blocked') {
                // Spring wobble animation
                const center = this.getCellCenter(arrow.r, arrow.c);
                const wobble = Math.sin(arrow.animTimer * 28) * Math.exp(-arrow.animTimer * 9) * 16;
                // Dash forward slightly along arrow direction
                const forwardKick = Math.max(0, Math.sin(arrow.animTimer * 14)) * Math.exp(-arrow.animTimer * 6) * 14;

                blockedShift.x = dirInfo.dc * forwardKick - dirInfo.dr * wobble;
                blockedShift.y = dirInfo.dr * forwardKick + dirInfo.dc * wobble;

                x = center.x + blockedShift.x;
                y = center.y + blockedShift.y;
                scale = 1.0 + Math.sin(arrow.animTimer * 20) * 0.05;
            } else {
                // Idle or hovered
                const center = this.getCellCenter(arrow.r, arrow.c);
                x = center.x;
                y = center.y;
                if (isHovered) {
                    scale = 1.1;
                }
            }

            ctx.globalAlpha = opacity;
            ctx.translate(x, y);
            ctx.rotate(dirInfo.angle);
            ctx.scale(scale, scale);

            // Hint halo glow
            if (isHinted) {
                ctx.save();
                ctx.shadowColor = this.theme.hintColor;
                ctx.shadowBlur = 18;
                ctx.strokeStyle = this.theme.hintColor;
                ctx.lineWidth = 3;
                const haloR = cs * 0.44;
                ctx.beginPath();
                ctx.arc(0, 0, haloR, 0, Math.PI * 2);
                ctx.stroke();
                ctx.restore();
            }

            // Draw modern capsule arrow
            this.drawArrowShape(ctx, cs, arrow, isHovered);

            ctx.restore();
        }
    }

    drawArrowShape(ctx, cs, arrow, isHovered) {
        const length = cs * 0.72;
        const width = cs * 0.48;
        const radius = width * 0.35;

        // Base color can vary by direction or theme
        const baseColor = this.dirColors[arrow.dir] || this.theme.arrowBody;

        // Shadow
        ctx.shadowColor = isHovered ? this.theme.arrowGlow : this.theme.arrowShadow;
        ctx.shadowBlur = isHovered ? 16 : 8;
        ctx.shadowOffsetY = isHovered ? 2 : 4;

        // Gradient for body
        const grad = ctx.createLinearGradient(-length / 2, 0, length / 2, 0);
        grad.addColorStop(0, baseColor);
        grad.addColorStop(0.7, baseColor);
        grad.addColorStop(1, '#ffffff');

        // Draw sleek dart / arrow shape pointing to the RIGHT (angle 0)
        ctx.beginPath();
        const tipX = length / 2;
        const backX = -length / 2;
        const halfW = width / 2;
        const headBackX = length * 0.1;

        // Arrow geometry: Rounded back, straight body, sleek triangular arrowhead
        ctx.moveTo(backX + radius, -halfW * 0.55);
        ctx.lineTo(headBackX, -halfW * 0.55);
        ctx.lineTo(headBackX, -halfW);
        ctx.lineTo(tipX, 0);
        ctx.lineTo(headBackX, halfW);
        ctx.lineTo(headBackX, halfW * 0.55);
        ctx.lineTo(backX + radius, halfW * 0.55);
        ctx.arcTo(backX, halfW * 0.55, backX, 0, radius);
        ctx.arcTo(backX, -halfW * 0.55, backX + radius, -halfW * 0.55, radius);
        ctx.closePath();

        ctx.fillStyle = grad;
        ctx.fill();

        // Inner chevron stripe detail
        ctx.shadowColor = 'transparent';
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.45)';
        ctx.lineWidth = Math.max(2, cs * 0.04);
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        ctx.beginPath();
        ctx.moveTo(-length * 0.15, -halfW * 0.28);
        ctx.lineTo(length * 0.05, 0);
        ctx.lineTo(-length * 0.15, halfW * 0.28);
        ctx.stroke();

        // Highlighting / border if hovered or blocked
        if (arrow.animState === 'blocked') {
            ctx.strokeStyle = this.theme.blockedTint;
            ctx.lineWidth = 3;
            ctx.stroke();
        } else if (isHovered) {
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 2;
            ctx.stroke();
        }
    }

    roundRect(ctx, x, y, width, height, radius) {
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
    }
}

window.GameRenderer = GameRenderer;
