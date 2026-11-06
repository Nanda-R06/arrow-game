# Arrow Escape (Arrow Puzzle Game Clone)

A modern, highly polished clone of the viral casual spatial puzzle game ("Arrow Puzzle" / "Tap Away" / "Arrows").

![Game Genre](https://img.shields.io/badge/genre-casual%20puzzle-blue)
![Platform](https://img.shields.io/badge/platform-web%20%7C%20mobile-green)
![Zero Dependencies](https://img.shields.io/badge/dependencies-none%20(vanilla%20JS)-orange)

---

## 🎮 How to Play

1. **Objective**: Release every single arrow until the board is completely empty.
2. **Flight**: Tapping an arrow causes it to launch straight forward in the direction it points (↑, ↓, ←, →, or diagonals ↗, ↘, ↙, ↖).
3. **Collisions & Blocking**:
   - If its flight path is clear all the way off the board, it accelerates off with a satisfying whoosh and chimes!
   - If another arrow or stone obstacle blocks its direct path, it collides, rattles with a bonk sound, and returns to place.
4. **Combos**: Consecutive releases without a collision build up combo multipliers and play ascending melodic pentatonic scale notes.
5. **Star Ratings**:
   - ⭐⭐⭐ **3 Stars**: 0 mistakes
   - ⭐⭐☆ **2 Stars**: 1–2 mistakes
   - ⭐☆☆ **1 Star**: 3+ mistakes

---

## ✨ Features

- **20 Challenging Handcrafted Campaign Levels**: Scaled up in difficulty from tight 4x4 interlocking rings to colossal 9x9 mazes with up to 50 arrows, diagonal crossfires, and stone pillars.
- **🧠 Brain Gate Math Checkpoints**: After clearing each level, solve a quick mental math question to unlock the next level and earn a +500 bonus score! Questions scale from quick arithmetic up to algebra, squares, and percentages.
- **Infinite / Endless Puzzle Generator**: Generates 100% verified, mathematically guaranteed-solvable puzzles of any size (4x4 up to 8x8) across Casual, Tricky, and Master difficulties using reverse topological placement.
- **Procedural Web Audio API Sound Engine**: Zero audio file downloads needed! Procedurally synthesizes aerodynamic whooshes, resonant collision thumps, melodic combo bell chimes, math success fanfares, and error buzzes.
- **High-DPI Particle Engine**: Smooth 60 FPS particles, trailing flight dust, collision sparks, unblock pulse ripples, floating combo text, and victory confetti.
- **Undo & Hint Systems**:
  - Full undo history stack to step backward.
  - Intelligent solver-backed hint beacon that highlights a free arrow.
- **4 Visual Themes**:
  - 🌌 **Midnight Neon** (Dark slate with cyan & violet glow)
  - 🍃 **Clean Zen** (Bright minimal paper aesthetic)
  - 🌅 **Sunset Glow** (Warm amber & coral tones)
  - ⚡ **Cyberpunk** (High-contrast electric magenta & turquoise)
- **Responsive & Touch Friendly**: Seamlessly scales to any screen aspect ratio, mobile devices, tablets, and desktop displays.
- **Keyboard Shortcuts**:
  - `Z` or `U`: Undo move
  - `H`: Hint
  - `R`: Restart level
  - `M`: Toggle Sound Mute
  - `Esc`: Close any open modal
  - `Enter` or `Space`: Advance to next level on victory

---

## 🚀 How to Run

No installation, build step, or server is required!

### Option 1: Direct Double Click / Open
Simply open `index.html` in any modern web browser (Chrome, Edge, Firefox, Safari).

On Windows PowerShell:
```powershell
start "C:\Users\NANDA\.gemini\antigravity\scratch\arrow-puzzle-game\index.html"
```

### Option 2: Local Web Server (Optional)
If you prefer running a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node / npx
npx serve
```
Then navigate to `http://localhost:8000`.

---

## 📁 Code Architecture

```
arrow-puzzle-game/
├── index.html          # HTML shell, responsive viewport, modern HUD & modal dialogs
├── css/
│   └── style.css       # Glassmorphism styling, responsive layout, theme definitions
├── js/
│   ├── audio.js        # Web Audio API procedural synthesizer (whoosh, thuds, chimes)
│   ├── particles.js    # 60fps Canvas particle engine (trails, sparks, pulses, confetti)
│   ├── solver.js       # Topological Kahn raycasting solver & clear-path validator
│   ├── generator.js    # Reverse-time procedural puzzle generator (100% solvable)
│   ├── levels.js       # Handcrafted 20-level campaign & localStorage progress manager
│   ├── math.js         # Brain Gate progressive math challenge generator & evaluator
│   ├── renderer.js     # High-DPI canvas renderer with spring animations & themes
│   ├── game.js         # Core game state, raycasting, combo counter, undo stack
│   └── app.js          # App lifecycle, event listeners, keyboard controls & UI binds
└── README.md
```
