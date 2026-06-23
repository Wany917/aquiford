/**
 * Schéma du cycle frigorifique — visuel du hero.
 * Tracé progressif au scroll (data-draw) + flux du fluide en boucle (.circuit-flow).
 * Version organique : tracés bleus arrondis sur fond clair.
 */
export function CoolingCircuit() {
	const loop =
		"M 140 260 L 140 110 L 300 110 M 380 110 L 540 110 L 540 260 M 540 320 L 540 360 L 380 360 M 300 360 L 140 360 L 140 320";

	return (
		<div className="mx-auto w-full max-w-[34rem]">
			<svg
				viewBox="82 0 550 440"
				className="block h-auto w-full"
				fill="none"
				aria-label="Schéma du cycle frigorifique : compresseur, condenseur, détendeur, évaporateur"
			>
				<title>Cycle frigorifique</title>
				<path d={loop} stroke="var(--border)" strokeWidth="2" strokeLinecap="round" />
				<path
					data-draw
					className="circuit-path"
					d={loop}
					stroke="var(--primary)"
					strokeWidth="2.5"
					strokeLinecap="round"
				/>
				<path
					d={loop}
					stroke="var(--bright)"
					strokeWidth="2.5"
					strokeLinecap="round"
					className="circuit-flow"
				/>

				{/* COMPRESSEUR */}
				<g>
					<circle
						cx="140"
						cy="290"
						r="30"
						fill="var(--card)"
						stroke="var(--primary)"
						strokeWidth="2"
					/>
					<path
						d="M 122 278 L 158 278 L 122 302 L 158 302"
						stroke="var(--secondary)"
						strokeWidth="2"
						strokeLinecap="round"
					/>
					<text
						x="140"
						y="346"
						fill="var(--muted-foreground)"
						fontSize="11"
						fontFamily="var(--font-sans)"
						textAnchor="middle"
						fontWeight="700"
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
						rx="10"
						fill="var(--card)"
						stroke="var(--primary)"
						strokeWidth="2"
					/>
					{[100, 110, 120].map((y) => (
						<line
							key={y}
							x1="314"
							y1={y}
							x2="366"
							y2={y}
							stroke="var(--secondary)"
							strokeWidth="2"
							strokeLinecap="round"
						/>
					))}
					<text
						x="340"
						y="72"
						fill="var(--muted-foreground)"
						fontSize="11"
						fontFamily="var(--font-sans)"
						textAnchor="middle"
						fontWeight="700"
					>
						CONDENSEUR
					</text>
					<text
						x="340"
						y="156"
						fill="var(--muted-foreground)"
						fontSize="9"
						fontFamily="var(--font-sans)"
						textAnchor="middle"
					>
						REJET CHALEUR ↑
					</text>
				</g>

				{/* DÉTENDEUR */}
				<g>
					<path
						d="M 540 274 L 524 290 L 556 290 L 540 306 Z"
						fill="var(--card)"
						stroke="var(--primary)"
						strokeWidth="2"
						strokeLinejoin="round"
					/>
					<text
						x="584"
						y="294"
						fill="var(--muted-foreground)"
						fontSize="11"
						fontFamily="var(--font-sans)"
						textAnchor="middle"
						fontWeight="700"
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
						rx="10"
						fill="var(--card)"
						stroke="var(--primary)"
						strokeWidth="2"
					/>
					{[350, 360, 370].map((y) => (
						<line
							key={y}
							x1="314"
							y1={y}
							x2="366"
							y2={y}
							stroke="var(--bright)"
							strokeWidth="2"
							strokeLinecap="round"
						/>
					))}
					<text
						x="340"
						y="404"
						fill="var(--muted-foreground)"
						fontSize="11"
						fontFamily="var(--font-sans)"
						textAnchor="middle"
						fontWeight="700"
					>
						ÉVAPORATEUR
					</text>
					<text
						x="340"
						y="326"
						fill="var(--muted-foreground)"
						fontSize="9"
						fontFamily="var(--font-sans)"
						textAnchor="middle"
					>
						FROID PRODUIT ↓
					</text>
				</g>

				{/* Repères */}
				<text
					x="104"
					y="190"
					fill="var(--secondary)"
					fontSize="9"
					fontFamily="var(--font-sans)"
					fontWeight="700"
				>
					HP · GAZ
				</text>
				<text
					x="552"
					y="190"
					fill="var(--bright)"
					fontSize="9"
					fontFamily="var(--font-sans)"
					textAnchor="end"
					fontWeight="700"
				>
					HP · LIQUIDE
				</text>

				{/* flèches de sens */}
				<g fill="var(--primary)">
					<path d="M 220 104 l 0 12 l 10 -6 z" />
					<path d="M 460 354 l 0 -12 l -10 6 z" />
				</g>
			</svg>
		</div>
	);
}
