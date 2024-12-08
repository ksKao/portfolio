import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getContentFromFirebase } from "@/lib/utils";

export default async function Page() {
	const content = await getContentFromFirebase();

	return (
		<>
			<Navbar />
			<Home {...content} />
			<About {...content} />
			<Skills {...content} />
			<Projects {...content} />
			<Contact {...content} />
			<Footer {...content} />
		</>
	);
}
