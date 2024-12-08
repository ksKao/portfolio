"use client";
import type { Content } from "@/lib/type";
import { item, section } from "@/lib/variants";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import style from "./Projects.module.css";

export default function Projects(content: Content) {
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
			id="projects"
			variants={section}
			initial="hidden"
			animate={animation}
			className={style.section}
		>
			<motion.h1 variants={item} className={style.h1}>
				Projects
			</motion.h1>
			<div className={style.content}>
				{content.projects.map((p) => (
					<ProjectCard key={p.name} {...p} />
				))}
			</div>
		</motion.section>
	);
}

function ProjectCard(project: Content["projects"][number]) {
	return (
		<motion.div className={style.card} variants={item}>
			<div className={style.imageWrapper}>
				<Image
					src={project.thumbnailUrl}
					alt={project.name}
					width={340}
					height={290}
					className={style.image}
					unoptimized
				/>
				<div className={style.overlay}>
					<div
						style={{
							width: "60%",
							position: "relative",
						}}
					>
						<Image
							src={project.logoUrl}
							alt={`${project.name} Logo`}
							width={340}
							height={290}
							style={{
								width: "100%",
								height: "auto",
							}}
						/>
					</div>
				</div>
			</div>
			<div className={style.cardDetail}>
				<h3>{project.name}</h3>
				<ul className={style.tags}>
					{project.technologies.map((s) => (
						<li key={s}>{s}</li>
					))}
				</ul>
				<p>{project.description}</p>
				<div className={style.linkContainer}>
					<Link href={project.projectUrl} rel="noopener noreferrer" target="_blank">
						<FaLink />
					</Link>
					<Link href={project.githubUrl} rel="noopener noreferrer" target="_blank">
						<FaGithub />
					</Link>
				</div>
			</div>
		</motion.div>
	);
}
