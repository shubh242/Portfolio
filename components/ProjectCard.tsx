import Image from "next/image";
import Link from "next/link";
import { VscArrowRight, VscGithubAlt, VscLinkExternal, VscMail } from "react-icons/vsc";
import { Project } from "@/types";
import styles from "@/styles/ProjectCard.module.css";

const ProjectCard = ({ project }: { project: Project }) => {
  const hasRepository = project.link.includes("github.com/") && project.link.replace(/\/$/, "").split("/").length > 4;
  const hasPaper = !project.link.includes("github.com");
  return (
    <article className={styles.card}>
      <div className={styles.heading}>
        <Image src={project.logo} alt="" width={32} height={32} className={styles.logo} />
        <h3 className={styles.title}>{project.title}</h3>
      </div>
      <p className={styles.description}>{project.description}</p>
      <div className={styles.actions}>
        {project.caseStudy && <Link href={project.caseStudy} className={styles.link}>Technical overview <VscArrowRight aria-hidden="true" /></Link>}
        {hasRepository ? <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}><VscGithubAlt aria-hidden="true" /> Source code<span className="sr-only"> for {project.title} (opens in a new tab)</span></a> : hasPaper ? <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}><VscLinkExternal aria-hidden="true" /> Read paper<span className="sr-only"> (opens in a new tab)</span></a> : <a href={`mailto:shubhsanghvi242@gmail.com?subject=${encodeURIComponent(`Tell me about ${project.title}`)}`} className={styles.link}><VscMail aria-hidden="true" /> Discuss this project</a>}
      </div>
      {!hasRepository && !hasPaper && <p className={styles.note}>Public source link not available.</p>}
      {!!project.tags?.length && <ul className={styles.tags} aria-label="Technologies">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>}
    </article>
  );
};
export default ProjectCard;
