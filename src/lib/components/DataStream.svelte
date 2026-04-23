<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let canvas: HTMLCanvasElement;

	onMount(() => {
		if (!browser) return;

		const ctx = canvas.getContext('2d')!;
		let animationId: number;
		let particles: Particle[] = [];

		const style = getComputedStyle(document.documentElement);
		function getColors() {
			return {
				love: style.getPropertyValue('--rp-love').trim(),
				pine: style.getPropertyValue('--rp-pine').trim(),
				foam: style.getPropertyValue('--rp-foam').trim(),
				iris: style.getPropertyValue('--rp-iris').trim(),
				gold: style.getPropertyValue('--rp-gold').trim(),
				rose: style.getPropertyValue('--rp-rose').trim(),
				muted: style.getPropertyValue('--rp-muted').trim(),
			};
		}

		let colors = getColors();

		interface Particle {
			x: number;
			y: number;
			vx: number;
			vy: number;
			radius: number;
			color: string;
			opacity: number;
			pulse: number;
			pulseSpeed: number;
		}

		function resize() {
			const dpr = window.devicePixelRatio || 1;
			const rect = canvas.getBoundingClientRect();
			canvas.width = rect.width * dpr;
			canvas.height = rect.height * dpr;
			ctx.scale(dpr, dpr);
			colors = getColors();
		}

		function createParticles() {
			const rect = canvas.getBoundingClientRect();
			const count = Math.floor((rect.width * rect.height) / 12000);
			const colorKeys = Object.keys(colors) as (keyof typeof colors)[];
			particles = [];

			for (let i = 0; i < count; i++) {
				particles.push({
					x: Math.random() * rect.width,
					y: Math.random() * rect.height,
					vx: (Math.random() - 0.5) * 0.4,
					vy: (Math.random() - 0.3) * 0.3 - 0.1,
					radius: Math.random() * 2 + 1,
					color: colors[colorKeys[Math.floor(Math.random() * colorKeys.length)]],
					opacity: Math.random() * 0.5 + 0.2,
					pulse: Math.random() * Math.PI * 2,
					pulseSpeed: Math.random() * 0.02 + 0.005,
				});
			}
		}

		function draw() {
			const rect = canvas.getBoundingClientRect();
			ctx.clearRect(0, 0, rect.width, rect.height);

			// Draw connections
			for (let i = 0; i < particles.length; i++) {
				for (let j = i + 1; j < particles.length; j++) {
					const dx = particles[i].x - particles[j].x;
					const dy = particles[i].y - particles[j].y;
					const dist = Math.sqrt(dx * dx + dy * dy);

					if (dist < 120) {
						const alpha = (1 - dist / 120) * 0.12;
						ctx.beginPath();
						ctx.moveTo(particles[i].x, particles[i].y);
						ctx.lineTo(particles[j].x, particles[j].y);
						ctx.strokeStyle = particles[i].color.replace(')', `, ${alpha})`).replace('rgb', 'rgba');
						// Fallback for hex colors
						if (particles[i].color.startsWith('#')) {
							const hex = particles[i].color;
							const r = parseInt(hex.slice(1, 3), 16);
							const g = parseInt(hex.slice(3, 5), 16);
							const b = parseInt(hex.slice(5, 7), 16);
							ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
						}
						ctx.lineWidth = 0.5;
						ctx.stroke();
					}
				}
			}

			// Draw particles
			for (const p of particles) {
				p.pulse += p.pulseSpeed;
				const pulseOpacity = p.opacity + Math.sin(p.pulse) * 0.15;

				ctx.beginPath();
				ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

				if (p.color.startsWith('#')) {
					const hex = p.color;
					const r = parseInt(hex.slice(1, 3), 16);
					const g = parseInt(hex.slice(3, 5), 16);
					const b = parseInt(hex.slice(5, 7), 16);
					ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${pulseOpacity})`;
				} else {
					ctx.fillStyle = p.color;
				}

				ctx.fill();

				// Move
				p.x += p.vx;
				p.y += p.vy;

				// Wrap around
				if (p.x < -10) p.x = rect.width + 10;
				if (p.x > rect.width + 10) p.x = -10;
				if (p.y < -10) p.y = rect.height + 10;
				if (p.y > rect.height + 10) p.y = -10;
			}

			animationId = requestAnimationFrame(draw);
		}

		resize();
		createParticles();
		draw();

		const observer = new MutationObserver(() => {
			colors = getColors();
			particles.forEach((p) => {
				const colorKeys = Object.keys(colors) as (keyof typeof colors)[];
				p.color = colors[colorKeys[Math.floor(Math.random() * colorKeys.length)]];
			});
		});
		observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

		window.addEventListener('resize', () => {
			resize();
			createParticles();
		});

		return () => {
			cancelAnimationFrame(animationId);
			observer.disconnect();
		};
	});
</script>

<canvas bind:this={canvas} class="data-stream"></canvas>

<style>
	.data-stream {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
	}
</style>
