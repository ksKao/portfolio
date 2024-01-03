"use client";
import style from "./About.module.css";
import { motion, useAnimation, useInView } from "framer-motion";
import { section, item } from "@/lib/variants";
import { useEffect, useRef } from "react";
import { IoLocationSharp, IoCallSharp, IoMail } from "react-icons/io5";
import Image from "next/image";

export default function About() {
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
			ref={ref}
			id="about"
			variants={section}
			initial="hidden"
			animate={animation}
			className={style.section}
		>
			<motion.h1 variants={item} className={style.h1}>
				About Me
			</motion.h1>
			<div className={style.content}>
				<motion.div variants={item} className={style.image}>
					<Image
						src="/web_development.png"
						alt="Web Development"
						width={400}
						height={400}
						style={{
							maxWidth: "100%",
							height: "fit-content",
							objectFit: "scale-down",
						}}
					/>
				</motion.div>
				<div className={style.rightContent}>
					<motion.p variants={item} className={style.p}>
						I&apos;m a recent graduate from Swinburne University of Technology, driven
						by a passion for crafting exceptional web and game experiences. With
						hands-on involvement in diverse web and game projects, I&apos;ve cultivated
						a robust skill set and valuable experience, poised to contribute to the
						creation of outstanding web applications and games.
					</motion.p>
					<motion.p variants={item} className={style.p}>
						<IoLocationSharp className={style.icon} />
						Petaling Jaya, Selangor, Malaysia
					</motion.p>
					<motion.p variants={item} className={style.p}>
						<IoCallSharp className={style.icon} />
						+6011-56471351
					</motion.p>
					<motion.p variants={item} className={style.p}>
						<IoMail className={style.icon} />
						work@ks-kao.com
					</motion.p>
				</div>
			</div>
		</motion.section>
	);
}
