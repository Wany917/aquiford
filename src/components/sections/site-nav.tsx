"use client";

import { Menu, Phone, Snowflake, X } from "lucide-react";
import { useEffect, useState } from "react";
import { company, nav } from "@/data/company";

export function SiteNav() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);

	return (
		<header
			className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
				scrolled
					? "bg-paper/90 backdrop-blur-md border-b border-ink"
					: "border-b border-transparent"
			}`}
		>
			<div className="container-wide flex items-center justify-between h-16">
				<a href="#top" className="flex items-center gap-2.5">
					<span className="grid place-items-center w-8 h-8 bg-blue-deep text-paper">
						<Snowflake className="w-4.5 h-4.5" strokeWidth={2.2} />
					</span>
					<span className="leading-none">
						<span className="block fs-headline text-base tracking-tight">Aquifroid</span>
						<span className="block fs-label-blue text-[0.58rem] mt-0.5">Station SEBP · CO₂</span>
					</span>
				</a>

				<nav className="hidden md:flex items-center gap-8">
					{nav.map((item) => (
						<a
							key={item.href}
							href={item.href}
							className="fs-label hover:text-blue-deep transition-colors"
						>
							{item.label}
						</a>
					))}
				</nav>

				<a
					href={company.phoneHref}
					className="hidden md:inline-flex items-center gap-2 bg-ink text-paper px-4 h-10 fs-label hover:bg-blue-deep transition-colors"
				>
					<Phone className="w-3.5 h-3.5" strokeWidth={2.2} />
					{company.phone}
				</a>

				<button
					type="button"
					onClick={() => setOpen((v) => !v)}
					className="md:hidden grid place-items-center w-10 h-10 border border-ink"
					aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
				>
					{open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
				</button>
			</div>

			{open && (
				<div className="md:hidden bg-paper border-b border-ink">
					<nav className="container-wide flex flex-col py-4">
						{nav.map((item) => (
							<a
								key={item.href}
								href={item.href}
								onClick={() => setOpen(false)}
								className="fs-label py-3 border-b border-ink/15 hover:text-blue-deep transition-colors"
							>
								{item.label}
							</a>
						))}
						<a
							href={company.phoneHref}
							className="mt-4 inline-flex items-center justify-center gap-2 bg-ink text-paper h-12 fs-label"
						>
							<Phone className="w-4 h-4" /> {company.phone}
						</a>
					</nav>
				</div>
			)}
		</header>
	);
}
