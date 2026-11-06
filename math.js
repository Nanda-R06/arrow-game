/**
 * Math Challenge Generator for Arrow Escape.
 * Provides progressive math checkpoints between levels with smart distractors.
 */
class MathChallenge {
    /**
     * Generates a math question scaled to the completed level.
     * @param {number} level - The level just completed
     * @returns {Object} { question: string, answer: number, options: number[], prompt: string }
     */
    static generate(level = 1) {
        let question = "";
        let answer = 0;
        let prompt = "Solve to unlock the next level:";

        // Determine question tier
        if (level <= 3) {
            // Tier 1: Quick Addition / Subtraction / Single Digit Multiplication
            const type = Math.floor(Math.random() * 3);
            if (type === 0) {
                const a = Math.floor(Math.random() * 30) + 12;
                const b = Math.floor(Math.random() * 30) + 11;
                question = `${a} + ${b} = ?`;
                answer = a + b;
            } else if (type === 1) {
                const b = Math.floor(Math.random() * 25) + 10;
                const a = b + Math.floor(Math.random() * 35) + 10;
                question = `${a} - ${b} = ?`;
                answer = a - b;
            } else {
                const a = Math.floor(Math.random() * 7) + 3;
                const b = Math.floor(Math.random() * 7) + 4;
                question = `${a} × ${b} = ?`;
                answer = a * b;
            }
        } else if (level <= 7) {
            // Tier 2: Two-digit multiplication, division, and basic order of operations
            const type = Math.floor(Math.random() * 3);
            if (type === 0) {
                const a = Math.floor(Math.random() * 6) + 11; // 11-16
                const b = Math.floor(Math.random() * 6) + 4;  // 4-9
                question = `${a} × ${b} = ?`;
                answer = a * b;
            } else if (type === 1) {
                const b = Math.floor(Math.random() * 8) + 3;
                const q = Math.floor(Math.random() * 9) + 4;
                const a = b * q;
                question = `${a} ÷ ${b} = ?`;
                answer = q;
            } else {
                const a = Math.floor(Math.random() * 15) + 5;
                const b = Math.floor(Math.random() * 6) + 3;
                const c = Math.floor(Math.random() * 6) + 2;
                question = `${a} + ${b} × ${c} = ?`;
                answer = a + (b * c);
            }
        } else if (level <= 13) {
            // Tier 3: Missing factors, parentheses, and mixed operations
            const type = Math.floor(Math.random() * 3);
            if (type === 0) {
                const a = Math.floor(Math.random() * 8) + 4;
                const x = Math.floor(Math.random() * 8) + 3;
                const b = a * x;
                question = `? × ${a} = ${b}`;
                answer = x;
            } else if (type === 1) {
                const a = Math.floor(Math.random() * 15) + 15;
                const b = Math.floor(Math.random() * 8) + 3;
                const c = Math.floor(Math.random() * 5) + 3;
                question = `(${a} - ${b}) × ${c} = ?`;
                answer = (a - b) * c;
            } else {
                const a = Math.floor(Math.random() * 8) + 12;
                const b = Math.floor(Math.random() * 5) + 3;
                const c = Math.floor(Math.random() * 20) + 10;
                question = `${a} × ${b} - ${c} = ?`;
                answer = a * b - c;
            }
        } else {
            // Tier 4: Quick mental algebra, squares, percentages
            const type = Math.floor(Math.random() * 4);
            if (type === 0) {
                // Algebra: 2x + a = b
                const x = Math.floor(Math.random() * 9) + 3;
                const a = Math.floor(Math.random() * 15) + 5;
                const b = 2 * x + a;
                question = `2x + ${a} = ${b}  (Find x)`;
                answer = x;
            } else if (type === 1) {
                // Perfect squares (11^2 to 16^2)
                const base = Math.floor(Math.random() * 6) + 11;
                question = `${base}² = ?`;
                answer = base * base;
            } else if (type === 2) {
                // Percentage (25% or 50% or 20% of N)
                const pList = [20, 25, 50];
                const pct = pList[Math.floor(Math.random() * pList.length)];
                const multiplier = Math.floor(Math.random() * 8) + 2;
                const n = (100 / pct) * multiplier * 4;
                question = `${pct}% of ${n} = ?`;
                answer = (pct / 100) * n;
            } else {
                const a = Math.floor(Math.random() * 50) + 100;
                const b = Math.floor(Math.random() * 6) + 5;
                const c = Math.floor(Math.random() * 6) + 7;
                question = `${a} - (${b} × ${c}) = ?`;
                answer = a - (b * c);
            }
        }

        // Generate 3 clever unique distractors
        const optionsSet = new Set([answer]);
        const initialOffsets = [1, -1, 10, -10, 2, -2, 5, -5, 3, -3];

        for (const offset of initialOffsets) {
            if (optionsSet.size >= 4) break;
            const candidate = answer + offset;
            if (candidate > 0 && candidate !== answer) {
                optionsSet.add(candidate);
            }
        }

        // Guaranteed deterministic fallback if more options are needed
        let fallbackStep = 4;
        while (optionsSet.size < 4) {
            const c1 = answer + fallbackStep;
            if (c1 > 0) optionsSet.add(c1);
            if (optionsSet.size >= 4) break;
            const c2 = answer - fallbackStep;
            if (c2 > 0) optionsSet.add(c2);
            fallbackStep++;
        }

        // Shuffle options
        const options = Array.from(optionsSet).sort(() => Math.random() - 0.5);

        return {
            question,
            answer,
            options,
            prompt
        };
    }
}

if (typeof window !== 'undefined') {
    window.MathChallenge = MathChallenge;
}
