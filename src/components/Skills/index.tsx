"use client";
import { Content } from "@/lib/type";
import { item, section } from "@/lib/variants";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { Fragment, useEffect, useRef } from "react";
import { Tooltip } from "react-tooltip";
import style from "./Skills.module.css";

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
					{content.skills.map((skill, index) => (
						<Fragment key={skill.name}>
							<motion.li
								data-tooltip-id={skill.name}
								data-tooltip-content={skill.name}
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
									src={skill.imageUrl}
									alt={skill.name}
									width={40}
									height={40}
									unoptimized
								/>
							</motion.li>
							<Tooltip id={skill.name} />
						</Fragment>
					))}
				</ul>
			)}
		</motion.section>
	);
}
