import Head from "next/head";
import Link from "next/link";
import DefaultLayout from "@layouts/DefaultLayout";
import Wrapper from "@layouts/Wrapper";

export default function About() {
	return (
		<div>
			<Head>
				<title>Mikey Software</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Wrapper>
				<h1>Projects</h1>
				<Link href="/">
					<a>Back to home</a>
				</Link>
				<br />
				<br />
				<p>Community and open source projects. To show empathy, resolve and world class libraries for the greater good.</p>
				<p>Idea 1: Fisherman (React Hooks for everyday projects/solutions).</p>
				<p>Idea 2: Velvet (React Component Library based on framer motion and styled components).</p>
				<p>Idea 3: No clue whatsoever</p>
			</Wrapper>
		</div>
	);
}

About.Layout = DefaultLayout;
