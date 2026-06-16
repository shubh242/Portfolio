import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/types";

import styles from "@/styles/ProjectsPage.module.css";

const publications: Project[] = [
	{
		title: "Analysis of Machine Learning Models for Stock Market Prediction",
		description:
			"ICIICS 2023 (IEEE) · Kalaburagi, India, A comparative study of machine-learning techniques for stock-market forecasting, from classical regression to deep learning, benchmarked across performance metrics on multi-company price data; LSTM emerged as the strongest predictor. Co-authored with L. Jethani, R. Patil, R. Singh, and T. Sarode.",
		logo: "/logos/tensorflow.svg",
		link: "https://ieeexplore.ieee.org/document/10421609",
		slug: "ml-stock-market-prediction",
	},
	{
		title: "Object Detection For Visually Impaired",
		description:
			"OCIT 2023 (IEEE) · Raipur, India, A deep-learning and CNN system with transfer learning that helps visually impaired users perceive their surroundings: a mobile/web app captures the scene, detects nearby objects, and narrates them through text-to-speech. Co-authored with R. Singh, L. Jethani, R. Patil, and N. Mandal.",
		logo: "/logos/pdf.svg",
		link: "https://ieeexplore.ieee.org/document/10431025",
		slug: "object-detection-visually-impaired",
	},
];

const PublicationsPage = () => {
	return (
		<div className={styles.layout}>
			<h1 className={styles.pageTitle}>Publications</h1>
			<p className={styles.pageSubtitle}>
				Peer-reviewed research I&apos;ve co-authored, published through
				IEEE. Each card links to the full paper on IEEE Xplore.
			</p>

			<div className={styles.container}>
				{publications.map((publication) => (
					<ProjectCard key={publication.slug} project={publication} />
				))}
			</div>
		</div>
	);
};

export async function getStaticProps() {
	return {
		props: { title: "Publications" },
	};
}

export default PublicationsPage;
