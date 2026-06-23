export const company = {
	name: "Aquifroid",
	legalName: "Aquifroid SAS",
	tagline: "Froid commercial · Station technique SEBP · Expertise CO₂",
	foundedYear: 2018,
	specializedSince: 2021,
	president: "Virginie Surin",
	phone: "06 42 84 13 87",
	phoneHref: "tel:+33642841387",
	email: "contact@aquifroid.com",
	address: {
		street: "4 B La Chaise",
		zip: "23290",
		city: "Fursac",
		region: "Creuse · Nouvelle-Aquitaine",
	},
	radiusKm: 150,
	interventionDelay: "24 à 48 h",
	hours: "Lun – Ven · 8h00 – 18h00",
	emergency: "Astreinte dépannage pour les contrats d'entretien",
} as const;

export type Stat = { value: string; suffix?: string; label: string };

export const stats: Stat[] = [
	{ value: "2018", label: "Atelier ouvert" },
	{ value: "2021", label: "Spécialisation engagée" },
	{ value: "150", suffix: " km", label: "Rayon d'intervention" },
	{ value: "24-48", suffix: " h", label: "Délai d'intervention" },
];

/* Marques du groupe SEBP — Aquifroid est station technique agréée */
export type SebpBrand = { name: string; specialty: string; founded?: string };

export const sebpBrands: SebpBrand[] = [
	{
		name: "Pavailler",
		specialty: "Fours à soles & rotatifs · boulangerie historique",
		founded: "1830",
	},
	{
		name: "CFI",
		specialty: "Fours rotatifs & matériels de cuisson",
	},
	{
		name: "Bertrand Puma",
		specialty: "Pétrins, diviseuses, façonneuses, fours",
	},
];

/* Fiche technique CO₂ — base argumentaire R744 */
export const co2Specs: { k: string; v: string }[] = [
	{ k: "Fluide", v: "R744 — CO₂ pur" },
	{ k: "PRP (GWP)", v: "1 · vs R404a 3 922" },
	{ k: "ODP", v: "0 · zéro impact ozone" },
	{ k: "Régime subcritique", v: "≤ 73 bar / +31°C" },
	{ k: "Régime transcritique", v: "70 – 130 bar · gas-cooler" },
	{ k: "Application", v: "Froid commercial intensif & boulangerie" },
];

export type Service = {
	mark: string;
	title: string;
	body: string;
	specs: string[];
};

export const services: Service[] = [
	{
		mark: "SVC-01",
		title: "Installation frigorifique",
		body: "Conception et pose d'équipements de froid commercial et industriel : chambres froides positives et négatives, vitrines, meubles réfrigérés, groupes logés et à distance.",
		specs: ["Froid positif & négatif", "Chambres froides sur-mesure", "Mise en service & réglages"],
	},
	{
		mark: "SVC-02",
		title: "Dépannage & maintenance",
		body: "Diagnostic et réparation toutes marques. Recherche de fuite, recharge fluide, remplacement compresseur, régulation. Remise en froid rapide pour limiter les pertes.",
		specs: ["Toutes marques", "Recherche de fuite", "Recharge fluide certifiée"],
	},
	{
		mark: "SVC-03",
		title: "Station technique SEBP",
		body: "Service technique agréé pour les fours et matériels boulangerie-pâtisserie des marques Pavailler, CFI et Bertrand Puma — pièces d'origine, intervention homologuée.",
		specs: ["Pavailler", "CFI", "Bertrand Puma", "Pièces d'origine"],
	},
	{
		mark: "SVC-04",
		title: "Expertise CO₂ (R744)",
		body: "Mise en œuvre et maintenance d'installations CO₂ subcritique et transcritique — une technologie écologique (PRP 1) que peu d'acteurs régionaux maîtrisent.",
		specs: ["Subcritique", "Transcritique", "Sécurité haute pression", "Formation continue"],
	},
];

export type Step = { number: string; label: string; body: string };

export const steps: Step[] = [
	{
		number: "01",
		label: "Diagnostic",
		body: "Visite technique sur site, relevé des contraintes, analyse de la charge thermique et choix du fluide adapté.",
	},
	{
		number: "02",
		label: "Devis",
		body: "Chiffrage clair et détaillé, dimensionnement de l'équipement, planning d'intervention engagé.",
	},
	{
		number: "03",
		label: "Installation",
		body: "Pose, raccordement frigorifique et électrique, tirage au vide, charge, mise en service et réglages fins.",
	},
	{
		number: "04",
		label: "Suivi",
		body: "Contrat d'entretien, contrôles d'étanchéité réglementaires et astreinte dépannage sur la durée de vie.",
	},
];

export type Sector = { id: string; name: string; note: string };

export const sectors: Sector[] = [
	{ id: "boulangerie", name: "Boulangerie", note: "Fours, chambres de pousse, froid associé" },
	{ id: "patisserie", name: "Pâtisserie", note: "Vitrines, surgélation, conservation" },
	{ id: "resto", name: "Restaurants", note: "Cuisines pro & arrière-boutiques" },
	{ id: "bouche", name: "Métiers de bouche", note: "Boucherie · traiteur · charcuterie" },
	{ id: "gms", name: "GMS & supermarchés", note: "Linéaires, chambres, CO₂ transcritique" },
	{ id: "hotel", name: "Hôtellerie & collectivités", note: "Cuisines, celliers, cantines" },
];

export const nav = [
	{ label: "Services", href: "#services" },
	{ label: "SEBP", href: "#sebp" },
	{ label: "CO₂", href: "#co2" },
	{ label: "Méthode", href: "#methode" },
	{ label: "Contact", href: "#contact" },
] as const;

/* Zones d'intervention (label seul, pour l'à propos) */
export const interventionZones = [
	"Limoges",
	"Guéret",
	"Aubusson",
	"Périgueux",
	"Brive",
	"Châteauroux",
	"Poitiers",
] as const;
