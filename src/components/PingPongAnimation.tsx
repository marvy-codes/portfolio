'use client';

import { useEffect, useRef } from 'react';

interface ImpactLine {
    angle: number;
    length: number;
    x: number;
    y: number;
    opacity: number;
    createdAt: number;
}

export default function PingPongAnimation() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Canvas sizing
        const dpr = window.devicePixelRatio || 1;
        const W = 300;
        const H = 400;
        canvas.width = W * dpr;
        canvas.height = H * dpr;
        canvas.style.width = `${W}px`;
        canvas.style.height = `${H}px`;
        ctx.scale(dpr, dpr);

        // Physics state
        let ballX = W / 2;
        let ballY = H / 2 - 60;
        let ballVY = 0;
        let ballVX = 0;
        const gravity = 0.28;
        const ballRadius = 10;
        const bounceDamping = 0.82;

        // Racquet (2x scale)
        const racquetX = W / 2;
        const racquetY = H - 120;
        const racquetW = 140;
        const racquetH = 28;
        const racquetAngle = -0.08; // slight tilt

        // Handle (2x scale)
        const handleLength = 110;
        const handleWidth = 18;

        // Impact lines
        const impactLines: ImpactLine[] = [];
        const IMPACT_DURATION = 350; // ms

        // Drift for natural feel
        let time = 0;

        let animId: number;

        function drawRacquet() {
            if (!ctx) return;
            ctx.save();
            ctx.translate(racquetX, racquetY);
            ctx.rotate(racquetAngle);

            // Handle — below the racquet face
            const handleGrad = ctx.createLinearGradient(-handleWidth / 2, racquetH / 2, handleWidth / 2, racquetH / 2 + handleLength);
            handleGrad.addColorStop(0, '#5a3825');
            handleGrad.addColorStop(0.5, '#7a4e35');
            handleGrad.addColorStop(1, '#4a2c1a');
            ctx.fillStyle = handleGrad;
            ctx.beginPath();
            ctx.roundRect(-handleWidth / 2, racquetH / 2 - 2, handleWidth, handleLength, 3);
            ctx.fill();

            // Racquet face — elliptical 3D look
            // Shadow for depth
            ctx.fillStyle = 'rgba(0,0,0,0.18)';
            ctx.beginPath();
            ctx.ellipse(3, 5, racquetW / 2, racquetH / 2 + 3, 0, 0, Math.PI * 2);
            ctx.fill();

            // Rubber face
            const faceGrad = ctx.createRadialGradient(-16, -6, 8, 0, 0, racquetW / 2);
            faceGrad.addColorStop(0, '#e83030');
            faceGrad.addColorStop(0.7, '#c41e1e');
            faceGrad.addColorStop(1, '#8b1515');
            ctx.fillStyle = faceGrad;
            ctx.beginPath();
            ctx.ellipse(0, 0, racquetW / 2, racquetH / 2, 0, 0, Math.PI * 2);
            ctx.fill();

            // Subtle edge ring
            ctx.strokeStyle = 'rgba(0,0,0,0.25)';
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            ctx.ellipse(0, 0, racquetW / 2, racquetH / 2, 0, 0, Math.PI * 2);
            ctx.stroke();

            // Highlight
            ctx.fillStyle = 'rgba(255,255,255,0.12)';
            ctx.beginPath();
            ctx.ellipse(-20, -4, 36, 8, -0.3, 0, Math.PI * 2);
            ctx.fill();

            ctx.restore();
        }

        function drawBall(x: number, y: number) {
            if (!ctx) return;

            // Shadow on racquet surface
            const shadowY = racquetY - 4;
            const shadowScale = Math.max(0.3, 1 - Math.abs(y - shadowY) / 200);
            ctx.fillStyle = `rgba(0,0,0,${0.12 * shadowScale})`;
            ctx.beginPath();
            ctx.ellipse(x + 2, shadowY, ballRadius * shadowScale * 1.2, 3 * shadowScale, 0, 0, Math.PI * 2);
            ctx.fill();

            // Ball with 3D gradient
            const ballGrad = ctx.createRadialGradient(x - 3, y - 3, 2, x, y, ballRadius);
            ballGrad.addColorStop(0, '#ffffff');
            ballGrad.addColorStop(0.3, '#ffa726');
            ballGrad.addColorStop(0.7, '#ff8f00');
            ballGrad.addColorStop(1, '#e65100');
            ctx.fillStyle = ballGrad;
            ctx.beginPath();
            ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
            ctx.fill();

            // Glossy highlight
            ctx.fillStyle = 'rgba(255,255,255,0.55)';
            ctx.beginPath();
            ctx.arc(x - 3, y - 3, 3.5, 0, Math.PI * 2);
            ctx.fill();
        }

        function drawImpactLines(now: number) {
            if (!ctx) return;
            for (let i = impactLines.length - 1; i >= 0; i--) {
                const line = impactLines[i];
                const elapsed = now - line.createdAt;
                if (elapsed > IMPACT_DURATION) {
                    impactLines.splice(i, 1);
                    continue;
                }
                const progress = elapsed / IMPACT_DURATION;
                const opacity = (1 - progress) * 0.7;
                const extendLength = line.length * (0.5 + progress * 0.5);
                const gap = 8 + progress * 12;

                ctx.strokeStyle = `rgba(0, 212, 255, ${opacity})`;
                ctx.lineWidth = 2 - progress * 1;
                ctx.lineCap = 'round';
                ctx.beginPath();
                const startX = line.x + Math.cos(line.angle) * gap;
                const startY = line.y + Math.sin(line.angle) * gap;
                const endX = line.x + Math.cos(line.angle) * (gap + extendLength);
                const endY = line.y + Math.sin(line.angle) * (gap + extendLength);
                ctx.moveTo(startX, startY);
                ctx.lineTo(endX, endY);
                ctx.stroke();
            }
        }

        function spawnImpactLines(x: number, y: number, now: number) {
            const numLines = 5 + Math.floor(Math.random() * 3);
            for (let i = 0; i < numLines; i++) {
                // Spread mostly upward (from -30° to -150°)
                const angle = -Math.PI * (0.15 + Math.random() * 0.7);
                impactLines.push({
                    angle,
                    length: 12 + Math.random() * 16,
                    x,
                    y,
                    opacity: 1,
                    createdAt: now,
                });
            }
        }

        function animate() {
            if (!ctx) return;
            const now = performance.now();
            time += 0.016;

            ctx.clearRect(0, 0, W, H);

            // Natural x-drift (gentle sway)
            const driftX = Math.sin(time * 1.2) * 8;
            ballVX += (driftX - (ballX - W / 2)) * 0.005;
            ballVX *= 0.98;

            // Gravity
            ballVY += gravity;
            ballX += ballVX;
            ballY += ballVY;

            // Bounce off racquet
            const contactY = racquetY - racquetH / 2 - ballRadius;
            if (ballY >= contactY && ballVY > 0) {
                // Check if ball is within racquet x-range
                const relX = ballX - racquetX;
                if (Math.abs(relX) < racquetW / 2 + ballRadius * 0.5) {
                    ballY = contactY;
                    ballVY = -(Math.abs(ballVY) * bounceDamping);
                    // Ensure minimum bounce height
                    if (Math.abs(ballVY) < 5) {
                        ballVY = -7;
                    }
                    // Spawn impact lines
                    spawnImpactLines(ballX, contactY + ballRadius, now);
                }
            }

            // Reset if ball goes off screen
            if (ballY > H + 40 || ballX < -40 || ballX > W + 40) {
                ballX = W / 2 + (Math.random() - 0.5) * 20;
                ballY = H / 2 - 80;
                ballVY = 0;
                ballVX = 0;
            }

            // Draw order: racquet → impact lines → ball
            drawRacquet();
            drawImpactLines(now);
            drawBall(ballX, ballY);

            animId = requestAnimationFrame(animate);
        }

        animId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animId);
    }, []);

    return (
        <div className="hobby-animation">
            <canvas
                ref={canvasRef}
                style={{
                    width: 300,
                    height: 400,
                    maxWidth: '100%',
                }}
            />
        </div>
    );
}
