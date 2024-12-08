"use client";
import type { Content } from "@/lib/type";
import { item, section } from "@/lib/variants";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { IoCallSharp, IoLocationSharp, IoMail } from "react-icons/io5";
import style from "./About.module.css";

export default function About(content: Content) {
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
						src={content.aboutThumbnailUrl}
						alt="About Thumbnail"
						width={400}
						height={400}
						style={{
							maxWidth: "100%",
							width: "auto",
							height: "fit-content",
							objectFit: "scale-down",
						}}
					/>
				</motion.div>
				<div className={style.rightContent}>
					<motion.p variants={item} className={style.p}>
						{content.about}
					</motion.p>
					<motion.p variants={item} className={style.p}>
						<IoLocationSharp className={style.icon} />
						{content.location}
					</motion.p>
					<motion.p variants={item} className={style.p}>
						<IoCallSharp className={style.icon} />
						{content.phone}
					</motion.p>
					<motion.p variants={item} className={style.p}>
						<IoMail className={style.icon} />
						{content.email}
					</motion.p>
				</div>
			</div>
		</motion.section>
	);
}
