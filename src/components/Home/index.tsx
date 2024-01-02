"use client";
import Image from "next/image";
import style from "./Home.module.css";
import { motion } from "framer-motion";

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const item = {
	hidden: { opacity: 0, y: 10 },
	show: { opacity: 1, y: 0 },
};

export default function Home() {
	return (
		<motion.section
			variants={container}
			initial="hidden"
			animate="show"
			id="home"
			className={style.section}
		>
			{/* <motion.h1>Home</motion.h1> */}
			<motion.div variants={item} className={style.image}>
				<Image
					src="/web_analytics.png"
					alt="Web Analytics"
					width={400}
					height={400}
					style={{
						maxWidth: "100%",
						objectFit: "scale-down",
					}}
				/>
			</motion.div>
			<div className={style.hero}>
				<motion.h1 variants={item} className={style.h1}>
					I&apos;m Kao Kai Siang
				</motion.h1>
				<motion.h1 variants={item} className={`${style.h1} ${style.gradient}`}>
					Web and Game Developer
				</motion.h1>
				<motion.p variants={item} className={style.p}>
					Enthusiastic web and game developer merging technology and creativity for
					unforgettable digital experience
				</motion.p>
				<motion.button
					variants={item}
					className={`${style.projectsButton} ${style.btn}`}
					whileHover={{
						scale: 1.05,
					}}
				>
					Projects
				</motion.button>
				<motion.button
					variants={item}
					className={`${style.contactMeButton} ${style.btn}`}
					whileHover={{
						scale: 1.05,
					}}
				>
					Contact Me
				</motion.button>
			</div>
		</motion.section>
	);
}
