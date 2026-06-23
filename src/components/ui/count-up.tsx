"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
	value: string;
	suffix?: string;
	className?: string;
};

/** Compteur qui s'incrémente quand il entre dans le viewport. Si la valeur
 *  n'est pas numérique (ex. "2006"), on l'affiche telle quelle sans compter. */
export function CountUp({ value, suffix = "", className }: Props) {
	const target = Number(value);
	const isNumeric = Number.isFinite(target);
	const ref = useRef<HTMLSpanElement>(null);
	const [display, setDisplay] = useState(isNumeric ? 0 : value);

	useEffect(() => {
		if (!isNumeric) return;
		const node = ref.current;
		if (!node) return;
		const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		if (prefersReduced) {
			setDisplay(target);
			return;
		}

		const io = new IntersectionObserver(
			([entry]) => {
				if (!entry.isIntersecting) return;
				io.disconnect();
				const duration = 1400;
				const start = performance.now();
				const tick = (now: number) => {
					const p = Math.min(1, (now - start) / duration);
					const eased = 1 - (1 - p) ** 3;
					setDisplay(Math.round(eased * target));
					if (p < 1) requestAnimationFrame(tick);
				};
				requestAnimationFrame(tick);
			},
			{ threshold: 0.4 },
		);
		io.observe(node);
		return () => io.disconnect();
	}, [isNumeric, target]);

	return (
		<span ref={ref} className={className}>
			{display}
			{suffix}
		</span>
	);
}
