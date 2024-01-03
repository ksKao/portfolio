"use client";
import style from "./Projects.module.css";
import { motion, useAnimation, useInView } from "framer-motion";
import { item, section } from "@/lib/variants";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { FaLink, FaGithub } from "react-icons/fa";
import Link from "next/link";

const projects = [
	{
		name: "Costcut",
		image: "costcut",
		tags: ["Svelte", "Firebase", "Daisy UI"],
		description:
			"A budgeting application featuring intuitive visualizations to assist users in monitoring and managing their financial expenditures.",
		link: "https://costcut.vercel.app/",
		github: "https://github.com/ksKao/costcut",
	},
	{
		name: "Projectile",
		image: "projectile",
		tags: ["T3", "Shadcn", "Supabase"],
		description:
			"A student-centric project management app with robust features for seamless management of group assignments.",
		link: "https://projectile-rose.vercel.app/",
		github: "https://github.com/ksKao/projectile",
	},
	{
		name: "House Hunting",
		image: "house_hunting",
		tags: ["C#", "Unity"],
		description:
			"A whimsical and engaging first-person game where players hunt furniture in a fantasy world to decorate their houses.",
		link: "https://onehouseonefish.itch.io/house-hunting",
		github: "https://github.com/GhostEntity12/HouseHunting",
	},
];

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
				{projects.map((p) => (
					<ProjectCard key={p.name} {...p} />
				))}
			</div>
		</motion.section>
	);
}

function ProjectCard({ image, name, description, tags, github, link }: (typeof projects)[number]) {
	return (
		<motion.div className={style.card} variants={item}>
			<div className={style.imageWrapper}>
				<Image
					src={`/mockups/${image}.png`}
					alt={image}
					width={340}
					height={290}
					className={style.image}
					unoptimized
				/>
			</div>
			<div className={style.cardDetail}>
				<h3>{name}</h3>
				<ul className={style.tags}>
					{tags.map((t) => (
						<li key={t}>{t}</li>
					))}
				</ul>
				<p>{description}</p>
				<div className={style.linkContainer}>
					<Link href={link} rel="noopener noreferrer" target="_blank">
						<FaLink />
					</Link>
					<Link href={github} rel="noopener noreferrer" target="_blank">
						<FaGithub />
					</Link>
				</div>
			</div>
		</motion.div>
	);
}
