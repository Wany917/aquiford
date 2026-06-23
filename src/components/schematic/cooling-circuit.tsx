/**
 * Schéma du cycle frigorifique — pièce maîtresse du hero.
 * Tracé progressif au scroll (data-draw) + flux du fluide en boucle (.circuit-flow).
 * Compresseur → Condenseur → Détendeur → Évaporateur → retour.
 */
export function CoolingCircuit() {
	const loop =
		"M 140 260 L 140 110 L 300 110 M 380 110 L 540 110 L 540 260 M 540 320 L 540 360 L 380 360 M 300 360 L 140 360 L 140 320";

	return (
		<div className="mx-auto w-full max-w-[20rem] sm:max-w-[30rem] lg:max-w-[35rem]">
			<svg
				viewBox="82 0 550 440"
				className="block h-auto w-full"
				fill="none"
				aria-label="Schéma du cycle frigorifique : compresseur, condenseur, détendeur, évaporateur"
			>
				<title>Cycle frigorifique</title>
				<path d={loop} stroke="var(--c-margin)" strokeWidth="1" opacity="0.4" />

				<path
					data-draw
					className="circuit-path"
					d={loop}
					stroke="var(--c-blue-deep)"
					strokeWidth="2"
					strokeLinecap="square"
				/>

				<path d={loop} stroke="var(--c-blue-bright)" strokeWidth="2" className="circuit-flow" />

				{/* COMPRESSEUR */}
				<g>
					<circle
						cx="140"
						cy="290"
						r="30"
						fill="var(--c-paper-warm)"
						stroke="var(--c-ink)"
						strokeWidth="1.5"
					/>
					<path
						d="M 122 278 L 158 278 L 122 302 L 158 302"
						stroke="var(--c-blue-deep)"
						strokeWidth="1.5"
					/>
					<text
						x="140"
						y="345"
						fill="var(--c-blue-deep)"
						fontSize="11"
						fontFamily="var(--font-mono)"
						textAnchor="middle"
						fontWeight="600"
					>
						COMPRESSEUR
					</text>
				</g>

				{/* CONDENSEUR */}
				<g>
					<rect
						x="300"
						y="86"
						width="80"
						height="48"
						fill="var(--c-paper-warm)"
						stroke="var(--c-ink)"
						strokeWidth="1.5"
					/>
					{[98, 110, 122].map((y) => (
						<line
							key={y}
							x1="312"
							y1={y}
							x2="368"
							y2={y}
							stroke="var(--c-blue)"
							strokeWidth="1.5"
						/>
					))}
					<text
						x="340"
						y="72"
						fill="var(--c-blue-deep)"
						fontSize="11"
						fontFamily="var(--font-mono)"
						textAnchor="middle"
						fontWeight="600"
					>
						CONDENSEUR
					</text>
					<text
						x="340"
						y="156"
						fill="var(--c-ink-soft)"
						fontSize="9"
						fontFamily="var(--font-mono)"
						textAnchor="middle"
					>
						REJET CHALEUR ↑
					</text>
				</g>

				{/* DÉTENDEUR */}
				<g>
					<path
						d="M 540 274 L 524 290 L 556 290 L 540 306 Z"
						fill="var(--c-paper-warm)"
						stroke="var(--c-ink)"
						strokeWidth="1.5"
					/>
					<text
						x="585"
						y="294"
						fill="var(--c-blue-deep)"
						fontSize="11"
						fontFamily="var(--font-mono)"
						textAnchor="middle"
						fontWeight="600"
					>
						DÉTENDEUR
					</text>
				</g>

				{/* ÉVAPORATEUR */}
				<g>
					<rect
						x="300"
						y="336"
						width="80"
						height="48"
						fill="var(--c-paper-warm)"
						stroke="var(--c-ink)"
						strokeWidth="1.5"
					/>
					{[348, 360, 372].map((y) => (
						<line
							key={y}
							x1="312"
							y1={y}
							x2="368"
							y2={y}
							stroke="var(--c-blue-bright)"
							strokeWidth="1.5"
						/>
					))}
					<text
						x="340"
						y="402"
						fill="var(--c-blue-deep)"
						fontSize="11"
						fontFamily="var(--font-mono)"
						textAnchor="middle"
						fontWeight="600"
					>
						ÉVAPORATEUR
					</text>
					<text
						x="340"
						y="326"
						fill="var(--c-ink-soft)"
						fontSize="9"
						fontFamily="var(--font-mono)"
						textAnchor="middle"
					>
						FROID PRODUIT ↓
					</text>
				</g>

				{/* repères pression */}
				<text x="100" y="190" fill="var(--c-blue-deep)" fontSize="9" fontFamily="var(--font-mono)">
					HP · GAZ
				</text>
				<text
					x="556"
					y="190"
					fill="var(--c-blue-bright)"
					fontSize="9"
					fontFamily="var(--font-mono)"
					textAnchor="end"
					fillOpacity={0.9}
				>
					HP · LIQUIDE
				</text>

				{/* flèches de sens */}
				<g fill="var(--c-blue-deep)">
					<path d="M 220 104 l 0 12 l 10 -6 z" />
					<path d="M 460 354 l 0 -12 l -10 6 z" />
				</g>
			</svg>
		</div>
	);
}
