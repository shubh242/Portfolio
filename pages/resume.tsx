import styles from "@/styles/ResumePage.module.css";

const ResumePage = () => {
	const fileId = "1rLvIrSXoMLe-WP9SRb9r3F2INUgXLfeE";
	const resumeUrl = `https://drive.google.com/file/d/${fileId}/preview`;
	const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h1 className={styles.title}>Resume</h1>
				<div className={styles.buttonGroup}>
					<a
						href={downloadUrl}
						download="Shubh_Sanghvi_Resume.pdf"
						className={styles.downloadButton}
					>
						⬇ Download PDF
					</a>
					<a
						href={resumeUrl}
						target="_blank"
						rel="noopener noreferrer"
						className={styles.openButton}
					>
						Open in New Tab ↗
					</a>
				</div>
			</div>
			<div className={styles.iframeContainer}>
				<iframe
					src={resumeUrl}
					className={styles.iframe}
					title="Resume PDF Viewer"
				/>
			</div>
		</div>
	);
};

export async function getStaticProps() {
	return {
		props: { title: "Resume" },
	};
}

export default ResumePage;
