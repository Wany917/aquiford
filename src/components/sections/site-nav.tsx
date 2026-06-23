"use client";

import { Menu, Phone, Snowflake, X } from "lucide-react";
import { useEffect, useState } from "react";
import { company, nav } from "@/data/company";

export function SiteNav() {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);

	return (
		<div className="sticky top-4 z-50 px-4 sm:px-6 lg:px-8">
			<header className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-border/60 bg-white/70 py-2.5 pl-3 pr-3 shadow-soft backdrop-blur-md">
				<a href="#top" className="flex items-center gap-2.5">
					<span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-white">
						<Snowflake size={20} />
					</span>
					<span className="leading-none">
						<span className="block font-display text-base font-bold">{company.name}</span>
						<span className="block text-[0.7rem] font-semibold text-muted-foreground">
							Station SEBP · CO₂
						</span>
					</span>
				</a>

				<nav className="hidden items-center gap-7 md:flex">
					{nav.map((item) => (
						<a
							key={item.href}
							href={item.href}
							className="text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
						>
							{item.label}
						</a>
					))}
				</nav>

				<a
					href={company.phoneHref}
					className="btn hidden h-11 bg-primary px-6 text-sm text-primary-foreground shadow-soft hover:scale-105 hover:shadow-float active:scale-95 md:inline-flex"
				>
					<Phone size={15} /> {company.phone}
				</a>

				<button
					type="button"
					onClick={() => setOpen((v) => !v)}
					className="grid h-11 w-11 place-items-center rounded-full bg-primary/10 text-primary md:hidden"
					aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
				>
					{open ? <X size={20} /> : <Menu size={20} />}
				</button>
			</header>

			{open && (
				<nav className="mx-auto mt-3 max-w-6xl rounded-[2rem] border border-border/60 bg-white/90 p-4 shadow-float backdrop-blur-md md:hidden">
					{nav.map((item) => (
						<a
							key={item.href}
							href={item.href}
							onClick={() => setOpen(false)}
							className="block rounded-2xl px-4 py-3 font-semibold text-foreground/80 transition-colors hover:bg-primary/10 hover:text-primary"
						>
							{item.label}
						</a>
					))}
					<a
						href={company.phoneHref}
						className="btn mt-2 h-12 w-full bg-primary text-primary-foreground shadow-soft"
					>
						<Phone size={16} /> {company.phone}
					</a>
				</nav>
			)}
		</div>
	);
}
