"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

/**
 * Smooth scroll (Lenis) + chorégraphie GSAP/ScrollTrigger.
 * Reprend le système du template "blueprint" de getstarted :
 *   - parallaxe + fondu du titre hero au scroll
 *   - reveal-on-scroll  : [data-reveal]
 *   - apparition en cascade : [data-stagger] > [data-stagger-item]
 *   - tracé progressif du schéma : [data-draw]
 */
export function SmoothScroll() {
	useEffect(() => {
		if (typeof window === "undefined") return;
		const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

		// --- Lenis (désactivé si mouvement réduit) ---
		let lenis: Lenis | null = null;
		let rafId = 0;
		if (!prefersReduced) {
			lenis = new Lenis({
				duration: 1.15,
				easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
				smoothWheel: true,
				touchMultiplier: 1.2,
			});
			lenis.on("scroll", ScrollTrigger.update);
			const raf = (time: number) => {
				lenis?.raf(time);
				rafId = requestAnimationFrame(raf);
			};
			rafId = requestAnimationFrame(raf);
		}

		if (prefersReduced) {
			return () => {
				cancelAnimationFrame(rafId);
			};
		}

		// --- Chorégraphie ---
		const ctx = gsap.context(() => {
			// Hero : entrée + parallaxe au scroll
			gsap.from("[data-hero='title']", {
				yPercent: 8,
				opacity: 0,
				duration: 1,
				ease: "power3.out",
			});
			gsap.from("[data-hero='aside'] > *", {
				y: 22,
				opacity: 0,
				duration: 0.8,
				ease: "power3.out",
				stagger: 0.08,
				delay: 0.15,
			});

			// (parallax/scrub sur le hero retiré — il causait un titre invisible
			// quand on remontait au top après avoir scrollé)

			// Reveal simple
			gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
				gsap.to(el, {
					y: 0,
					opacity: 1,
					duration: 0.7,
					ease: "power3.out",
					scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none reverse" },
					startAt: { y: 28 },
				});
			});

			// Cascade
			gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((group) => {
				const items = group.querySelectorAll<HTMLElement>("[data-stagger-item]");
				if (!items.length) return;
				gsap.to(items, {
					y: 0,
					opacity: 1,
					duration: 0.6,
					ease: "power3.out",
					stagger: 0.07,
					scrollTrigger: {
						trigger: group,
						start: "top 86%",
						toggleActions: "play none none reverse",
					},
					startAt: { y: 24 },
				});
			});

			// Tracé progressif du schéma frigorifique
			gsap.utils.toArray<SVGPathElement>("[data-draw]").forEach((path) => {
				const len = path.getTotalLength();
				path.style.setProperty("--len", String(len));
				gsap.fromTo(
					path,
					{ strokeDashoffset: len },
					{
						strokeDashoffset: 0,
						duration: 2,
						ease: "power2.inOut",
						scrollTrigger: { trigger: path, start: "top 80%", once: true },
					},
				);
			});

			ScrollTrigger.refresh();
		});

		return () => {
			ctx.revert();
			cancelAnimationFrame(rafId);
			lenis?.destroy();
		};
	}, []);

	return null;
}
