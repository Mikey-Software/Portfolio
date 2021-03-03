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
				<h1>About</h1>
				<Link href="/">
					<a>Back to home</a>
				</Link>
			</Wrapper>
		</div>
	);
}

About.Layout = DefaultLayout;
