/**
 * High-performance Particle and FX System for Arrow Puzzle Game.
 */
class ParticleSystem {
    constructor() {
        this.particles = [];
        this.floatingTexts = [];
        this.pulses = [];
    }

    reset() {
        this.particles = [];
        this.floatingTexts = [];
        this.pulses = [];
    }

    // Add trailing dust/sparks when arrow is flying
    addTrail(x, y, dx, dy, color = '#60a5fa') {
        const count = 3;
        for (let i = 0; i < count; i++) {
            const spread = 8;
            this.particles.push({
                x: x + (Math.random() - 0.5) * spread,
                y: y + (Math.random() - 0.5) * spread,
                vx: -dx * 0.2 + (Math.random() - 0.5) * 1.5,
                vy: -dy * 0.2 + (Math.random() - 0.5) * 1.5,
                size: Math.random() * 4 + 2,
                color: color,
                alpha: 0.9,
                decay: 0.04 + Math.random() * 0.03,
                type: 'glow'
            });
        }
    }

    // Sparks when arrow hits a blocker
    addCollisionSparks(x, y, nx, ny, color = '#f87171') {
        const count = 14;
        for (let i = 0; i < count; i++) {
            const angle = Math.atan2(ny, nx) + (Math.random() - 0.5) * Math.PI * 0.8;
            const speed = Math.random() * 5 + 2;
            this.particles.push({
                x: x,
                y: y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                size: Math.random() * 3 + 2,
                color: color,
                alpha: 1.0,
                decay: 0.05 + Math.random() * 0.04,
                type: 'spark'
            });
        }
    }

    // Unblock pulse wave on freed arrows
    addUnblockPulse(x, y, color = '#34d399') {
        this.pulses.push({
            x: x,
            y: y,
            radius: 10,
            maxRadius: 40,
            color: color,
            alpha: 0.8,
            decay: 0.03
        });
    }

    // Hint beacon radiating outward
    addHintBeacon(x, y, color = '#fbbf24') {
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                this.pulses.push({
                    x: x,
                    y: y,
                    radius: 12,
                    maxRadius: 55,
                    color: color,
                    alpha: 0.9,
                    decay: 0.02,
                    lineWidth: 3
                });
            }, i * 180);
        }
    }

    // Confetti explosion on victory
    addVictoryConfetti(width, height) {
        const colors = ['#f43f5e', '#ec4899', '#8b5cf6', '#3b82f6', '#10b981', '#f59e0b', '#06b6d4'];
        const count = 120;
        for (let i = 0; i < count; i++) {
            const x = width * 0.5 + (Math.random() - 0.5) * 100;
            const y = height * 0.5 + (Math.random() - 0.5) * 80;
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 12 + 4;
            this.particles.push({
                x: x,
                y: y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed - 4, // slight upward burst
                gravity: 0.28,
                drag: 0.96,
                rotation: Math.random() * Math.PI * 2,
                vRot: (Math.random() - 0.5) * 0.3,
                width: Math.random() * 10 + 6,
                height: Math.random() * 6 + 4,
                color: colors[Math.floor(Math.random() * colors.length)],
                alpha: 1.0,
                decay: 0.012 + Math.random() * 0.008,
                type: 'confetti'
            });
        }
    }

    // Floating combo text
    addFloatingText(x, y, text, color = '#60a5fa') {
        this.floatingTexts.push({
            x: x,
            y: y,
            text: text,
            color: color,
            alpha: 1.0,
            vy: -1.8,
            decay: 0.02
        });
    }

    update() {
        // Update particles
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            p.x += p.vx;
            p.y += p.vy;
            if (p.gravity) p.vy += p.gravity;
            if (p.drag) {
                p.vx *= p.drag;
                p.vy *= p.drag;
            }
            if (p.rotation !== undefined && p.vRot) {
                p.rotation += p.vRot;
            }
            p.alpha -= p.decay;
            if (p.alpha <= 0) {
                this.particles.splice(i, 1);
            }
        }

        // Update pulses
        for (let i = this.pulses.length - 1; i >= 0; i--) {
            const pulse = this.pulses[i];
            pulse.radius += (pulse.maxRadius - pulse.radius) * 0.15 + 0.8;
            pulse.alpha -= pulse.decay;
            if (pulse.alpha <= 0 || pulse.radius >= pulse.maxRadius) {
                this.pulses.splice(i, 1);
            }
        }

        // Update floating text
        for (let i = this.floatingTexts.length - 1; i >= 0; i--) {
            const t = this.floatingTexts[i];
            t.y += t.vy;
            t.alpha -= t.decay;
            if (t.alpha <= 0) {
                this.floatingTexts.splice(i, 1);
            }
        }
    }

    render(ctx) {
        // Render pulses
        for (const pulse of this.pulses) {
            ctx.save();
            ctx.beginPath();
            ctx.arc(pulse.x, pulse.y, pulse.radius, 0, Math.PI * 2);
            ctx.strokeStyle = pulse.color;
            ctx.globalAlpha = Math.max(0, pulse.alpha);
            ctx.lineWidth = pulse.lineWidth || 2;
            ctx.stroke();
            ctx.restore();
        }

        // Render particles
        for (const p of this.particles) {
            ctx.save();
            ctx.globalAlpha = Math.max(0, p.alpha);

            if (p.type === 'confetti') {
                ctx.translate(p.x, p.y);
                ctx.rotate(p.rotation);
                ctx.fillStyle = p.color;
                ctx.fillRect(-p.width / 2, -p.height / 2, p.width, p.height);
            } else if (p.type === 'glow') {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.shadowColor = p.color;
                ctx.shadowBlur = 8;
                ctx.fill();
            } else {
                // Spark
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.fill();
            }

            ctx.restore();
        }

        // Render floating texts
        for (const t of this.floatingTexts) {
            ctx.save();
            ctx.globalAlpha = Math.max(0, t.alpha);
            ctx.font = 'bold 18px "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
            ctx.textAlign = 'center';
            ctx.fillStyle = t.color;
            ctx.shadowColor = 'rgba(0,0,0,0.5)';
            ctx.shadowBlur = 4;
            ctx.fillText(t.text, t.x, t.y);
            ctx.restore();
        }
    }
}

window.ParticleSystem = ParticleSystem;
