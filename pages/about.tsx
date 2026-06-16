import styles from "@/styles/AboutPage.module.css";

const skillGroups: { category: string; items: string[] }[] = [
	{
		category: "Languages",
		items: ["Java", "Python", "Go", "Kotlin", "TypeScript", "JavaScript", "SQL", "C++", "Apex"],
	},
	{
		category: "Backend & APIs",
		items: ["FastAPI", "Node.js", "Express", "Django", "REST", "gRPC", "GraphQL", "WebSockets"],
	},
	{
		category: "Cloud & DevOps",
		items: ["AWS (ECS, S3, Lambda, DynamoDB, Textract, CDK)", "Docker", "Kubernetes", "Terraform", "CI/CD"],
	},
	{
		category: "Databases & Streaming",
		items: ["PostgreSQL", "MongoDB", "Redis", "Kafka", "DynamoDB", "Message Queues (DLQ)"],
	},
	{
		category: "AI / ML & Agents",
		items: ["LangChain", "RAG", "Vector Search", "Tool Calling", "MCP", "Qdrant", "Pinecone"],
	},
	{
		category: "Architecture & Observability",
		items: ["Distributed Systems", "Microservices", "Event-Driven", "Concurrency Control", "Fault Tolerance", "Prometheus", "Grafana"],
	},
];

const AboutPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h1 className={styles.title}>Shubh Sanghvi</h1>
				<div className={styles.subtitle}>Software Engineer</div>

				<div className={styles.aboutContent}>
					<section className={styles.section}>
						<p className={styles.paragraph}>
							Hey! I&apos;m a software engineer based in the Bay
							Area, California.
						</p>
						<p className={styles.paragraph}>
							I like building backend systems and, more recently,
							the applied-AI tooling that sits on top of them, the
							place those two meet is where the interesting work
							happens: agents that actually do something useful,
							retrieval that&apos;s measured rather than assumed,
							and queues that survive their own failures. My path so
							far has been Deloitte → Amazon → SJSU, with a track
							record across Kotlin, Java, Python, and TypeScript,
							building high-availability services on AWS with
							DynamoDB, S3, Docker, and Kubernetes. I care about
							systems that are honest about their failure modes and
							measured instead of vibes.
						</p>
					</section>

					<section className={styles.section}>
						<h2 className={styles.sectionTitle}>Experience</h2>

						<div className={styles.experienceBlock}>
							<p className={styles.highlight}>Amazon</p>
							<p className={styles.roleLocation}>
								Seattle, WA, Software Engineering Intern (May 2025
								– August 2025)
							</p>
							<ul className={styles.bulletList}>
								<li>
									Designed and built a cloud-native, automated
									I-9 document-processing service on AWS ECS,
									Textract, DynamoDB, and S3, owning end-to-end
									system design from requirements gathering and
									workflow modeling to SLA definition.
								</li>
								<li>
									Refactored fragmented legacy sequential scripts
									into an optimized ECS pipeline, using Kotlin
									coroutines for asynchronous batch processing
									across OCR, document retrieval, and extraction,
									boosting throughput 65% while improving fault
									tolerance and eliminating manual triggers.
								</li>
								<li>
									Provisioned the full stack as
									infrastructure-as-code with AWS CDK (ECS, S3,
									Textract, DynamoDB, CloudWatch), adding custom
									error handling, deduplication, real-time
									monitoring, performance dashboards, and
									automated recovery workflows.
								</li>
								<li>
									Cut manual effort 70–80% by replacing manual
									handoffs between service and dev teams with full
									workflow automation and structured, API-driven
									compliance reporting across thousands of records
									weekly.
								</li>
								<li>
									Partnered with compliance, security, and
									HR-tech teams through design and code reviews;
									reverse-engineered and handled edge cases like
									CHNV and international-student workflows, and
									documented architecture decisions and
									performance benchmarks.
								</li>
							</ul>
						</div>
						<br />

						<div className={styles.experienceBlock}>
							<p className={styles.highlight}>Deloitte USI</p>
							<p className={styles.roleLocation}>
								Mumbai, India, Software Engineer (September 2022 –
								June 2024)
							</p>
							<ul className={styles.bulletList}>
								<li>
									Optimized Lightning Web Components on the
									Salesforce Digital Experience platform,
									implementing complex business logic and cutting
									computation time 75–80% with seamless data
									integration.
								</li>
								<li>
									Wrote robust Apex backing the LWCs with
									comprehensive test classes at 90–100% coverage,
									minimizing and gracefully handling errors for
									regression-safe deployments.
								</li>
								<li>
									Led the transformation of a customized
									analytics solution to Salesforce CRM Analytics
									(CRMA), designing interactive dashboards for
									20,000+ client associates and managers and
									orchestrating data pipelines over 250,000
									records with automated, low-touch processing.
								</li>
								<li>
									Built advanced CRMA features, an embedded LWC
									component, flexible column selection, and record
									action link-outs, reducing user time and effort
									50–60%.
								</li>
								<li>
									Drove agile delivery (sprint planning, point
									estimation, stakeholder sprint-review demos) and
									introduced a pre-deployment story-validation
									checklist that cut post-deployment bugs; earned
									an Applause Award for delivering complex CRMA
									requirements.
								</li>
							</ul>
						</div>
					</section>

					<section className={styles.section}>
						<h2 className={styles.sectionTitle}>Skills</h2>
						<div className={styles.skillsGrid}>
							{skillGroups.map((group) => (
								<div key={group.category} className={styles.skillGroup}>
									<p className={styles.skillCategory}>{group.category}</p>
									<div className={styles.skillPills}>
										{group.items.map((item) => (
											<span key={item} className={styles.skillPill}>
												{item}
											</span>
										))}
									</div>
								</div>
							))}
						</div>
					</section>

					<section className={styles.section}>
						<h2 className={styles.sectionTitle}>Education</h2>

						<div className={styles.educationBlock}>
							<p className={styles.highlight}>
								Master of Science, Computer Science
							</p>
							<p className={styles.roleLocation}>
								San Jose State University, San Jose, CA, 2024 –
								2026
							</p>
						</div>

						<div className={styles.educationBlock}>
							<p className={styles.highlight}>
								Bachelor of Engineering, Computer Science
							</p>
							<p className={styles.roleLocation}>
								University of Mumbai, Mumbai, India, 2018 – 2022
							</p>
						</div>
					</section>

					<section className={styles.section}>
						<h2 className={styles.sectionTitle}>Beyond Code</h2>
						<p className={styles.paragraph}>
							In my free time, you can find me playing soccer,
							lounging on my couch with a game controller, or
							scarfing down more food than seems humanly possible.
							Whether I play soccer or any other sport, I am good
							enough not to become arrogant, but not too good to
							always be chosen whenever we select teams.
						</p>
						<p className={styles.paragraph}>
							I am always eager to explore something new, which
							includes exploring new dishes, the spicier the better.
							When the energy for being social is depleted, I either
							binge watch animes or enjoy some Netflix thriller and
							chill. Bottom line, I treat my leisure as I do my
							deployments, meaning that if you have any trouble with
							your code, I will help you fix it; however, afterward,
							let&apos;s go grab some tacos!
						</p>
					</section>
				</div>
			</div>
		</div>
	);
};

export async function getStaticProps() {
	return {
		props: { title: "About" },
	};
}

export default AboutPage;
