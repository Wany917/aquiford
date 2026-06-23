import {
	ArrowRight,
	Atom,
	Award,
	Clock,
	Mail,
	MapPin,
	Phone,
	ShieldCheck,
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

const marqueeItems = [
	"FROID COMMERCIAL",
	"STATION TECHNIQUE SEBP",
	"PAVAILLER",
	"CFI",
	"BERTRAND PUMA",
	"CO₂ SUBCRITIQUE",
	"CO₂ TRANSCRITIQUE",
	"R744",
	"CHAMBRES FROIDES",
	"BOULANGERIE · PÂTISSERIE",
];

export default function Home() {
	return (
		<>
			<SmoothScroll />
			<SiteNav />

			<main id="top" className="pt-16 overflow-x-hidden">
				{/* ====================== HERO ====================== */}
				<section className="border-b border-ink">
					{/* cartouche titre */}
					<div className="container-wide grid grid-cols-12 border-b border-ink">
						<div className="col-span-12 lg:col-span-8 lg:border-e border-ink px-6 py-8 lg:py-10">
							<p className="fs-label-blue mb-4">Plan AQ-01 · Cycle frigorifique</p>
							<h1 data-hero="title" className="fs-headline text-[clamp(2.4rem,7.3vw,5.4rem)]">
								Le froid technique,
								<br />
								jusqu'au CO₂.
							</h1>
							<p className="fs-body text-base lg:text-lg mt-5 max-w-2xl text-ink-soft">
								{`${company.legalName} — station technique du groupe SEBP (Pavailler · CFI · Bertrand Puma) et expertise R744. Installation, dépannage et maintenance frigorifique dans un rayon de ${company.radiusKm} km autour de Fursac (23), Limoges et Nouvelle-Aquitaine.`}
							</p>
						</div>
						<div className="col-span-12 lg:col-span-4 grid grid-cols-2">
							{[
								{ k: "Établi", v: String(company.foundedYear) },
								{ k: "Spéc.", v: String(company.specializedSince) },
								{ k: "Zone", v: `${company.radiusKm} km` },
								{ k: "Interv.", v: company.interventionDelay },
							].map((cell, i) => (
								<div
									key={cell.k}
									className={`px-5 py-4 border-ink ${i < 2 ? "border-b" : ""} ${i % 2 === 0 ? "border-e" : ""}`}
								>
									<p className="fs-label opacity-60 mb-1">{cell.k}</p>
									<p className="fs-mono text-base">{cell.v}</p>
								</div>
							))}
						</div>
					</div>

					{/* schéma + aside */}
					<div className="container-wide grid grid-cols-12">
						<div className="col-span-12 lg:col-span-8 lg:border-e border-ink fs-axis px-4 sm:px-6 py-12 lg:py-16 flex items-center justify-center min-h-[24rem] sm:min-h-[26rem] overflow-hidden">
							<CoolingCircuit />
						</div>
						<aside
							data-hero="aside"
							className="col-span-12 lg:col-span-4 px-6 py-12 flex flex-col gap-6"
						>
							<div>
								<p className="fs-label-blue mb-3">Légende</p>
								<ul className="space-y-2.5 fs-mono text-xs text-ink-soft">
									<li className="flex items-center gap-2.5">
										<span className="inline-block h-0.5 w-6 bg-blue-deep" />
										CIRCUIT HAUTE PRESSION
									</li>
									<li className="flex items-center gap-2.5">
										<span className="inline-block h-0.5 w-6 bg-blue-bright" />
										FLUIDE BASSE PRESSION
									</li>
									<li className="flex items-center gap-2.5">
										<span className="inline-block h-0.5 w-6 border-t border-dashed border-margin" />
										TRACÉ DE PRINCIPE
									</li>
								</ul>
							</div>
							<p className="fs-note">
								Un cycle maîtrisé de bout en bout — y compris en CO₂ haute pression, là où la
								plupart des frigoristes s'arrêtent.
							</p>
							<div className="flex flex-col gap-3 mt-auto">
								<a
									href="#contact"
									className="inline-flex items-center justify-between bg-blue-deep text-paper px-5 h-12 fs-label hover:bg-ink transition-colors"
								>
									Demander un devis <ArrowRight className="w-4 h-4" />
								</a>
								<a
									href={company.phoneHref}
									className="inline-flex items-center justify-between border border-ink px-5 h-12 fs-label hover:bg-ink hover:text-paper transition-colors"
								>
									{company.phone} <Phone className="w-4 h-4" />
								</a>
							</div>
						</aside>
					</div>
				</section>

				{/* ====================== MARQUEE ====================== */}
				<section className="border-b border-ink bg-ink text-paper overflow-hidden">
					<div className="py-3 marquee-track" aria-hidden>
						{["a", "b"].map((copy) =>
							marqueeItems.map((item) => (
								<span
									key={`${copy}-${item}`}
									className="fs-label text-paper px-6 inline-flex items-center gap-6"
								>
									{item}
									<span className="text-blue-bright">❄</span>
								</span>
							)),
						)}
					</div>
				</section>

				{/* ====================== STATS ====================== */}
				<section className="border-b border-ink">
					<div className="container-wide grid grid-cols-12">
						<div className="col-span-12 px-6 py-4 border-b border-ink">
							<p className="fs-label-blue">§1 · Paramètres opérationnels</p>
						</div>
						<div data-stagger className="contents">
							{stats.map((s, i) => (
								<div
									key={s.label}
									data-stagger-item
									className={`col-span-6 lg:col-span-3 px-6 py-9 border-ink ${i < 3 ? "lg:border-e" : ""} ${i < 2 ? "border-b lg:border-b-0" : ""} ${i % 2 === 0 ? "border-e lg:border-e" : ""}`}
								>
									<p className="fs-label opacity-60 mb-3">{(i + 1).toString().padStart(2, "0")}</p>
									<p className="fs-mono text-4xl lg:text-5xl mb-2 text-blue-deep">
										<CountUp value={s.value} suffix={s.suffix} />
									</p>
									<p className="fs-body text-xs uppercase tracking-[0.12em] text-muted-foreground">
										{s.label}
									</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* ====================== §2 — STATION TECHNIQUE SEBP ====================== */}
				<section id="sebp" className="border-b border-ink scroll-mt-16">
					<div className="container-wide grid grid-cols-12 border-b border-ink">
						<div className="col-span-12 lg:col-span-5 lg:border-e border-ink px-6 py-12">
							<p className="fs-label-blue mb-4">§2 · Réseau agréé</p>
							<h2 className="fs-headline text-[clamp(1.9rem,3.6vw,3rem)] mb-5" data-reveal>
								Station technique
								<br />
								du groupe SEBP.
							</h2>
							<p className="fs-note" data-reveal>
								Un agrément qui valide la rigueur d'intervention — homologation, pièces d'origine et
								procédures constructeur, sur les fours et matériels boulangerie-pâtisserie des trois
								marques.
							</p>
						</div>
						<div className="col-span-12 lg:col-span-7 px-6 py-12 flex items-end">
							<div className="flex items-start gap-4 max-w-2xl" data-reveal>
								<Award className="w-7 h-7 text-blue-deep shrink-0" strokeWidth={1.6} />
								<p className="fs-body text-base lg:text-lg text-ink-soft">
									Aquifroid est référencée auprès du groupe SEBP comme station technique agréée.
									Service après-vente, mise en service et contrats de maintenance sont assurés sous
									protocole constructeur, avec accès direct aux pièces détachées d'origine.
								</p>
							</div>
						</div>
					</div>

					<div data-stagger className="container-wide grid grid-cols-12">
						{sebpBrands.map((brand, i) => (
							<article
								key={brand.name}
								data-stagger-item
								className={`col-span-12 md:col-span-4 px-6 py-12 border-ink ${i < 2 ? "md:border-e" : ""} ${i < 2 ? "border-b md:border-b-0" : ""}`}
							>
								<p className="fs-label opacity-60 mb-4">
									Marque {(i + 1).toString().padStart(2, "0")}
								</p>
								<h3 className="fs-headline text-3xl lg:text-4xl mb-3 text-blue-deep">
									{brand.name}
								</h3>
								<p className="fs-body text-sm text-ink-soft mb-3">{brand.specialty}</p>
								{brand.founded && (
									<p className="fs-mono text-xs text-margin">EST. {brand.founded}</p>
								)}
							</article>
						))}
					</div>
				</section>

				{/* ====================== §3 — EXPERTISE CO₂ ====================== */}
				<section id="co2" className="border-b border-ink scroll-mt-16">
					<div className="container-wide grid grid-cols-12 border-b border-ink">
						<div className="col-span-12 px-6 py-4">
							<p className="fs-label-blue">§3 · R744 · Expertise CO₂</p>
						</div>
					</div>
					<div className="container-wide grid grid-cols-12">
						<div className="col-span-12 lg:col-span-6 lg:border-e border-ink px-6 py-12 lg:py-16">
							<div className="flex items-center gap-3 mb-6" data-reveal>
								<Atom className="w-8 h-8 text-blue-deep" strokeWidth={1.5} />
								<span className="fs-callout">R744</span>
							</div>
							<h2 className="fs-headline text-[clamp(1.9rem,3.8vw,3.2rem)] mb-6" data-reveal>
								Là où peu d'acteurs vont.
								<br />
								<span className="text-blue-deep">On y va.</span>
							</h2>
							<div data-stagger className="space-y-5 max-w-xl">
								<p data-stagger-item className="fs-body text-base lg:text-lg text-ink-soft">
									Le CO₂ comme fluide frigorigène (R744) est{" "}
									<strong className="text-ink">le futur du froid commercial</strong> : PRP de 1,
									zéro impact ozone, performance excellente sur le froid intensif.
								</p>
								<p data-stagger-item className="fs-body text-base text-ink-soft">
									Sa contrepartie : haute pression (jusqu'à 130 bar en transcritique), procédures de
									sécurité strictes, formation continue. C'est ce qui en décourage la majorité.
								</p>
								<p data-stagger-item className="fs-note text-sm">
									Nous, on l'installe, on le dépanne et on l'entretient — subcritique comme
									transcritique. C'est la spécialisation qu'on a engagée en{" "}
									{company.specializedSince}.
								</p>
							</div>
						</div>

						{/* fiche technique CO₂ */}
						<div className="col-span-12 lg:col-span-6 px-6 py-12 lg:py-16 fs-axis">
							<div className="fs-sheet corner-marks p-6 lg:p-8 max-w-md mx-auto" data-reveal>
								<div className="flex items-center justify-between mb-6 pb-4 border-b border-ink/20">
									<p className="fs-label-blue">Fiche technique · R744</p>
									<span className="fs-mono text-xs text-margin">AQ-03</span>
								</div>
								<dl className="space-y-3.5">
									{co2Specs.map((row) => (
										<div key={row.k} className="grid grid-cols-12 gap-3 items-baseline">
											<dt className="col-span-5 fs-label opacity-70">{row.k}</dt>
											<dd className="col-span-7 fs-mono text-sm text-ink">{row.v}</dd>
										</div>
									))}
								</dl>
								<p className="fs-mono text-[0.65rem] text-margin mt-6 pt-4 border-t border-ink/20">
									Réf. PRP / GWP — règlement F-Gaz (UE) 517/2014.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* ====================== §4 — SERVICES ====================== */}
				<section id="services" className="border-b border-ink scroll-mt-16">
					<div className="container-wide grid grid-cols-12 border-b border-ink">
						<div className="col-span-12 lg:col-span-5 lg:border-e border-ink px-6 py-12">
							<p className="fs-label-blue mb-4">§4 · Prestations</p>
							<h2 className="fs-headline text-[clamp(1.9rem,3.6vw,3rem)]" data-reveal>
								Quatre métiers,
								<br />
								une exigence.
							</h2>
						</div>
						<div className="col-span-12 lg:col-span-7 px-6 py-12 flex items-end">
							<p className="fs-body text-base lg:text-lg max-w-2xl text-ink-soft" data-reveal>
								Du linéaire de supermarché à la chambre froide négative, en passant par le four
								boulangerie SEBP et la centrale CO₂ transcritique — une équipe, des installations
								conformes, un suivi durable.
							</p>
						</div>
					</div>

					<div data-stagger className="container-wide grid grid-cols-12">
						{services.map((s, i) => (
							<article
								key={s.mark}
								data-stagger-item
								className={`col-span-12 md:col-span-6 px-6 py-10 border-ink group ${i % 2 === 0 ? "md:border-e" : ""} ${i < 2 ? "border-b" : "border-b md:border-b-0"}`}
							>
								<div className="flex items-center justify-between mb-6">
									<span className="fs-callout">{s.mark}</span>
									<Wrench className="w-5 h-5 text-blue-deep opacity-40 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-300" />
								</div>
								<h3 className="fs-headline text-2xl mb-3">{s.title}</h3>
								<p className="fs-body text-sm text-ink-soft mb-6 max-w-md">{s.body}</p>
								<ul className="flex flex-wrap gap-2">
									{s.specs.map((spec) => (
										<li
											key={spec}
											className="fs-mono text-[0.68rem] border border-ink/30 px-2.5 py-1 text-ink-soft"
										>
											{spec}
										</li>
									))}
								</ul>
							</article>
						))}
					</div>
				</section>

				{/* ====================== §5 — MÉTHODE ====================== */}
				<section id="methode" className="border-b border-ink scroll-mt-16">
					<div className="container-wide px-6 py-4 border-b border-ink">
						<p className="fs-label-blue">§5 · Séquence d'intervention</p>
					</div>
					<div data-stagger className="container-wide grid grid-cols-12">
						{steps.map((step, i) => (
							<article
								key={step.number}
								data-stagger-item
								className={`col-span-12 md:col-span-6 lg:col-span-3 px-6 py-10 border-ink ${i < 3 ? "lg:border-e" : ""} ${i < 2 ? "md:border-e" : ""} ${i < 3 ? "border-b lg:border-b-0" : ""} ${i === 0 || i === 2 ? "md:border-b" : ""} ${i === 2 ? "lg:border-b-0" : ""}`}
							>
								<div className="fs-dim mb-6">
									<span className="fs-mono text-xs">ÉTAPE {step.number}</span>
									<span className="flex-1 h-px bg-blue-deep" />
								</div>
								<h3 className="fs-headline text-xl mb-3">{step.label}</h3>
								<p className="fs-body text-sm text-ink-soft">{step.body}</p>
							</article>
						))}
					</div>
				</section>

				{/* ====================== §6 — SECTEURS ====================== */}
				<section id="secteurs" className="border-b border-ink scroll-mt-16">
					<div className="container-wide grid grid-cols-12 border-b border-ink">
						<div className="col-span-12 px-6 py-4">
							<p className="fs-label-blue">§6 · Secteurs équipés</p>
						</div>
					</div>
					<div className="container-wide grid grid-cols-12">
						<div className="col-span-12 lg:col-span-4 lg:border-e border-ink px-6 py-12">
							<h2 className="fs-headline text-[clamp(1.9rem,3.6vw,3rem)] mb-5" data-reveal>
								Là où le froid
								<br />
								est critique.
							</h2>
							<p className="fs-note" data-reveal>
								Boulangerie, GMS, industrie, hôtellerie : partout où une rupture de froid coûte
								cher, on intervient vite et bien.
							</p>
						</div>
						<div
							data-stagger
							className="col-span-12 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
						>
							{sectors.map((sec, i) => (
								<article
									key={sec.id}
									data-stagger-item
									className={`px-6 py-8 border-ink hover:bg-paper-edge transition-colors ${i % 3 !== 2 ? "lg:border-e" : ""} ${i % 2 === 0 ? "sm:border-e lg:border-e" : "sm:border-e-0"} ${i < sectors.length - 1 ? "border-b" : ""} ${i >= 3 ? "lg:border-b-0" : ""}`}
								>
									<div className="flex items-baseline justify-between mb-4">
										<p className="fs-label-blue">Z-{(i + 1).toString().padStart(2, "0")}</p>
										<span className="fs-mono text-xs opacity-40">{(i + 1) * 12}m²</span>
									</div>
									<h3 className="fs-headline text-lg mb-1.5">{sec.name}</h3>
									<p className="fs-body text-xs text-ink-soft">{sec.note}</p>
								</article>
							))}
						</div>
					</div>
				</section>

				{/* ====================== §7 — À PROPOS ====================== */}
				<section id="apropos" className="border-b border-ink scroll-mt-16">
					<div className="container-wide grid grid-cols-12">
						<div className="col-span-12 lg:col-span-5 lg:border-e border-ink px-6 py-16">
							<p className="fs-label-blue mb-4">§7 · Notes générales</p>
							<h2 className="fs-headline text-[clamp(1.9rem,3.6vw,3rem)]" data-reveal>
								Frigoristes
								<br />
								depuis {company.foundedYear}.
							</h2>
						</div>
						<div className="col-span-12 lg:col-span-7 px-6 py-16">
							<p className="fs-body text-base lg:text-lg max-w-2xl text-ink-soft" data-reveal>
								{`Aquifroid SAS a ouvert son atelier à Fursac (Creuse) en ${company.foundedYear} et engagé sa spécialisation technique en ${company.specializedSince} sous la présidence de ${company.president}. Petite équipe, gros engagement : installations aux normes, dépannage réactif, et les capacités techniques (SEBP, CO₂) qu'on ne trouve pas partout.`}
							</p>
							<div data-stagger className="mt-8 grid sm:grid-cols-3 gap-0 border-t border-ink">
								{[
									{
										icon: ShieldCheck,
										t: "Conformité",
										d: "Installations & contrôles d'étanchéité aux normes (F-Gaz).",
									},
									{
										icon: Award,
										t: "Réseau SEBP",
										d: "Station agréée Pavailler · CFI · Bertrand Puma.",
									},
									{
										icon: Atom,
										t: "CO₂ R744",
										d: "Subcritique et transcritique maîtrisés.",
									},
								].map((item, i) => (
									<div
										key={item.t}
										data-stagger-item
										className={`py-6 sm:px-5 sm:py-6 border-ink ${i < 2 ? "sm:border-e border-b sm:border-b-0" : ""}`}
									>
										<item.icon className="w-6 h-6 text-blue-deep mb-3" strokeWidth={1.6} />
										<p className="fs-headline text-base mb-1.5">{item.t}</p>
										<p className="fs-body text-xs text-ink-soft">{item.d}</p>
									</div>
								))}
							</div>

							{/* zones desservies */}
							<div className="mt-10 pt-6 border-t border-ink/30" data-reveal>
								<p className="fs-label opacity-60 mb-3">
									Zones desservies · rayon {company.radiusKm} km
								</p>
								<ul className="flex flex-wrap gap-2">
									{interventionZones.map((z) => (
										<li
											key={z}
											className="fs-mono text-[0.7rem] border border-ink/30 px-2.5 py-1 text-ink-soft"
										>
											{z}
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</section>

				{/* ====================== §8 — CONTACT ====================== */}
				<section id="contact" className="border-b border-ink scroll-mt-16">
					<div className="container-wide grid grid-cols-12">
						<div className="col-span-12 lg:col-span-7 lg:border-e border-ink px-6 py-16">
							<p className="fs-label-blue mb-4">§8 · Prise de contact</p>
							<h2 className="fs-headline text-[clamp(2rem,4.5vw,3.6rem)] mb-5" data-reveal>
								Un projet, une panne ?
								<br />
								Parlons-en.
							</h2>
							<p className="fs-body text-base max-w-xl text-ink-soft mb-10" data-reveal>
								Devis gratuit et sans engagement. Décrivez votre besoin par téléphone ou par mail,
								on revient vers vous sous {company.interventionDelay}.
							</p>
							<div data-stagger className="grid sm:grid-cols-2 gap-px bg-ink border border-ink">
								{[
									{
										icon: Phone,
										k: "Téléphone",
										v: company.phone,
										href: company.phoneHref,
									},
									{
										icon: Mail,
										k: "Email",
										v: company.email,
										href: `mailto:${company.email}`,
									},
									{
										icon: MapPin,
										k: "Atelier",
										v: `${company.address.street}, ${company.address.zip} ${company.address.city}`,
									},
									{ icon: Clock, k: "Horaires", v: company.hours },
								].map((c) => (
									<div key={c.k} data-stagger-item className="bg-paper p-5">
										<c.icon className="w-5 h-5 text-blue-deep mb-3" strokeWidth={1.8} />
										<p className="fs-label opacity-60 mb-1.5">{c.k}</p>
										{c.href ? (
											<a
												href={c.href}
												className="fs-mono text-sm hover:text-blue-deep transition-colors break-words"
											>
												{c.v}
											</a>
										) : (
											<p className="fs-mono text-sm break-words">{c.v}</p>
										)}
									</div>
								))}
							</div>
						</div>

						<aside className="col-span-12 lg:col-span-5 px-6 py-16 flex flex-col justify-between gap-10">
							<div className="fs-sheet corner-marks p-6" data-reveal>
								<div className="flex items-center gap-3 mb-4">
									<span className="relative ping-dot inline-block w-2.5 h-2.5 rounded-full bg-blue-bright" />
									<p className="fs-label-blue">Astreinte dépannage</p>
								</div>
								<p className="fs-body text-sm text-ink-soft">{company.emergency}</p>
							</div>

							<a
								href={company.phoneHref}
								className="group fs-sheet corner-marks bg-blue-deep text-paper p-8 flex flex-col gap-2 hover:bg-ink transition-colors"
								data-reveal
							>
								<span className="fs-label text-paper/70">Appel direct</span>
								<span className="fs-mono text-3xl lg:text-4xl">{company.phone}</span>
								<span className="fs-label text-paper inline-flex items-center gap-2 mt-2">
									Appeler maintenant
									<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
								</span>
							</a>
						</aside>
					</div>
				</section>

				{/* ====================== FOOTER ====================== */}
				<footer>
					<div className="container-wide grid grid-cols-12">
						<div className="col-span-12 lg:col-span-6 lg:border-e border-ink px-6 py-8">
							<p className="fs-label-blue mb-2">Cartouche · AQ-01</p>
							<p className="fs-headline text-2xl">{company.legalName}</p>
							<p className="fs-body text-sm mt-2 text-ink-soft">{company.tagline}</p>
							<p className="fs-mono text-xs mt-4 text-muted-foreground">
								{company.address.street} · {company.address.zip} {company.address.city}
								<br />
								{company.address.region}
							</p>
						</div>
						<div className="col-span-6 lg:col-span-3 lg:border-e border-ink px-6 py-8">
							<p className="fs-label opacity-60 mb-3">Contact</p>
							<a href={company.phoneHref} className="fs-mono text-sm block hover:text-blue-deep">
								{company.phone}
							</a>
							<a
								href={`mailto:${company.email}`}
								className="fs-mono text-xs block mt-2 hover:text-blue-deep break-words"
							>
								{company.email}
							</a>
						</div>
						<div className="col-span-6 lg:col-span-3 px-6 py-8">
							<p className="fs-label opacity-60 mb-3">Horaires</p>
							<p className="fs-mono text-sm">{company.hours}</p>
							<p className="fs-mono text-xs mt-2 text-muted-foreground">
								Intervention {company.interventionDelay}
							</p>
						</div>
					</div>
					<div className="container-wide border-t border-ink px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 fs-mono text-xs">
						<span>
							© {year} · {company.legalName} — Frigoriste & station SEBP
						</span>
						<span className="text-blue-deep">Plan AQ-01 · Rév. {year}</span>
					</div>
				</footer>
			</main>
		</>
	);
}
