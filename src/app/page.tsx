import type { LucideIcon } from "lucide-react";
import {
	ArrowRight,
	Atom,
	Award,
	Check,
	Clock,
	Mail,
	MapPin,
	Phone,
	Quote,
	Snowflake,
	Sparkles,
	ThermometerSnowflake,
	Wrench,
} from "lucide-react";
import { SmoothScroll } from "@/components/animation/smooth-scroll";
import { CoolingCircuit } from "@/components/schematic/cooling-circuit";
import { SiteNav } from "@/components/sections/site-nav";
import { CountUp } from "@/components/ui/count-up";
import {
	co2Specs,
	company,
	interventionZones,
	sebpBrands,
	sectors,
	services,
	stats,
	steps,
} from "@/data/company";

const year = new Date().getFullYear();

const serviceIcons: LucideIcon[] = [Snowflake, Wrench, Award, Atom];

/* léger accent organique : un seul grand coin qui alterne (pas de blob déformant) */
const cornerVariants = [
	"rounded-tr-[2.75rem]",
	"rounded-bl-[2.75rem]",
	"rounded-tl-[2.75rem]",
	"rounded-br-[2.75rem]",
	"rounded-tr-[2.75rem]",
	"rounded-bl-[2.75rem]",
];

const benefits = [
	"Installation aux normes (F-Gaz, étanchéité, sécurité haute pression)",
	"Station technique SEBP agréée — pièces d'origine constructeur",
	"Expertise CO₂ subcritique et transcritique (R744)",
	"Astreinte dépannage prioritaire pour les contrats d'entretien",
];

export default function Home() {
	return (
		<>
			<SmoothScroll />
			<SiteNav />

			<main id="top">
				{/* ====================== HERO ====================== */}
				<section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:pt-24 md:pb-32">
					<div
						aria-hidden
						className="pointer-events-none absolute -top-24 -right-24 h-[34rem] w-[34rem] blob-1 bg-bright/30 blur-3xl drift"
					/>
					<div
						aria-hidden
						className="pointer-events-none absolute top-40 -left-32 h-[28rem] w-[28rem] blob-3 bg-primary/15 blur-3xl drift-slow"
					/>

					<div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
						<div data-hero="title">
							<span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/60 px-4 py-1.5 text-sm font-semibold text-primary shadow-soft backdrop-blur">
								<Sparkles size={15} /> Station SEBP · Expertise CO₂
							</span>
							<h1 className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight text-balance md:text-7xl">
								Le froid, <span className="text-primary">sans rupture.</span>
							</h1>
							<p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
								{`${company.name} conçoit, installe et entretient vos équipements frigorifiques — station technique agréée du groupe SEBP (Pavailler · CFI · Bertrand Puma) et expertise R744 dans un rayon de ${company.radiusKm} km autour de Fursac (Creuse) et Limoges.`}
							</p>
							<div className="mt-9 flex flex-wrap items-center gap-4">
								<a
									href="#contact"
									className="btn h-14 bg-primary px-9 text-base text-primary-foreground shadow-soft hover:scale-105 hover:shadow-float active:scale-95"
								>
									Demander un devis <ArrowRight size={18} />
								</a>
								<a
									href={company.phoneHref}
									className="btn h-14 border-2 border-secondary px-9 text-base text-secondary hover:scale-105 hover:bg-secondary/10 active:scale-95"
								>
									<Phone size={18} /> {company.phone}
								</a>
							</div>
							<div className="mt-10 flex items-center gap-3 text-sm text-muted-foreground">
								<span className="relative ping-dot inline-flex h-2.5 w-2.5 rounded-full bg-bright" />
								Intervention {company.interventionDelay} · Astreinte pour les contrats d'entretien
							</div>
						</div>

						{/* visuel : cycle frigorifique dans une carte */}
						<div data-hero="aside" className="relative">
							<div className="relative rounded-[2.5rem] rounded-tr-[5rem] border-4 border-white bg-card p-6 shadow-float sm:p-9">
								<div className="rounded-[2rem] bg-muted/60 p-4 sm:p-6">
									<CoolingCircuit />
								</div>
							</div>
							<div className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-3xl border border-border bg-white px-5 py-3.5 shadow-soft sm:-left-8">
								<span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary">
									<ThermometerSnowflake size={22} />
								</span>
								<div>
									<p className="font-display text-xl font-bold leading-none text-foreground">
										−18°C
									</p>
									<p className="text-xs text-muted-foreground">froid négatif maîtrisé</p>
								</div>
							</div>
							<div className="absolute -top-5 right-2 flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-primary shadow-soft sm:right-6">
								<Award size={16} /> Station SEBP
							</div>
						</div>
					</div>
				</section>

				{/* ====================== STATS ====================== */}
				<section className="px-4 sm:px-6 lg:px-8 py-16">
					<div className="mx-auto max-w-7xl rounded-[2.5rem] border border-border/60 bg-accent/40 px-6 py-12 shadow-soft md:px-12">
						<div data-stagger className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
							{stats.map((s) => (
								<div key={s.label} data-stagger-item className="group text-center">
									<p className="font-display text-5xl font-bold text-primary transition-transform duration-300 group-hover:scale-110 md:text-6xl">
										<CountUp value={s.value} suffix={s.suffix} />
									</p>
									<p className="mt-2 text-sm font-semibold text-muted-foreground">{s.label}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* ====================== SEBP ====================== */}
				<section id="sebp" className="scroll-mt-24 px-4 sm:px-6 lg:px-8 py-24 md:py-28">
					<div className="mx-auto max-w-7xl">
						<div className="mx-auto max-w-2xl text-center" data-reveal>
							<p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-secondary">
								<Award size={16} /> Réseau agréé
							</p>
							<h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-balance md:text-5xl">
								Station technique du groupe SEBP
							</h2>
							<p className="mt-4 text-lg text-muted-foreground">
								Un agrément qui valide la rigueur d'intervention — homologation, pièces d'origine et
								procédures constructeur, sur les fours et matériels boulangerie-pâtisserie des trois
								marques.
							</p>
						</div>

						<div data-stagger className="mt-16 grid gap-8 md:grid-cols-3">
							{sebpBrands.map((brand, i) => (
								<article
									key={brand.name}
									data-stagger-item
									className={`group rounded-[2rem] border border-border/60 bg-card p-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lifted ${cornerVariants[i % cornerVariants.length]}`}
								>
									<p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
										Marque {(i + 1).toString().padStart(2, "0")}
									</p>
									<h3 className="mt-3 font-display text-4xl font-bold text-primary leading-none">
										{brand.name}
									</h3>
									<p className="mt-4 text-sm leading-relaxed text-muted-foreground min-h-[3.2rem]">
										{brand.specialty}
									</p>
									<div className="mt-5 flex items-center justify-between border-t border-border/60 pt-4">
										<span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
											{brand.founded ? `Est. ${brand.founded}` : "Service agréé"}
										</span>
										<span className="grid h-9 w-9 place-items-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
											<Award size={16} />
										</span>
									</div>
								</article>
							))}
						</div>
					</div>
				</section>

				{/* ====================== CO₂ ====================== */}
				<section id="co2" className="scroll-mt-24 bg-muted/40 px-4 sm:px-6 lg:px-8 py-24 md:py-28">
					<div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
						<div data-reveal>
							<p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-secondary">
								<Atom size={16} /> R744 · Expertise CO₂
							</p>
							<h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-balance md:text-5xl">
								Là où peu d'acteurs vont. <span className="text-primary">On y va.</span>
							</h2>
							<div data-stagger className="mt-6 space-y-5 max-w-xl">
								<p data-stagger-item className="text-lg leading-relaxed text-muted-foreground">
									Le CO₂ comme fluide frigorigène (R744) est{" "}
									<strong className="text-foreground">le futur du froid commercial</strong> : PRP de
									1, zéro impact ozone, performance excellente sur le froid intensif.
								</p>
								<p data-stagger-item className="text-base leading-relaxed text-muted-foreground">
									Sa contrepartie : haute pression (jusqu'à 130 bar en transcritique), procédures de
									sécurité strictes, formation continue. C'est ce qui en décourage la majorité.
								</p>
								<p
									data-stagger-item
									className="rounded-2xl border-l-4 border-bright bg-white/60 p-4 text-base leading-relaxed text-foreground"
								>
									Nous, on l'installe, on le dépanne et on l'entretient — subcritique comme
									transcritique. C'est la spécialisation engagée en {company.specializedSince}.
								</p>
							</div>
						</div>

						{/* fiche technique R744 */}
						<div data-reveal>
							<div className="rounded-[2.5rem] rounded-bl-[4rem] border-4 border-white bg-card p-7 shadow-float md:p-9">
								<div className="flex items-center justify-between mb-6 pb-5 border-b border-border">
									<div className="flex items-center gap-3">
										<span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary text-white">
											<Atom size={20} />
										</span>
										<div>
											<p className="font-display text-xl font-bold leading-none">Fiche technique</p>
											<p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mt-1">
												R744 · CO₂
											</p>
										</div>
									</div>
									<span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
										Réf. AQ-03
									</span>
								</div>
								<dl className="space-y-3.5">
									{co2Specs.map((row) => (
										<div key={row.k} className="grid grid-cols-12 gap-3 items-baseline">
											<dt className="col-span-5 text-xs font-bold uppercase tracking-wider text-muted-foreground">
												{row.k}
											</dt>
											<dd className="col-span-7 text-sm font-semibold text-foreground">{row.v}</dd>
										</div>
									))}
								</dl>
								<p className="mt-6 pt-4 border-t border-border text-[0.7rem] text-muted-foreground">
									PRP / GWP — règlement F-Gaz (UE) 517/2014.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* ====================== SERVICES ====================== */}
				<section id="services" className="scroll-mt-24 px-4 sm:px-6 lg:px-8 py-24 md:py-28">
					<div className="mx-auto max-w-7xl">
						<div className="mx-auto max-w-2xl text-center" data-reveal>
							<p className="text-sm font-bold uppercase tracking-[0.18em] text-secondary">
								Nos prestations
							</p>
							<h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-balance md:text-5xl">
								Quatre métiers, une exigence
							</h2>
							<p className="mt-4 text-lg text-muted-foreground">
								Du linéaire de supermarché à la chambre froide négative, en passant par le four
								boulangerie SEBP et la centrale CO₂ transcritique — une équipe, un suivi durable.
							</p>
						</div>

						<div data-stagger className="mt-16 grid gap-8 md:grid-cols-2">
							{services.map((s, i) => {
								const Icon = serviceIcons[i];
								return (
									<article
										key={s.mark}
										data-stagger-item
										className={`group rounded-[2rem] border border-border/60 bg-card p-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lifted ${
											i % 2 === 0 ? "rounded-tl-[4rem]" : "rounded-br-[4rem]"
										}`}
									>
										<div className="flex items-start justify-between">
											<span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
												<Icon size={28} />
											</span>
											<span className="text-xs font-bold uppercase tracking-wider text-primary/40">
												{s.mark}
											</span>
										</div>
										<h3 className="mt-6 font-display text-2xl font-semibold">{s.title}</h3>
										<p className="mt-3 leading-relaxed text-muted-foreground">{s.body}</p>
										<ul className="mt-5 flex flex-wrap gap-2">
											{s.specs.map((spec) => (
												<li
													key={spec}
													className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-accent-foreground"
												>
													{spec}
												</li>
											))}
										</ul>
									</article>
								);
							})}
						</div>
					</div>
				</section>

				{/* ====================== MÉTHODE ====================== */}
				<section
					id="methode"
					className="scroll-mt-24 bg-muted/40 px-4 sm:px-6 lg:px-8 py-24 md:py-28"
				>
					<div className="mx-auto max-w-6xl">
						<div className="mx-auto max-w-2xl text-center" data-reveal>
							<p className="text-sm font-bold uppercase tracking-[0.18em] text-secondary">
								Notre méthode
							</p>
							<h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
								Du diagnostic au suivi
							</h2>
						</div>

						<div className="relative mt-16">
							<svg
								aria-hidden
								className="pointer-events-none absolute inset-x-0 top-10 hidden h-24 w-full lg:block"
								viewBox="0 0 1000 100"
								fill="none"
								preserveAspectRatio="none"
							>
								<path
									d="M 125 50 C 290 -10, 290 110, 460 50 S 710 -10, 875 50"
									stroke="var(--secondary)"
									strokeWidth="2"
									strokeDasharray="3 9"
									strokeLinecap="round"
									opacity="0.5"
								/>
							</svg>

							<div data-stagger className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
								{steps.map((step) => (
									<div key={step.number} data-stagger-item className="text-center">
										<div className="mx-auto grid h-20 w-20 place-items-center rounded-full border-4 border-white bg-gradient-to-br from-primary to-secondary text-white shadow-float">
											<span className="font-display text-2xl font-bold">{step.number}</span>
										</div>
										<h3 className="mt-5 font-display text-xl font-semibold">{step.label}</h3>
										<p className="mt-2 text-sm leading-relaxed text-muted-foreground">
											{step.body}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* ====================== SECTEURS ====================== */}
				<section id="secteurs" className="scroll-mt-24 px-4 sm:px-6 lg:px-8 py-24 md:py-28">
					<div className="mx-auto max-w-7xl">
						<div className="mx-auto max-w-2xl text-center" data-reveal>
							<p className="text-sm font-bold uppercase tracking-[0.18em] text-secondary">
								Secteurs équipés
							</p>
							<h2 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
								Là où le froid est critique
							</h2>
						</div>

						<div data-stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
							{sectors.map((sec, i) => (
								<article
									key={sec.id}
									data-stagger-item
									className={`group flex items-center gap-4 rounded-3xl border border-border/60 bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-float ${cornerVariants[i % cornerVariants.length]}`}
								>
									<span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-secondary to-bright text-white shadow-soft transition-transform duration-300 group-hover:scale-110">
										<Snowflake size={24} />
									</span>
									<div>
										<h3 className="font-display text-xl font-semibold leading-tight">{sec.name}</h3>
										<p className="mt-1 text-sm text-muted-foreground">{sec.note}</p>
									</div>
								</article>
							))}
						</div>
					</div>
				</section>

				{/* ====================== À PROPOS ====================== */}
				<section
					id="apropos"
					className="scroll-mt-24 bg-accent/30 px-4 sm:px-6 lg:px-8 py-24 md:py-28"
				>
					<div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
						<div className="relative order-last mx-auto w-full max-w-md lg:order-first" data-reveal>
							<div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] rounded-tr-[5.5rem] border-4 border-white bg-gradient-to-br from-primary to-secondary shadow-float">
								<div
									aria-hidden
									className="absolute inset-0 opacity-30"
									style={{
										backgroundImage:
											"radial-gradient(rgba(255,255,255,0.35) 1.5px, transparent 1.5px)",
										backgroundSize: "22px 22px",
									}}
								/>
								<Snowflake
									aria-hidden
									className="absolute -right-10 -top-10 h-56 w-56 text-white/15 drift"
									strokeWidth={1}
								/>
								<div className="relative flex h-full flex-col justify-between p-8">
									<span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur">
										<MapPin size={14} /> Fursac · {company.address.region.split(" · ")[0]}
									</span>
									<div>
										<p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
											Frigoriste depuis
										</p>
										<p className="font-display text-7xl font-bold leading-none text-white">
											{company.foundedYear}
										</p>
										<p className="mt-3 max-w-[16rem] text-white/85">
											Spécialisée SEBP & CO₂ depuis {company.specializedSince}, au service des pros
											du froid de Nouvelle-Aquitaine.
										</p>
									</div>
								</div>
							</div>
							<div className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl border border-border bg-white px-5 py-4 shadow-soft">
								<span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
									<Award size={22} />
								</span>
								<div>
									<p className="font-display text-base font-bold leading-tight text-foreground">
										Station SEBP
									</p>
									<p className="text-xs text-muted-foreground">Pavailler · CFI · Bertrand Puma</p>
								</div>
							</div>
						</div>

						<div data-reveal>
							<p className="text-sm font-bold uppercase tracking-[0.18em] text-secondary">
								Qui sommes-nous
							</p>
							<h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-balance md:text-5xl">
								Une petite équipe, de gros engagements techniques
							</h2>
							<p className="mt-5 text-lg leading-relaxed text-muted-foreground">
								{`${company.legalName} a ouvert son atelier à ${company.address.city} (Creuse) en ${company.foundedYear} et engagé sa spécialisation technique en ${company.specializedSince} sous la présidence de ${company.president}. Les capacités SEBP et CO₂ qu'on ne trouve pas partout.`}
							</p>
							<ul data-stagger className="mt-8 space-y-4">
								{benefits.map((b) => (
									<li key={b} data-stagger-item className="flex items-start gap-3">
										<span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary text-white">
											<Check size={16} strokeWidth={3} />
										</span>
										<span className="text-foreground">{b}</span>
									</li>
								))}
							</ul>

							<div className="mt-8 pt-6 border-t border-border" data-reveal>
								<p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
									Zones desservies · rayon {company.radiusKm} km
								</p>
								<ul className="flex flex-wrap gap-2">
									{interventionZones.map((z) => (
										<li
											key={z}
											className="rounded-full bg-white/70 border border-border/60 px-3 py-1 text-xs font-semibold text-foreground/70"
										>
											{z}
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</section>

				{/* ====================== CITATION ====================== */}
				<section className="px-4 sm:px-6 lg:px-8 py-20">
					<div className="mx-auto max-w-4xl text-center" data-reveal>
						<Quote className="mx-auto h-10 w-10 text-bright" />
						<p className="mt-6 font-display text-2xl font-semibold leading-snug text-balance md:text-3xl">
							« Une rupture de froid coûte cher. Notre métier, c'est qu'elle n'arrive jamais — et
							quand un imprévu survient, qu'on soit là très vite. »
						</p>
						<p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">
							{company.name} · {company.address.city}
						</p>
					</div>
				</section>

				{/* ====================== CONTACT / CTA ====================== */}
				<section id="contact" className="scroll-mt-24 px-4 sm:px-6 lg:px-8 pb-28">
					<div className="relative mx-auto max-w-5xl overflow-hidden rounded-[3rem] bg-primary px-6 py-16 text-center shadow-lifted md:px-16 md:py-20">
						<div
							aria-hidden
							className="pointer-events-none absolute -top-20 -right-16 h-72 w-72 blob-2 bg-bright/30 blur-3xl drift"
						/>
						<div
							aria-hidden
							className="pointer-events-none absolute -bottom-24 -left-16 h-80 w-80 blob-3 bg-secondary/40 blur-3xl drift-slow"
						/>

						<div className="relative" data-reveal>
							<h2 className="font-display text-4xl font-semibold tracking-tight text-balance text-primary-foreground md:text-5xl">
								Un projet, une panne ? Parlons-en.
							</h2>
							<p className="mx-auto mt-5 max-w-xl text-lg text-primary-foreground/80">
								Devis gratuit et sans engagement. Décrivez votre besoin, on revient vers vous sous{" "}
								{company.interventionDelay}.
							</p>
							<div className="mt-9 flex flex-wrap items-center justify-center gap-4">
								<a
									href={company.phoneHref}
									className="btn h-14 bg-white px-9 text-base text-primary shadow-float hover:scale-105 active:scale-95"
								>
									<Phone size={18} /> {company.phone}
								</a>
								<a
									href={`mailto:${company.email}`}
									className="btn h-14 border-2 border-white/60 px-9 text-base text-white hover:scale-105 hover:bg-white/10 active:scale-95"
								>
									<Mail size={18} /> Écrire un mail
								</a>
							</div>

							<div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
								{[
									{
										icon: MapPin,
										k: "Atelier",
										v: `${company.address.street}, ${company.address.zip} ${company.address.city}`,
									},
									{ icon: Clock, k: "Intervention", v: company.interventionDelay },
									{ icon: Mail, k: "Email", v: company.email },
								].map((c) => (
									<div
										key={c.k}
										className="rounded-3xl border border-white/15 bg-white/10 p-5 text-left backdrop-blur"
									>
										<c.icon className="h-5 w-5 text-bright" />
										<p className="mt-2.5 text-xs font-bold uppercase tracking-wider text-primary-foreground/60">
											{c.k}
										</p>
										<p className="mt-1 text-sm font-semibold text-primary-foreground break-words">
											{c.v}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* ====================== FOOTER ====================== */}
				<footer className="border-t border-border px-4 sm:px-6 lg:px-8 py-12">
					<div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
						<div className="flex items-center gap-3">
							<span className="grid h-11 w-11 place-items-center rounded-full bg-primary text-white">
								<Snowflake size={22} />
							</span>
							<div>
								<p className="font-display text-lg font-bold leading-none">{company.legalName}</p>
								<p className="mt-1 text-sm text-muted-foreground">{company.tagline}</p>
							</div>
						</div>
						<div className="text-sm text-muted-foreground">
							<a href={company.phoneHref} className="font-semibold text-primary hover:underline">
								{company.phone}
							</a>
							<span className="mx-2">·</span>
							{company.address.zip} {company.address.city}
							<p className="mt-1 text-xs">
								© {year} {company.legalName} — Frigoriste & station SEBP
							</p>
						</div>
					</div>
				</footer>
			</main>
		</>
	);
}
