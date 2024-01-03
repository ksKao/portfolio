"use client";
import style from "./Contact.module.css";
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
			id="contact"
			variants={section}
			initial="hidden"
			animate={animation}
			className={style.section}
		>
			<motion.h1 variants={item} className={style.h1}>
				Contact
			</motion.h1>
			<div className={style.content}>
				<motion.div variants={item} className={style.image}>
					<Image
						src="/landline_phone.png"
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
				<form className={style.rightContent}>
					<motion.div variants={item} className={style.inputGroup}>
						<label>Name</label>
						<input type="text" placeholder="e.g. John Smith" />
					</motion.div>
					<motion.div variants={item} className={style.inputGroup}>
						<label>Email</label>
						<input type="email" placeholder="e.g. example@email.com" />
					</motion.div>
					<motion.div variants={item} className={style.inputGroup}>
						<label>Message</label>
						<textarea placeholder="Enter your message here..." />
					</motion.div>
					<motion.button
						variants={item}
						className={style.btn}
						whileHover={{
							scale: 1.05,
						}}
					>
						Submit
					</motion.button>
				</form>
			</div>
		</motion.section>
	);
}
