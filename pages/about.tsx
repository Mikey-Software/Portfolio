import Head from "next/head";
import Link from "next/link";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Mikey Software</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<h1>About</h1>
			<Link href="/">
				<a>Back to home</a>
			</Link>
		</div>
	);
}
