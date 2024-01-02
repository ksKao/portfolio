import { type Variants } from "framer-motion";

export const section: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			duration: 1,
		},
	},
};

export const item: Variants = {
	hidden: { opacity: 0, y: 10 },
	show: { opacity: 1, y: 0 },
};
