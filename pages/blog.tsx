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
				<h1>Blog</h1>
				<Link href="/">
					<a>Back to home</a>
				</Link>
				<br />
				<br />
				<p>
					Share issues and solutions to my past experiences. My thoughts on certain new technologies. My preferences for stack or technologies in a
					project.
				</p>
			</Wrapper>
		</div>
	);
}

About.Layout = DefaultLayout;
