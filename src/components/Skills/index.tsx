"use client";
import style from "./Skills.module.css";
import { motion, useAnimation, useInView } from "framer-motion";
import { item, section } from "@/lib/variants";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function About() {
	const ref = useRef<HTMLElement>(null);
	const isInView = useInView(ref, { once: false });
	const animation = useAnimation();

	const icons = [
		"html",
		"css",
		"javascript",
		"typescript",
		"react",
		"nextjs",
		"svelte",
		"tailwind",
		"node_js",
		"git",
		"github",
		"unity",
		"c_sharp",
	];

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
			id="skills"
			variants={section}
			initial="hidden"
			animate={animation}
			className={style.section}
		>
			<motion.h1 variants={item} className={style.h1}>
				Skills
			</motion.h1>
			{isInView && (
				<ul className={style.content}>
					{icons.map((icon, index) => (
						<motion.li
							key={icon}
							initial={{
								opacity: 0,
								y: 10,
							}}
							animate={{
								opacity: 1,
								y: 0,
							}}
							transition={{
								duration: 0.1,
								delay: index * 0.1,
							}}
							className={style.listItem}
						>
							<Image
								src={`/dev_icons/${icon}.svg`}
								alt={icon}
								width={40}
								height={40}
							/>
						</motion.li>
					))}
				</ul>
			)}
		</motion.section>
	);
}
