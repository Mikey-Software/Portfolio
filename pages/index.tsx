import Head from "next/head";
import Link from "next/link";

export default function Home() {
	return (
		<div style={{ margin: 0, padding: 0 }}>
			<Head>
				<title>Mikey Software</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<h1>Home Page</h1>
			<Link href="/about">
				<a>Back to home</a>
			</Link>
		</div>
	);
}
