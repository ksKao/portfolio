"use client";
import Image from "next/image";
import style from "./Error.module.css";
import Link from "next/link";

export default function Error() {
	return (
		<div className={style.container}>
			<div>
				<Image
					src="https://firebasestorage.googleapis.com/v0/b/portfolio-f437b.firebasestorage.app/o/images%2Ferror.png?alt=media&token=f8125ebf-f4e7-447f-bf2d-3dff7568b1ab"
					alt="Error"
					width={400}
					height={400}
					className={style.img}
				/>
			</div>
			<div>
				<h1>Something went wrong. Please try again later.</h1>
				<p>
					Back to <Link href="/#home">Home</Link>
				</p>
			</div>
		</div>
	);
}
