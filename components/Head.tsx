import Head from "next/head";

interface CustomHeadProps {
	title: string;
}

const CustomHead = ({ title }: CustomHeadProps) => {
	return (
		<Head>
			<title>{title}</title>
			<meta
				name="description"
				content="Software Engineer focused on scalable backend systems and applied AI. Experience at Amazon and Deloitte building document-automation pipelines, low-latency services, and LLM tooling, agents, RAG pipelines, and distributed job processing on AWS, Kotlin, Python, and FastAPI."
			/>
			<meta
				name="keywords"
				content="shubh sanghvi, shubh, sanghvi, software engineer, backend engineer, applied ai, developer portfolio, shubh sanghvi portfolio, portfolio, amazon, deloitte, sjsu"
			/>
			<meta property="og:title" content="Shubh Sanghvi's Portfolio" />
			<meta
				property="og:description"
				content="Software engineer building scalable backend systems and applied-AI tooling, agents, retrieval pipelines, and distributed job processing."
			/>
			<meta property="og:image" content="/screenshot/preview_image.png" />
		</Head>
	);
};

export default CustomHead;

CustomHead.defaultProps = {
	title: "Shubh Sanghvi",
};
