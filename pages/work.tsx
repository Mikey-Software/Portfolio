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
				<h1>Work</h1>
				<Link href="/">
					<a>Back to home</a>
				</Link>
				<br />
				<br />
				<p>Best projects, categorized, best of best, showcase expertise in each area of development</p>
			</Wrapper>
		</div>
	);
}

About.Layout = DefaultLayout;
