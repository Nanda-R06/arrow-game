/**
 * Web Audio API Sound Synthesizer for Arrow Puzzle Game.
 * Fully procedural - requires zero external audio files.
 */
class SoundEngine {
    constructor() {
        this.ctx = null;
        this.muted = localStorage.getItem('arrow_game_muted') === 'true';
        this.masterVolume = 0.4;
        this.isInitialized = false;

        // Scale notes for combo chimes (Pentatonic major: C4, D4, E4, G4, A4, C5, D5, E5, G5, A5, C6)
        this.scaleFrequencies = [
            261.63, 293.66, 329.63, 392.00, 440.00,
            523.25, 587.33, 659.25, 783.99, 880.00, 1046.50
        ];
    }

    init() {
        if (this.isInitialized) return;
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioContext();
            this.isInitialized = true;
        } catch (e) {
            console.warn("Web Audio API not supported", e);
        }
    }

    ensureContext() {
        if (!this.isInitialized) {
            this.init();
        }
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    setMuted(muted) {
        this.muted = muted;
        localStorage.setItem('arrow_game_muted', muted ? 'true' : 'false');
    }

    toggleMute() {
        this.setMuted(!this.muted);
        return this.muted;
    }

    // Play arrow escape whoosh sound + musical chime
    playRelease(combo = 0) {
        if (this.muted) return;
        this.ensureContext();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;

        // 1. Aerodynamic whoosh sound (Filtered noise sweep)
        const bufferSize = this.ctx.sampleRate * 0.25;
        const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            output[i] = Math.random() * 2 - 1;
        }

        const whiteNoise = this.ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(400, now);
        filter.frequency.exponentialRampToValueAtTime(1800, now + 0.12);
        filter.frequency.exponentialRampToValueAtTime(300, now + 0.25);
        filter.Q.setValueAtTime(3.0, now);

        const noiseGain = this.ctx.createGain();
        noiseGain.gain.setValueAtTime(0.01, now);
        noiseGain.gain.linearRampToValueAtTime(0.18 * this.masterVolume, now + 0.05);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

        whiteNoise.connect(filter);
        filter.connect(noiseGain);
        noiseGain.connect(this.ctx.destination);

        whiteNoise.start(now);
        whiteNoise.stop(now + 0.25);

        // 2. Tonal chime tuned to combo scale
        const noteIndex = Math.min(combo, this.scaleFrequencies.length - 1);
        const freq = this.scaleFrequencies[noteIndex];

        // Primary bell tone
        const osc1 = this.ctx.createOscillator();
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(freq, now);

        // Harmonious overtone (gives a glass/chime bell quality)
        const osc2 = this.ctx.createOscillator();
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(freq * 2.76, now);

        const toneGain = this.ctx.createGain();
        toneGain.gain.setValueAtTime(0.25 * this.masterVolume, now);
        toneGain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

        const overtoneGain = this.ctx.createGain();
        overtoneGain.gain.setValueAtTime(0.08 * this.masterVolume, now);
        overtoneGain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

        osc1.connect(toneGain);
        osc2.connect(overtoneGain);
        toneGain.connect(this.ctx.destination);
        overtoneGain.connect(this.ctx.destination);

        osc1.start(now);
        osc2.start(now);
        osc1.stop(now + 0.45);
        osc2.stop(now + 0.25);
    }

    // Play blocked collision / bonk sound
    playBlocked() {
        if (this.muted) return;
        this.ensureContext();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;

        // Damped thump oscillator
        const osc = this.ctx.createOscillator();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(140, now);
        osc.frequency.exponentialRampToValueAtTime(45, now + 0.12);

        // Thump gain
        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.35 * this.masterVolume, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

        // Snappy metallic click
        const clickOsc = this.ctx.createOscillator();
        clickOsc.type = 'square';
        clickOsc.frequency.setValueAtTime(480, now);
        clickOsc.frequency.exponentialRampToValueAtTime(80, now + 0.04);

        const clickGain = this.ctx.createGain();
        clickGain.gain.setValueAtTime(0.12 * this.masterVolume, now);
        clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

        osc.connect(gain);
        clickOsc.connect(clickGain);
        gain.connect(this.ctx.destination);
        clickGain.connect(this.ctx.destination);

        osc.start(now);
        clickOsc.start(now);
        osc.stop(now + 0.15);
        clickOsc.stop(now + 0.05);
    }

    // Play Hint chime
    playHint() {
        if (this.muted) return;
        this.ensureContext();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        const freqs = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 arpeggio

        freqs.forEach((freq, idx) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, now + idx * 0.06);

            gain.gain.setValueAtTime(0.12 * this.masterVolume, now + idx * 0.06);
            gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.3);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now + idx * 0.06);
            osc.stop(now + idx * 0.06 + 0.3);
        });
    }

    // Play level completed victory fanfare
    playVictory() {
        if (this.muted) return;
        this.ensureContext();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        // Major 9th triumphant chord progression: C4, G4, C5, E5, G5, B5, D6
        const notes = [
            { f: 261.63, t: 0.00, d: 0.6 },
            { f: 392.00, t: 0.08, d: 0.6 },
            { f: 523.25, t: 0.16, d: 0.7 },
            { f: 659.25, t: 0.24, d: 0.7 },
            { f: 783.99, t: 0.32, d: 0.8 },
            { f: 987.77, t: 0.40, d: 0.9 },
            { f: 1174.66, t: 0.48, d: 1.2 }
        ];

        notes.forEach(note => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(note.f, now + note.t);

            gain.gain.setValueAtTime(0.18 * this.masterVolume, now + note.t);
            gain.gain.exponentialRampToValueAtTime(0.001, now + note.t + note.d);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now + note.t);
            osc.stop(now + note.t + note.d);
        });
    }

    // Play undo sound
    playUndo() {
        if (this.muted) return;
        this.ensureContext();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, now); // D5 down to A4
        osc.frequency.exponentialRampToValueAtTime(440.00, now + 0.15);

        gain.gain.setValueAtTime(0.15 * this.masterVolume, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.15);
    }

    // Gentle UI button click
    playClick() {
        if (this.muted) return;
        this.ensureContext();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.exponentialRampToValueAtTime(200, now + 0.03);

        gain.gain.setValueAtTime(0.1 * this.masterVolume, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.03);
    }

    // Play Math Correct chime
    playMathCorrect() {
        if (this.muted) return;
        this.ensureContext();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        const freqs = [587.33, 880.00, 1174.66]; // D5 -> A5 -> D6 cheerful fanfare

        freqs.forEach((freq, idx) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, now + idx * 0.08);

            gain.gain.setValueAtTime(0.2 * this.masterVolume, now + idx * 0.08);
            gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.35);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now + idx * 0.08);
            osc.stop(now + idx * 0.08 + 0.35);
        });
    }

    // Play Math Wrong buzz
    playMathWrong() {
        if (this.muted) return;
        this.ensureContext();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(160, now);
        osc.frequency.linearRampToValueAtTime(110, now + 0.2);

        gain.gain.setValueAtTime(0.18 * this.masterVolume, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.22);
    }
}

window.soundEngine = new SoundEngine();
