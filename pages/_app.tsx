import { useEffect } from "react";
import type { AppProps } from "next/app";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import Layout from "@/components/Layout";
import Head from "@/components/Head";

import "@/styles/globals.css";
import "@/styles/themes.css";

function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		const theme = localStorage.getItem("theme");
		if (theme) {
			document.documentElement.setAttribute("data-theme", theme);
		}
	}, []);

	return (
		<Layout>
			<Head title={`Shubh Sanghvi | ${pageProps.title}`} />
			<Component {...pageProps} />
			<SpeedInsights />
			<Analytics />
		</Layout>
	);
}

export default MyApp;
