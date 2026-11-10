import Link from "next/link";
import { VscArrowRight, VscMail, VscFilePdf } from "react-icons/vsc";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import styles from "@/styles/HomePage.module.css";

export default function HomePage() {
  const featured = projects.filter((project) => ["agentforge", "llm-brittleness"].includes(project.slug));
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="intro-heading">
        <div>
          <p className={styles.eyebrow}>Shubh Sanghvi / Bay Area, California</p>
          <h1 id="intro-heading" className={styles.heading}>Backend systems.<br /><span>Applied AI.</span><br />Engineering that holds up.</h1>
          <p className={styles.bio}>I build reliable backend services, document-processing pipelines, and AI tools grounded in evidence—not just a compelling demo.</p>
          <p className={styles.credentials}>Software Engineering Intern at Amazon · Software Engineer at Deloitte · M.S. Computer Science, SJSU</p>
          <div className={styles.actions}>
            <Link className={styles.primary} href="/projects">Explore my work <VscArrowRight aria-hidden="true" /></Link>
            <Link className={styles.secondary} href="/resume"><VscFilePdf aria-hidden="true" /> Résumé</Link>
            <a className={styles.secondary} href="mailto:shubhsanghvi242@gmail.com"><VscMail aria-hidden="true" /> Email me</a>
          </div>
        </div>
        <aside className={styles.experience} aria-label="Selected experience">
          <p className={styles.fileLabel}>experience.md</p>
          <h2>From implementation<br />to impact.</h2>
          <div className={styles.result}>
            <strong>65% higher throughput</strong>
            <p>Amazon · Reworked sequential document-processing scripts into an asynchronous ECS pipeline using Kotlin coroutines.</p>
          </div>
          <div className={styles.result}>
            <strong>20,000+ users supported</strong>
            <p>Deloitte · Built CRM Analytics dashboards and data pipelines for client associates and managers.</p>
          </div>
          <Link className={styles.textLink} href="/about">Read the experience behind the numbers <VscArrowRight aria-hidden="true" /></Link>
        </aside>
      </section>
      <section className={styles.selected} aria-labelledby="work-heading">
        <div className={styles.sectionHeading}>
          <div><p className={styles.eyebrow}>Selected work</p><h2 id="work-heading">A closer look at how I build.</h2></div>
          <Link className={styles.textLink} href="/projects">All projects <VscArrowRight aria-hidden="true" /></Link>
        </div>
        <div className={styles.projectGrid}>{featured.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
      </section>
      <section className={styles.stack} aria-label="Core technologies">
        <h2>Core toolkit</h2>
        <p>Python · Kotlin · Java · TypeScript · AWS · PostgreSQL · Docker · FastAPI</p>
        <Link className={styles.textLink} href="/about">Experience & full skill set <VscArrowRight aria-hidden="true" /></Link>
      </section>
      <footer className={styles.footer}><p>Have a backend or applied-AI challenge in mind?</p><Link className={styles.textLink} href="/contact">Let’s talk <VscArrowRight aria-hidden="true" /></Link></footer>
    </div>
  );
}

export async function getStaticProps() {
  return { props: { title: "Backend & Applied AI Engineer" } };
}
