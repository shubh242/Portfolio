import Link from 'next/link';
import { useRouter } from 'next/router';
import Tab from '@/components/Tab';
import styles from '@/styles/Tabsbar.module.css';

const primary = [{label:'Home', path:'/'}, {label:'Work', path:'/projects'}, {label:'Résumé', path:'/resume'}, {label:'Contact', path:'/contact'}];
const secondary = [{label:'About', path:'/about'}, {label:'Publications', path:'/publications'}, {label:'GitHub', path:'/github'}, {label:'Theme', path:'/settings'}];
const Tabsbar = () => {
  const router = useRouter();
  return (
    <>
      <nav className={styles.tabs} aria-label="Portfolio">
        <Tab icon="/logos/react_icon.svg" filename="home.tsx" path="/" />
        <Tab icon="/logos/js_icon.svg" filename="projects.js" path="/projects" />
        <Tab icon="/logos/pdf_icon.svg" filename="resume.pdf" path="/resume" />
        <Tab icon="/logos/css_icon.svg" filename="contact.css" path="/contact" />
        <Tab icon="/logos/html_icon.svg" filename="about.html" path="/about" />
        <Tab icon="/logos/json_icon.svg" filename="publications.json" path="/publications" />
        <Tab icon="/logos/markdown_icon.svg" filename="github.md" path="/github" />
      </nav>
      <nav className={styles.mobile} aria-label="Portfolio mobile navigation">
        {primary.map(({label,path}) => <Link key={path} href={path} aria-current={(path === '/' ? router.pathname === '/' : router.pathname.startsWith(path)) ? 'page' : undefined}>{label}</Link>)}
        <details className={styles.more} key={router.asPath}><summary>More</summary><div>{secondary.map(({label,path}) => <Link href={path} key={path} aria-current={router.pathname === path ? 'page' : undefined}>{label}</Link>)}</div></details>
      </nav>
    </>
  );
};
export default Tabsbar;
