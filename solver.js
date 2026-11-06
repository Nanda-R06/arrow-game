/**
 * Direction definitions and Topological Solver for Arrow Puzzle Game.
 */
const DIRECTIONS = {
    'UP':         { dr: -1, dc:  0, angle: -Math.PI / 2, name: 'UP', symbol: '↑' },
    'DOWN':       { dr:  1, dc:  0, angle:  Math.PI / 2, name: 'DOWN', symbol: '↓' },
    'LEFT':       { dr:  0, dc: -1, angle:  Math.PI,     name: 'LEFT', symbol: '←' },
    'RIGHT':      { dr:  0, dc:  1, angle:  0,           name: 'RIGHT', symbol: '→' },
    'UP_LEFT':    { dr: -1, dc: -1, angle: -3 * Math.PI / 4, name: 'UP_LEFT', symbol: '↖' },
    'UP_RIGHT':   { dr: -1, dc:  1, angle: -Math.PI / 4,     name: 'UP_RIGHT', symbol: '↗' },
    'DOWN_LEFT':  { dr:  1, dc: -1, angle:  3 * Math.PI / 4, name: 'DOWN_LEFT', symbol: '↙' },
    'DOWN_RIGHT': { dr:  1, dc:  1, angle:  Math.PI / 4,     name: 'DOWN_RIGHT', symbol: '↘' }
};

class PuzzleSolver {
    /**
     * Checks if a single arrow can escape the board without colliding.
     * @param {Object} grid - 2D Map/Object indexed by "r,c" of active items
     * @param {Object} arrow - The arrow to check
     * @param {number} rows - Board row count
     * @param {number} cols - Board column count
     * @returns {Object} { clear: boolean, blocker?: Object, distance: number }
     */
    static checkArrowClear(grid, arrow, rows, cols) {
        const dir = DIRECTIONS[arrow.dir];
        if (!dir) return { clear: false, distance: 0 };

        let currR = arrow.r + dir.dr;
        let currC = arrow.c + dir.dc;
        let distance = 1;

        while (currR >= 0 && currR < rows && currC >= 0 && currC < cols) {
            const key = `${currR},${currC}`;
            const item = grid[key];

            if (item && item.active !== false) {
                return {
                    clear: false,
                    blocker: item,
                    blockerR: currR,
                    blockerC: currC,
                    distance: distance
                };
            }

            currR += dir.dr;
            currC += dir.dc;
            distance++;
        }

        return { clear: true, distance: distance };
    }

    /**
     * Finds all arrows that are currently free to escape.
     */
    static getFreeArrows(grid, arrows, rows, cols) {
        const free = [];
        for (const arrow of arrows) {
            if (!arrow.active) continue;
            const res = this.checkArrowClear(grid, arrow, rows, cols);
            if (res.clear) {
                free.push(arrow);
            }
        }
        return free;
    }

    /**
     * Full solver to find complete clearing order and verify solvability.
     * Uses forward peeling simulation (Kahn's Topological Sort).
     */
    static solve(arrows, obstacles, rows, cols) {
        // Clone state for simulation
        const simGrid = {};
        const remainingArrows = new Map();

        // Place obstacles
        if (obstacles) {
            for (const obs of obstacles) {
                simGrid[`${obs.r},${obs.c}`] = { ...obs, isObstacle: true, active: true };
            }
        }

        // Place arrows
        for (const arrow of arrows) {
            const a = { ...arrow, active: true };
            simGrid[`${a.r},${a.c}`] = a;
            remainingArrows.set(a.id, a);
        }

        const solutionSequence = [];

        while (remainingArrows.size > 0) {
            let foundAny = false;

            for (const [id, arrow] of remainingArrows.entries()) {
                const check = this.checkArrowClear(simGrid, arrow, rows, cols);
                if (check.clear) {
                    foundAny = true;
                    solutionSequence.push(arrow.id);
                    // Remove from sim grid
                    delete simGrid[`${arrow.r},${arrow.c}`];
                    remainingArrows.delete(id);
                    break; // Restart loop to check next state
                }
            }

            if (!foundAny) {
                // Deadlock encountered!
                return {
                    solvable: false,
                    solvedCount: solutionSequence.length,
                    remainingCount: remainingArrows.size,
                    sequence: solutionSequence
                };
            }
        }

        return {
            solvable: true,
            sequence: solutionSequence
        };
    }
}

window.DIRECTIONS = DIRECTIONS;
window.PuzzleSolver = PuzzleSolver;
