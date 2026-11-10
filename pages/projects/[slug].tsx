import type { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { VscArrowLeft, VscGithubAlt } from "react-icons/vsc";
import { caseStudies, type CaseStudy } from "@/data/case-studies";
import styles from "@/styles/CaseStudy.module.css";

export default function ProjectOverview({ study }: { study: CaseStudy }) {
  return (
    <article className={styles.article}>
      <Link href="/projects" className={styles.back}><VscArrowLeft aria-hidden="true" /> All projects</Link>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Technical overview</p>
        <h1>{study.title}</h1>
        <p className={styles.summary}>{study.summary}</p>
        <p className={styles.focus}>{study.focus}</p>
        <a href={study.repository} target="_blank" rel="noopener noreferrer" className={styles.source}><VscGithubAlt aria-hidden="true" /> Explore the source code<span className="sr-only"> (opens in a new tab)</span></a>
      </header>
      {study.sections.map((section) => <section className={styles.section} key={section.title}><h2>{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}
      <footer className={styles.footer}><h2>Want to discuss the implementation?</h2><p>Ask me about the design, tradeoffs, or how this relates to your team’s work.</p><a className={styles.back} href={`mailto:shubhsanghvi242@gmail.com?subject=${encodeURIComponent(study.title)}`}>Email Shubh</a></footer>
    </article>
  );
}
export const getStaticPaths: GetStaticPaths = async () => ({ paths: caseStudies.map(({ slug }) => ({ params: { slug } })), fallback: false });
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const study = caseStudies.find((entry) => entry.slug === params?.slug);
  if (!study) return { notFound: true };
  return { props: { study, title: study.title, description: study.summary } };
};
