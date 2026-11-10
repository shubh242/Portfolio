import ContactCode from "@/components/ContactCode";
import styles from "@/styles/ContactPage.module.css";
const ContactPage = () => (
  <div className={styles.layout}>
    <h1 className={styles.pageTitle}>Contact Me</h1>
    <p className={styles.pageSubtitle}>Let&apos;s talk about backend engineering, applied AI, or a potential collaboration. Email me with the role or project you have in mind and a little context.</p>
    <div className={styles.container}><div className={styles.contactContainer}><ContactCode /></div></div>
  </div>
);
export async function getStaticProps() { return { props: { title: "Contact" } }; }
export default ContactPage;
