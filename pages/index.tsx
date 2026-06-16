import { useState, useEffect } from "react";
import Link from "next/link";
import { VscArrowRight } from "react-icons/vsc";

import { technologies } from "@/data/technologies";
import styles from "@/styles/HomePage.module.css";

export default function HomePage() {
	const [activeLineIndex, setActiveLineIndex] = useState(0);

	const codeLines = [
		{
			code: "import { technologies } from '@/data/technologies';",
			type: "import-statement",
		},
		{ code: "", type: "blank" },
		{ code: "const HomePage = () => {", type: "function" },
		{
			code: "  const [isLoaded, setIsLoaded] = useState(true);",
			type: "variable",
		},
		{ code: "  const developerInfo = {", type: "variable" },
		{ code: "    name: 'Shubh Sanghvi',", type: "array-item" },
		{ code: "    role: 'Software Engineer',", type: "array-item" },
		{
			code: "    bio: 'I build scalable backend systems and applied-AI tooling \n   , agents, retrieval pipelines, and distributed job processing.'",
			type: "array-item",
		},
		{ code: "  };", type: "array-end" },
		{ code: "", type: "blank" },
		{ code: "  useEffect(() => {", type: "nested-function" },
		{
			code: "    document.title = `${developerInfo.name} | Portfolio`;",
			type: "return",
		},
		{ code: "    setIsLoaded(true);", type: "function-call" },
		{ code: "  }, []);", type: "close" },
		{ code: "", type: "blank" },
		{ code: "  return (", type: "return-object" },
		{
			code: '    <main className="hero-container">',
			type: "object-method",
		},
		{ code: "      <h1>{developerInfo.name}</h1>", type: "object-method" },
		{ code: "      <p>{developerInfo.role}</p>", type: "object-method" },
		{ code: '      <div className="cta">', type: "object-method" },
		{
			code: '        <Link href="/projects">View Projects</Link>',
			type: "object-method",
		},
		{ code: "      </div>", type: "object-method" },
		{ code: '      <div className="tech-stack">', type: "object-method" },
		{
			code: "        {technologies.map(tech => <span>{tech.name}</span>)}",
			type: "object-method",
		},
		{ code: "      </div>", type: "object-method" },
		{ code: "    </main>", type: "object-method" },
		{ code: "  );", type: "close" },
		{ code: "};", type: "close-function" },
		{ code: "", type: "blank" },
		{ code: "export default HomePage;", type: "function-call" },
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveLineIndex((prev) => (prev + 1) % codeLines.length);
		}, 2000);

		return () => clearInterval(interval);
	}, [codeLines.length]);

	return (
		<div className={styles.heroLayout}>
			<div className={styles.container}>
				<div className={styles.codeSection}>
					<div className={styles.codeContainer}>
						<div className={styles.editorContent}>
							<div className={styles.lineNumbers}>
								{codeLines.map((_, index) => (
									<div
										key={index}
										className={`${styles.lineNumber} ${
											index === activeLineIndex
												? styles.activeLine
												: ""
										}`}
									>
										{index + 1}
									</div>
								))}
							</div>

							<div className={styles.codeEditor}>
								{codeLines.map((line, index) => (
									<div
										key={index}
										className={`${styles.codeLine} ${
											styles[line.type]
										} ${
											index === activeLineIndex
												? styles.highlightedLine
												: ""
										}`}
									>
										{line.code}
									</div>
								))}
							</div>

							<div className={styles.overlayGlow}></div>
						</div>
					</div>
				</div>

				<div className={styles.infoSection}>
					<h1 className={styles.developerName}>
						Shubh <span className={styles.accentText}>Sanghvi</span>
					</h1>

					<div className={styles.developerRole}>
						Software Engineer · Backend + AI
					</div>

					<p className={styles.bio}>
						I build scalable backend systems and applied-AI tooling 
						agents, retrieval pipelines, and distributed job processing. 
						Finished my M.S. in CS from SJSU; recently at Amazon, and 
						two years at Deloitte before that.
					</p>

					<div className={styles.actionLinks}>
						<Link href="/projects" className={styles.primaryLink}>
							View Projects <VscArrowRight />
						</Link>
					</div>

					{/* Technologies Stack */}
					<div className={styles.techStack}>
						<h3 className={styles.techStackTitle}>
							Technologies I&apos;ve Worked With:
						</h3>
						<div className={styles.techBadges}>
							{technologies.map((tech, index) => (
								<span
									key={index}
									className={styles.techBadge}
									style={{
										backgroundColor: tech.backgroundColor,
										color: tech.color,
									}}
								>
									{tech.name}
								</span>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className={styles.decorElements}>
				<div className={styles.codeFlare}></div>
				<div className={styles.gridLines}></div>
				<div className={styles.codeBlock1}>{"{"}</div>
				<div className={styles.codeBlock2}>{"}"}</div>
				<div className={styles.codeBlock3}>{"<>"}</div>
				<div className={styles.codeBlock4}>{"/>"}</div>
				<div className={styles.orb1}></div>
				<div className={styles.orb2}></div>
				<div className={styles.orb3}></div>
				<div className={styles.codeSymbol1}>{"()"}</div>
				<div className={styles.codeSymbol2}>{"[]"}</div>
				<div className={styles.codeSymbol3}>{"=>"}</div>
				<div className={styles.dotPattern}></div>
				<div className={styles.mobileAccent}></div>
			</div>
		</div>
	);
}

export async function getStaticProps() {
	return {
		props: { title: "Home" },
	};
}
