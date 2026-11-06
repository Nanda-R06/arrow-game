/**
 * Procedural Puzzle Generator for Arrow Puzzle Game.
 * Uses reverse-time topological placement to guarantee 100% solvable puzzles every time.
 */

class PuzzleGenerator {
    /**
     * Generates a puzzle with guaranteed solution.
     * @param {Object} options
     * @param {number} options.rows
     * @param {number} options.cols
     * @param {number} options.arrowCount
     * @param {boolean} options.allowDiagonals
     * @param {number} options.obstacleCount
     */
    static generate(options = {}) {
        const dMap = (typeof window !== 'undefined' && window.DIRECTIONS) ? window.DIRECTIONS : (typeof DIRECTIONS !== 'undefined' ? DIRECTIONS : {});
        const solver = (typeof window !== 'undefined' && window.PuzzleSolver) ? window.PuzzleSolver : (typeof PuzzleSolver !== 'undefined' ? PuzzleSolver : null);

        const rows = options.rows || 5;
        const cols = options.cols || 5;
        const targetArrows = options.arrowCount || Math.floor(rows * cols * 0.55);
        const allowDiagonals = !!options.allowDiagonals;
        const obstacleCount = options.obstacleCount || 0;

        const cardinalDirs = ['UP', 'DOWN', 'LEFT', 'RIGHT'];
        const diagonalDirs = ['UP_LEFT', 'UP_RIGHT', 'DOWN_LEFT', 'DOWN_RIGHT'];
        const allDirs = allowDiagonals ? [...cardinalDirs, ...diagonalDirs] : cardinalDirs;

        let attempts = 0;
        const maxAttempts = 30;

        while (attempts < maxAttempts) {
            attempts++;
            const grid = {}; // "r,c" -> item
            const arrows = [];
            const obstacles = [];

            // 1. Place random obstacles if requested
            if (obstacleCount > 0) {
                let obsPlaced = 0;
                let obsAttempts = 0;
                while (obsPlaced < obstacleCount && obsAttempts < 50) {
                    obsAttempts++;
                    // Keep obstacles inside the grid away from borders
                    const r = 1 + Math.floor(Math.random() * (rows - 2));
                    const c = 1 + Math.floor(Math.random() * (cols - 2));
                    const key = `${r},${c}`;
                    if (!grid[key]) {
                        const obs = { id: `obs_${obsPlaced}`, r, c, type: 'rock', isObstacle: true };
                        grid[key] = obs;
                        obstacles.push(obs);
                        obsPlaced++;
                    }
                }
            }

            // 2. Reverse placement of arrows
            let placed = 0;
            let stepAttempts = 0;
            const maxStepAttempts = 500;

            while (placed < targetArrows && stepAttempts < maxStepAttempts) {
                stepAttempts++;

                // Pick an empty cell
                const r = Math.floor(Math.random() * rows);
                const c = Math.floor(Math.random() * cols);
                const key = `${r},${c}`;

                if (grid[key]) continue; // Cell already occupied

                // Shuffle available directions
                const shuffledDirs = [...allDirs].sort(() => Math.random() - 0.5);

                let validDir = null;

                for (const testDir of shuffledDirs) {
                    const dirInfo = dMap[testDir];
                    if (!dirInfo) continue;
                    let currR = r + dirInfo.dr;
                    let currC = c + dirInfo.dc;
                    let pathClear = true;

                    // In reverse time, for this arrow to shoot out safely in forward time,
                    // its path to the boundary must currently be clear of already placed items!
                    while (currR >= 0 && currR < rows && currC >= 0 && currC < cols) {
                        if (grid[`${currR},${currC}`]) {
                            pathClear = false;
                            break;
                        }
                        currR += dirInfo.dr;
                        currC += dirInfo.dc;
                    }

                    if (pathClear) {
                        validDir = testDir;
                        break;
                    }
                }

                if (validDir) {
                    const arrow = {
                        id: `arrow_${placed + 1}`,
                        r: r,
                        c: c,
                        dir: validDir,
                        active: true
                    };
                    grid[key] = arrow;
                    arrows.push(arrow);
                    placed++;
                }
            }

            // 3. Double-check with PuzzleSolver
            if (solver && arrows.length >= Math.min(targetArrows * 0.7, 4)) {
                const solution = solver.solve(arrows, obstacles, rows, cols);
                if (solution.solvable) {
                    return {
                        rows,
                        cols,
                        arrows,
                        obstacles,
                        solution
                    };
                }
            }
        }

        // Fallback: Generate a guaranteed simple puzzle if maxAttempts exceeded
        return this.generateFallback(rows, cols);
    }

    static generateFallback(rows = 4, cols = 4) {
        const solver = (typeof window !== 'undefined' && window.PuzzleSolver) ? window.PuzzleSolver : (typeof PuzzleSolver !== 'undefined' ? PuzzleSolver : null);
        const arrows = [];
        let id = 1;
        // Simple outer ring pointing outwards
        for (let c = 0; c < cols; c++) {
            arrows.push({ id: `arrow_${id++}`, r: 0, c: c, dir: 'UP', active: true });
            arrows.push({ id: `arrow_${id++}`, r: rows - 1, c: c, dir: 'DOWN', active: true });
        }
        for (let r = 1; r < rows - 1; r++) {
            arrows.push({ id: `arrow_${id++}`, r: r, c: 0, dir: 'LEFT', active: true });
            arrows.push({ id: `arrow_${id++}`, r: r, c: cols - 1, dir: 'RIGHT', active: true });
        }
        return {
            rows,
            cols,
            arrows,
            obstacles: [],
            solution: solver ? solver.solve(arrows, [], rows, cols) : { solvable: true }
        };
    }
}

if (typeof window !== 'undefined') {
    window.PuzzleGenerator = PuzzleGenerator;
}
