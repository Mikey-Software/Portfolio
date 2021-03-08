import Head from "next/head";
import DefaultLayout from "@layouts/DefaultLayout";
import Wrapper from "@layouts/Wrapper";
import styled, { css } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

// Page Components
import HeroSection from "@components/HomePage/HeroSection";
import ExperienceSection from "@components/HomePage/ExperienceSection";

export default function Home() {
	return (
		<>
			<Head>
				<title>Mikey Software</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<HeroSection />
			<ExperienceSection />
		</>
	);
}

Home.Layout = DefaultLayout;
