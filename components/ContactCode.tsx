import styles from "@/styles/ContactCode.module.css";

const contactItems = [
	{
		social: "email",
		link: "shubhsanghvi242@gmail.com",
		href: "mailto:shubhsanghvi242@gmail.com",
	},
	{
		social: "phone",
		link: "+1 (408) 549-5158",
		href: "tel:+14085495158",
	},
	{
		social: "github",
		link: "shubh242",
		href: "https://github.com/shubh242",
	},
	{
		social: "linkedin",
		link: "shubh-sanghvi",
		href: "https://linkedin.com/in/shubh-sanghvi-4972a71b9",
	},
];

const ContactCode = () => {
	return (
		<div className={styles.code}>
			<p className={styles.line}>
				<span className={styles.className}>.contact_info</span> &#123;
			</p>
			{contactItems.map((item, index) => (
				<p className={styles.line} key={index}>
					&nbsp;&nbsp;&nbsp;{item.social}:{" "}
					<a href={item.href} target="_blank" rel="noopener">
						{item.link}
					</a>
					;
				</p>
			))}
			<p className={styles.line}>&#125;</p>
		</div>
	);
};

export default ContactCode;
