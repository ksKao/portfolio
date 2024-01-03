import Link from "next/link";
import style from "./Footer.module.css";
import { IoMail, IoDocument, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

export default function Footer() {
	return (
		<footer className={style.footer}>
			<div className={style.content}>
				<div className={style.contentLeft}>
					<h4>Kao Kai Siang</h4>
					<p>
						I enjoy crafting visually stunning websites and games, staying attuned to
						the latest and greatest in technology.
					</p>
					<div className={style.iconsWrapper}>
						<Link href="mailto:work@ks-kao.com">
							<IoMail />
						</Link>
						<Link href="/resume.pdf" target="_blank">
							<IoDocument />
						</Link>
						<Link href="https://github.com/ksKao" target="_blank">
							<IoLogoGithub />
						</Link>
						<Link
							href="https://www.linkedin.com/in/kai-siang-kao-2615a4202/"
							target="_blank"
						>
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
