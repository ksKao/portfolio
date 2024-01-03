"use client";
import style from "./Contact.module.css";
import { motion, useAnimation, useInView } from "framer-motion";
import { section, item } from "@/lib/variants";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";
import { CgSpinner } from "react-icons/cg";
import { useFormStatus } from "react-dom";

export default function Contact() {
	const ref = useRef<HTMLElement>(null);
	const formRef = useRef<HTMLFormElement>(null);
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
						src="/images/landline_phone.png"
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
				<form
					ref={formRef}
					className={style.rightContent}
					action={async (formData) => {
						const res = await sendEmail(formData);
						if (res.success) {
							toast.success("Email has been sent. I will get back to you shortly.");
							formRef.current?.reset();
						} else toast.error(res.error);
					}}
				>
					<motion.div variants={item} className={style.inputGroup}>
						<label htmlFor="name">Name</label>
						<input
							type="text"
							id="name"
							name="name"
							required
							placeholder="e.g. John Smith"
						/>
					</motion.div>
					<motion.div variants={item} className={style.inputGroup}>
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							name="email"
							required
							placeholder="e.g. example@email.com"
						/>
					</motion.div>
					<motion.div variants={item} className={style.inputGroup}>
						<label htmlFor="message">Message</label>
						<textarea
							id="message"
							name="message"
							required
							placeholder="Enter your message here..."
						/>
					</motion.div>
					<SubmitButton />
				</form>
			</div>
		</motion.section>
	);
}

export function SubmitButton() {
	const { pending } = useFormStatus();
	return (
		<motion.button
			variants={item}
			className={style.btn}
			whileHover={{
				scale: 1.05,
			}}
			aria-disabled={pending}
		>
			{pending ? <CgSpinner className={style.loadingIcon} /> : "Submit"}
		</motion.button>
	);
}
