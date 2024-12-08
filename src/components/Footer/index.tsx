import type { Content } from "@/lib/type";
import Link from "next/link";
import { IoDocument, IoLogoGithub, IoLogoLinkedin, IoMail } from "react-icons/io5";
import style from "./Footer.module.css";

export default function Footer(content: Content) {
	return (
		<footer className={style.footer}>
			<div className={style.content}>
				<div className={style.contentLeft}>
					<h4>Kao Kai Siang</h4>
					<p>{content.footer}</p>
					<div className={style.iconsWrapper}>
						<Link href={`mailto:${content.email}`}>
							<IoMail />
						</Link>
						<Link href={content.resumeUrl} target="_blank">
							<IoDocument />
						</Link>
						<Link href={content.githubUrl} target="_blank">
							<IoLogoGithub />
						</Link>
						<Link href={content.linkedInUrl} target="_blank">
							<IoLogoLinkedin />
						</Link>
					</div>
				</div>
				<div className={style.contentRight}>
					<ul>
						<li>
							<Link href="#home">Home</Link>
						</li>
						<li>
							<Link href="#about">About</Link>
						</li>
						<li>
							<Link href="#skills">Skills</Link>
						</li>
						<li>
							<Link href="#projects">Projects</Link>
						</li>
						<li>
							<Link href="#contact">Contact</Link>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}
