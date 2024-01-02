import Navbar from "@/components/Navbar";

export default function Home() {
	return (
		<>
			<Navbar />
			<section
				id="home"
				style={{
					marginTop: 100,
				}}
			>
				Home
			</section>
			<section id="about">About</section>
			<section id="skills">Skills</section>
			<section id="projects">Projects</section>
			<section id="contact">Contact</section>
		</>
	);
}
