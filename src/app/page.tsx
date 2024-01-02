import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import About from "@/components/About";
import Skills from "@/components/Skills";

export default function Page() {
	return (
		<>
			<Navbar />
			<Home />
			<About />
			<Skills />
			<section id="projects">Projects</section>
			<section id="contact">Contact</section>
		</>
	);
}
