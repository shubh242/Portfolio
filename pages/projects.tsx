import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import styles from "@/styles/ProjectsPage.module.css";

const ProjectsPage = () => (
  <div className={styles.layout}>
    <h1 className={styles.pageTitle}>Selected engineering work</h1>
    <p className={styles.pageSubtitle}>Backend reliability, tool-driven AI, and model evaluation. Explore the implementation details, read the source, or ask me about a project.</p>
    <div className={styles.container}>{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
  </div>
);
export async function getStaticProps() { return { props: { title: "Projects" } }; }
export default ProjectsPage;
