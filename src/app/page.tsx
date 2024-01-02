import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import About from "@/components/About";

export default function Page() {
	return (
		<>
			<Navbar />
			<Home />
			<About />
			<section id="skills">Skills</section>
			<section id="projects">Projects</section>
			<section id="contact">Contact</section>
		</>
	);
}
