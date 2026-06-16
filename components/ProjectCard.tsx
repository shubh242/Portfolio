import Image from "next/image";
import { VscGithubAlt, VscLinkExternal } from "react-icons/vsc";

import { Project } from "@/types";

import styles from "@/styles/ProjectCard.module.css";

interface ProjectCardProps {
	project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
	const isGithub = project.link.includes("github.com");

	return (
		<a
			href={project.link}
			target="_blank"
			rel="noopener noreferrer"
			className={styles.card}
		>
			<div className={styles.content}>
				<div className={styles.logoWrapper}>
					<Image
						src={project.logo}
						alt={`${project.title} logo`}
						width={24}
						height={24}
						className={styles.logo}
					/>
				</div>
				<h3 className={styles.title}>{project.title}</h3>
				<p className={styles.description}>{project.description}</p>

				{project.tags && project.tags.length > 0 && (
					<div className={styles.tags}>
						{project.tags.map((tag) => (
							<span key={tag}>{tag}</span>
						))}
					</div>
				)}

				<span className={styles.link}>
					{isGithub ? (
						<>
							<VscGithubAlt /> View on GitHub
						</>
					) : (
						<>
							<VscLinkExternal /> Read paper
						</>
					)}
				</span>
			</div>
		</a>
	);
};

export default ProjectCard;
