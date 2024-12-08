import { getContentFromFirebase } from "@/lib/utils";
import style from "./Error.module.css";
import Image from "next/image";
import Link from "next/link";

export default async function NotFound() {
	const content = await getContentFromFirebase();

	return (
		<div className={style.container}>
			<div>
				<Image
					src={content.notFoundThumbnailUrl}
					alt="Error"
					width={400}
					height={400}
					className={style.img}
				/>
			</div>
			<div>
				<h1>Not Found</h1>
				<p>
					Back to <Link href="/#home">Home</Link>
				</p>
			</div>
		</div>
	);
}
