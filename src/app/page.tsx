import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Page() {
	return (
		<>
			<Navbar />
			<Home />
			<About />
			<Skills />
			<Projects />
			<section id="contact">Contact</section>
		</>
	);
}
