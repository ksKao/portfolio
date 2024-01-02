import Navbar from "@/components/Navbar";
import Home from "@/components/Home";

export default function Page() {
	return (
		<>
			<Navbar />
			<Home />
			<section id="about">About</section>
			<section id="skills">Skills</section>
			<section id="projects">Projects</section>
			<section id="contact">Contact</section>
		</>
	);
}
