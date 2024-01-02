"use client";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import style from "./Navbar.module.css";
import { useEffect, useState } from "react";

export default function Navbar() {
	const [scrollHeight, setScrollHeight] = useState(0);
	const [lastClicked, setLastClicked] = useState(new Date());
	const [sections, setSections] = useState<HTMLElement[]>([]);
	const [activeSection, setActiveSection] = useState("home");
	const { scrollY, scrollYProgress } = useScroll();

	const clickWait = 550; // cooldown for clicking on nav links in ms
	const navHeight = 30;
	const showFixed = scrollHeight <= navHeight * 2; // show fixed nav
	const sectionTitles = ["Home", "About", "Skills", "Projects", "Contact"];

	useMotionValueEvent(scrollY, "change", (latest) => {
		setScrollHeight(latest);
		if (new Date().getTime() - lastClicked.getTime() > clickWait) {
			const id = sections.sort(
				(a, b) => getVisibleHeightRatio(b) - getVisibleHeightRatio(a)
			)[0].id;
			setActiveSection(id);
		}
	});

	function getVisibleHeightRatio(element: HTMLElement) {
		// Get the dimensions and position of the section
		const elementRect = element.getBoundingClientRect();
		const elementTop = elementRect.top;
		const elementBottom = elementRect.bottom;

		// Get the dimensions of the viewport
		const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

		// Calculate the visible height ratio
		const visibleHeight = Math.max(
			0,
			Math.min(elementBottom, viewportHeight) - Math.max(elementTop, 0)
		);
		const heightRatio = visibleHeight / element.clientHeight;

		return heightRatio;
	}

	useEffect(() => {
		const sections = Array.from(document.querySelectorAll("section"));
		setSections(sections);
		const id = sections.sort((a, b) => getVisibleHeightRatio(b) - getVisibleHeightRatio(a))[0]
			.id;
		setActiveSection(id);
	}, []);

	return (
		<>
			<motion.div
				style={{
					scaleX: scrollYProgress,
				}}
				className={style.scrollProgress}
			/>
			<nav
				style={{
					height: navHeight,
				}}
				className={style.nav}
			>
				<div style={{ position: "relative" }}>
					<ul className={style.ul}>
						{sectionTitles.map((title) => (
							<Link
								key={title}
								href={`#${title.toLowerCase()}`}
								activeSection={activeSection}
								setActiveSection={setActiveSection}
								setLastClicked={setLastClicked}
							>
								{title}
							</Link>
						))}
					</ul>
					<AnimatePresence>
						{!showFixed && (
							<motion.div
								variants={{
									initial: {
										y: "calc(-50%+50px)",
										x: "-50%",
										opacity: 0,
									},
									animate: {
										y: "-50%",
										x: "-50%",
										opacity: 1,
									},
									exit: {
										y: "calc(-50%-50px)",
										opacity: 0,
									},
								}}
								initial="initial"
								animate="animate"
								exit="exit"
								className={style.navBackground}
							/>
						)}
					</AnimatePresence>
				</div>
			</nav>
		</>
	);
}

function Link({
	href,
	activeSection,
	setActiveSection,
	setLastClicked,
	children,
}: {
	href: string;
	activeSection: string;
	setActiveSection: React.Dispatch<React.SetStateAction<string>>;
	setLastClicked: React.Dispatch<React.SetStateAction<Date>>;
	children: React.ReactNode;
}) {
	const active = activeSection === href.replace("#", "");
	return (
		<li className={style.li}>
			<a
				href={href}
				onClick={async () => {
					setLastClicked(new Date());
					setActiveSection(href.replace("#", ""));
				}}
				style={{
					color: active ? "var(--primary)" : "white",
				}}
				className={style.a}
			>
				{children}
			</a>
			{active && (
				<motion.div
					className={style.linkBackground}
					layoutId="linkBackground"
					transition={{
						duration: 0.1,
					}}
				/>
			)}
		</li>
	);
}
