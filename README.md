# Aquifroid — site vitrine

Vitrine technique d'**Aquifroid SAS**, frigoriste basée à Fursac (Creuse),
**station technique du groupe SEBP** (Pavailler · CFI · Bertrand Puma) et
**spécialisée en CO₂** (R744 subcritique / transcritique). Rayon
d'intervention de 150 km autour de Fursac, incluant Limoges et la
Nouvelle-Aquitaine.

## Concept

Direction artistique « **plan d'ingénieur** » (blueprint) : papier glacé,
encre ardoise, palette ColorHunt en bleus, grille de fond, cartouches,
sections numérotées (§1 à §8) et schéma animé du cycle frigorifique qui se
trace au scroll. Le ton vise la rigueur technique d'un dossier d'intervention.

Deux sections dédiées portent les différenciateurs :
- **§2 · Station technique SEBP** — agrément constructeur sur les marques
  Pavailler, CFI et Bertrand Puma.
- **§3 · R744 · Expertise CO₂** — pourquoi peu d'acteurs y vont et fiche
  technique détaillée (PRP, ODP, régimes subcritique / transcritique).

## Stack

- **Next.js 16** (App Router, Turbopack, `output: "standalone"`) — page statique
- **Tailwind CSS v4** (tokens & utilitaires custom dans `src/app/globals.css`)
- **GSAP + ScrollTrigger** + **Lenis** — smooth scroll, parallaxe hero, reveal, tracé du schéma
- **Biome** (lint + format), **Bun** (runtime / package manager)

## Animations (`src/components/animation/smooth-scroll.tsx`)

| Hook | Effet |
|------|-------|
| `data-hero="title"` | entrée + parallaxe/fondu au scroll |
| `data-reveal` | fondu + translation à l'entrée dans le viewport |
| `data-stagger` / `data-stagger-item` | apparition en cascade |
| `data-draw` | tracé progressif du schéma frigorifique |

Tout est désactivé proprement si `prefers-reduced-motion: reduce`.

## Développement

```bash
bun install
bun run dev      # http://localhost:3007
bun run build    # build de production
bun run start    # sert le build
bun run lint     # biome check --write
```

## Déploiement Docker / Dokploy

```bash
docker compose up -d --build
```

- `Dockerfile` multi-stage : bun pour le build, node 22-alpine pour le runtime
  (Next.js standalone, image finale ~150 MB)
- `docker-compose.yml` : service `web` exposé sur 3000, branché au réseau
  externe `dokploy-network`. Le routage Traefik est piloté par Dokploy via
  son interface (les labels sont laissés en commentaire pour un mode Swarm
  stand-alone).
- Healthcheck `/` toutes les 30 s.

## Contenu

Toutes les données métier (coordonnées, services, étapes, secteurs, marques
SEBP, fiche technique CO₂) sont centralisées dans `src/data/company.ts`. Le
balisage SEO (`HVACBusiness` JSON-LD) est dans `src/app/layout.tsx`.
