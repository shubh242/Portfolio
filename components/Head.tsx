import Head from "next/head";
import { useRouter } from "next/router";
const site = "https://shubhsanghvi.vercel.app";
const descriptions: Record<string, string> = {
  "/": "Shubh Sanghvi builds reliable backend systems and applied-AI tools. Explore experience at Amazon and Deloitte, engineering projects, and technical write-ups.",
  "/projects": "Explore Shubh Sanghvi's work in incident-triage agents, LLM evaluation, distributed queues, and concurrency control, with source code and technical overviews.",
  "/about": "Shubh Sanghvi's engineering experience at Amazon and Deloitte, computer science education at SJSU, and backend and applied-AI skills.",
  "/contact": "Contact Shubh Sanghvi to discuss backend engineering roles, applied-AI projects, and technical collaborations.",
  "/resume": "View and download Shubh Sanghvi's résumé: backend engineering, applied AI, and experience at Amazon and Deloitte.",
  "/publications": "Peer-reviewed research co-authored by Shubh Sanghvi on machine learning for stock prediction and object detection for visually impaired users.",
  "/github": "Explore Shubh Sanghvi's GitHub repositories and open-source engineering activity.",
};
export default function CustomHead({ title = "Shubh Sanghvi", description }: { title?: string; description?: string }) {
  const router = useRouter();
  const path = router.asPath.split(/[?#]/)[0];
  const canonical = `${site}${path === '/' ? '' : path}`;
  const summary = description || descriptions[router.pathname] || descriptions['/'];
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={summary} />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Shubh Sanghvi" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={summary} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={`${site}/screenshot/preview_image.png`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={summary} />
      <meta name="twitter:image" content={`${site}/screenshot/preview_image.png`} />
    </Head>
  );
}
