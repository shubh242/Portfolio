import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Titlebar from '@/components/Titlebar';
import Sidebar from '@/components/Sidebar';
import Explorer from '@/components/Explorer';
import Bottombar from '@/components/Bottombar';
import Tabsbar from '@/components/Tabsbar';
import styles from '@/styles/Layout.module.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  useEffect(() => { document.getElementById('main-editor')?.scrollTo(0, 0); }, [router.asPath]);
  return (
    <div className={styles.shell}>
      <a href="#main-editor" className={styles.skip}>Skip to content</a>
      <Titlebar />
      <div className={styles.main}>
        <div className={styles.rail}><Sidebar /></div>
        <Explorer />
        <div className={styles.editor}>
          <Tabsbar />
          <main id="main-editor" tabIndex={-1} className={styles.content}>{children}</main>
        </div>
      </div>
      <div className={styles.status}><Bottombar /></div>
    </div>
  );
};
export default Layout;
