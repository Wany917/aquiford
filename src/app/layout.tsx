import "./globals.css";
import type { Metadata } from "next";
import { Fraunces, Nunito } from "next/font/google";
import { company } from "@/data/company";

const fraunces = Fraunces({
	variable: "--font-fraunces",
	subsets: ["latin"],
	display: "swap",
});

const nunito = Nunito({
	variable: "--font-nunito",
	subsets: ["latin"],
	display: "swap",
});

const description =
	"Aquifroid — installation, dépannage et maintenance frigorifique en Creuse et région Limoges. Station technique du groupe SEBP (Pavailler · CFI · Bertrand Puma) et expertise CO₂ (R744). Rayon 150 km, intervention 24-48 h.";

export const metadata: Metadata = {
	metadataBase: new URL("https://www.aquifroid.com"),
	title: {
		default: "Aquifroid · Frigoriste — Station SEBP & Expertise CO₂",
		template: "%s · Aquifroid",
	},
	description,
	keywords: [
		"frigoriste Creuse",
		"frigoriste Limoges",
		"chambre froide Fursac",
		"station technique SEBP",
		"Pavailler",
		"CFI",
		"Bertrand Puma",
		"CO2 R744",
		"froid commercial",
		"froid transcritique",
	],
	openGraph: {
		title: "Aquifroid · Frigoriste Station SEBP & CO₂",
		description,
		locale: "fr_FR",
		type: "website",
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="fr" className={`${fraunces.variable} ${nunito.variable}`} suppressHydrationWarning>
			<head>
				<script
					// biome-ignore lint/security/noDangerouslySetInnerHtml: micro-script anti-FOUC
					dangerouslySetInnerHTML={{
						__html: "document.documentElement.classList.add('js')",
					}}
				/>
				<script
					type="application/ld+json"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: données structurées SEO
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "HVACBusiness",
							name: company.legalName,
							alternateName: company.name,
							telephone: company.phoneHref.replace("tel:", ""),
							email: company.email,
							foundingDate: String(company.foundedYear),
							address: {
								"@type": "PostalAddress",
								streetAddress: company.address.street,
								postalCode: company.address.zip,
								addressLocality: company.address.city,
								addressCountry: "FR",
							},
							areaServed: `${company.radiusKm} km autour de Fursac (Creuse), Limoges et Nouvelle-Aquitaine`,
						}),
					}}
				/>
			</head>
			<body className="antialiased">{children}</body>
		</html>
	);
}
