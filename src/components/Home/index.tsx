"use client";
import Image from "next/image";
import style from "./Home.module.css";
import { motion, useAnimation, useInView } from "framer-motion";
import { section, item } from "@/lib/variants";
import { useRef, useEffect } from "react";

export default function Home() {
	const ref = useRef<HTMLElement>(null);
	const isInView = useInView(ref, { once: false });
	const animation = useAnimation();

	useEffect(() => {
		if (isInView) {
			animation.start("show");
		} else {
			animation.start("hidden");
		}
	}, [animation, isInView]);

	return (
		<motion.section
			variants={section}
			initial="hidden"
			animate={animation}
			id="home"
			className={style.section}
			ref={ref}
		>
			<motion.div variants={item} className={style.image}>
				<Image
					src="/images/web_analytics.png"
					alt="Web Analytics"
					width={400}
					height={400}
					style={{
						maxWidth: "100%",
						height: "fit-content",
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
					Enthusiastic web and game developer merging technology and creativity for an
					unforgettable digital experience
				</motion.p>
				<div className={style.buttonWrapper}>
					<motion.a
						variants={item}
						className={`${style.projectsButton} ${style.btn}`}
						whileHover={{
							scale: 1.05,
						}}
						href="#projects"
					>
						Projects
					</motion.a>
					<motion.a
						variants={item}
						className={`${style.contactMeButton} ${style.btn}`}
						whileHover={{
							scale: 1.05,
						}}
						href="#contact"
					>
						Contact Me
					</motion.a>
				</div>
			</div>
		</motion.section>
	);
}
