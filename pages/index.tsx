import Head from "next/head";
import Link from "next/link";
import DefaultLayout from "@layouts/DefaultLayout";
import Wrapper from "@layouts/Wrapper";
export default function Home() {
	return (
		<>
			<Head>
				<title>Mikey Software</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Wrapper>
				<h1>Home Page</h1>
				<Link href="/about">
					<a>Back to home</a>
				</Link>
			</Wrapper>
		</>
	);
}

Home.Layout = DefaultLayout;
