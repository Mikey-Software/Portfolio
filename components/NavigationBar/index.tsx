import React, { useState } from "react";
import Link from "next/link";
import styled, { css } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

import Wrapper from "@layouts/Wrapper";

const LINKS = ["work", "projects", "blog", "about"];

export default function index() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	function toggleMenu() {
		setIsMenuOpen(!isMenuOpen);
	}

	return (
		<NavigationContainer initial="initial" animate="animate" exit="exit" transition="transition" variants={navigationVariants}>
			<Wrapper>
				<NavigationBar isMenuOpen={isMenuOpen}>
					<NavStart>
						<Logo>
							<Link href="/">
								<h2>Logo</h2>
							</Link>
						</Logo>
						<Divider />
						<NavLinks>
							{LINKS.map((link) => (
								<Link href={`/${link}`}>
									<a>{link}</a>
								</Link>
							))}
						</NavLinks>
					</NavStart>
					<NavEnd>
						<MenuButton onClick={toggleMenu}>{isMenuOpen ? "Close" : "Menu"}</MenuButton>
					</NavEnd>
				</NavigationBar>

				<AnimatePresence>
					{isMenuOpen && (
						<MobileMenu>
							<Links>
								{LINKS.map((link) => (
									<Link href={`/${link}`}>
										<a>{link}</a>
									</Link>
								))}
								<Link href={`/hire`}>
									<a>Hire Me</a>
								</Link>
							</Links>
							<Information>
								<SocialInformation>asdasdasd</SocialInformation>
								<ContactInformation>asdasdasd</ContactInformation>
							</Information>
						</MobileMenu>
					)}
				</AnimatePresence>
			</Wrapper>
		</NavigationContainer>
	);
}

// Styled Components
const NavigationContainer = styled(motion.div)`
	/* background-color: lightcoral; */
`;

const NavigationBar = styled(motion.div)`
	position: relative;
	display: flex;
	padding: 1rem 0;
	align-items: center;

	${({ isMenuOpen }) =>
		isMenuOpen &&
		css`
			z-index: 2;
		`}
`;

// Start
const NavStart = styled(motion.div)`
	flex: 1;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	background: lightpink;
`;

const Logo = styled.div``;

const Divider = styled.div`
	margin: 0 1rem;
	width: 0.125rem;
	height: 1.25rem;
	background: grey;
`;

const NavLinks = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	background: lightgrey;
	a {
		margin-left: 1rem;
		text-transform: capitalize;
	}
	@media only screen and (max-width: 578px) {
		display: none;
	}
`;

// End
const NavEnd = styled(motion.div)`
	display: none;
	@media only screen and (max-width: 578px) {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}
`;

const MenuButton = styled(motion.button)`
	border: none;
`;

// Mobile Menu
const MobileMenu = styled(motion.div)`
	left: 0;
	top: 0;
	position: fixed;
	height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
	z-index: 1;
	background: lightsalmon;
`;
const Links = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 2rem 1rem;
	padding-top: 4rem;
	font-size: 3rem;
	text-transform: capitalize;
	background: grey;
`;

const Information = styled.div`
	flex-shrink: 1;
	display: flex;
	padding: 1rem 1rem;
	background: lightgrey;
`;

const SocialInformation = styled.div`
	flex: 1;
`;

const ContactInformation = styled.div`
	flex: 1;
`;

// Animations
const navigationVariants = {
	initial: { opacity: 0, y: -32 },
	animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	// exit: { opacity: 0, y: -10 },
};
