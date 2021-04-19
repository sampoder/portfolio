import Head from "next/head";
import { Navbar } from "@components/Navbar";
import dynamic from "next/dynamic";
import Intro from "@components/Intro";
import WhatIdo from "@components/WhatIdo";
import { useState } from "react";
import NavbarOverlay from "@components/NavbarOverlay";
import About from "@components/About";
import Skills from "@components/Skills";
import Projects from "@components/Projects";
import ContactForm from "@components/ContactForm";
import Footer from "@components/Footer";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
	ssr: false,
});

export default function Home() {
	const [open, setOpen] = useState(false);
	const [play, setPlay] = useState(false);

	return (
		<>
			<AnimatedCursor
				// @ts-ignore
				innerSize={10}
				outerSize={8}
				color="0, 216, 214"
				outerAlpha={0.2}
				innerScale={0.7}
				outerScale={5}
			/>
			<Head>
				<title>Faisal Sayed</title>
			</Head>
			<div className="main" id="home">
				<Navbar open={open} setOpen={setOpen} play={play} setPlay={setPlay} />
				{open ? (
					<NavbarOverlay setOpen={setOpen} setPlay={setPlay} />
				) : (
					<>
						<div>
							<Intro />
							<WhatIdo />
							<About />
							<Skills />
							<Projects />
							<div className="bg-wave2 bg-cover bg-no-repeat">
								<ContactForm />
								<Footer />
							</div>
						</div>
					</>
				)}
			</div>
		</>
	);
}
