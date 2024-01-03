import style from "./Error.module.css";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
	return (
		<div className={style.container}>
			<div>
				<Image
					src={"/not_found.png"}
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
