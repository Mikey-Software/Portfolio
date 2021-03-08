import React, { useState } from "react";
import Link from "next/link";
import styled, { css } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import Wrapper from "@layouts/Wrapper";

const LINKS = ["work", "projects", "blog", "about"];

export default function index() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isMenuTriggered, setIsMenuTriggered] = useState(false);

	function toggleMenu() {
		setIsMenuOpen(!isMenuOpen);
	}

	function mobileLinkHandler(link) {}

	return (
		<NavigationContainer variants={navigationVariants}>
			<Wrapper>
				<NavigationBar isMenuOpen={isMenuOpen}>
					<NavStart>
						<Logo initial="initial" animate="animate" variants={logoVariants}>
							<Link href="/">
								<h2>Logo</h2>
							</Link>
						</Logo>
						<Divider />
						<NavLinks initial="initial" animate="animate" variants={navLinksVariants}>
							{LINKS.map((link) => (
								<NavLink key={link} variants={linkVariants}>
									<Link href={`/${link}`}>
										<a>{link}</a>
									</Link>
								</NavLink>
							))}
						</NavLinks>
						<NavTitle initial="initial" animate="animate" variants={titleVariants}>
							Mikey Software
						</NavTitle>
					</NavStart>
					<NavEnd>
						<MenuButton onClick={toggleMenu}>{isMenuOpen ? "Close" : "Menu"}</MenuButton>
					</NavEnd>
				</NavigationBar>

				<AnimatePresence>
					{isMenuOpen && (
						<MobileMenu initial="initial" animate="animate" exit="exit" variants={menuVariants}>
							<Links>
								{LINKS.map((link) => (
									<Link key={link} href={`/${link}`}>
										<a>{link}</a>
									</Link>
								))}
								<Link href={`/hire`}>
									<a>Hire</a>
								</Link>
							</Links>
							<Information>
								<SocialInformation>
									<Link href={`/about`}>
										<a>Twitter ↗</a>
									</Link>
									<Link href={`/about`}>
										<a>Instagram ↗</a>
									</Link>
									<Link href={`/about`}>
										<a>Youtube ↗</a>
									</Link>
									<Link href={`/about`}>
										<a>Github ↗</a>
									</Link>
									<Link href={`/about`}>
										<a>Medium ↗</a>
									</Link>
								</SocialInformation>
								<ContactInformation>
									<Link href={`/about`}>
										<a>mikey.software</a>
									</Link>
									<Link href={`/about`}>
										<a>(876) XXX-XXXX</a>
									</Link>
									<ContactCTA>Hire Me</ContactCTA>
								</ContactInformation>
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
	/* background: lightgrey; */
`;

const NavigationBar = styled(motion.div)`
	position: relative;
	display: flex;
	padding: 2rem 0;
	align-items: center;
	@media only screen and (max-width: 578px) {
		padding: 1rem 0;
	}

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
`;

const Logo = styled(motion.div)`
	cursor: pointer;
`;

const Divider = styled.div`
	margin: 0 1rem;
	width: 0.125rem;
	height: 1.5rem;
	background: grey;
`;

const NavLinks = styled(motion.div)`
	flex: 1;
	display: flex;
	align-items: center;
	/* background: lightgrey; */
	a {
		margin-left: 2rem;
		text-transform: capitalize;
	}
	@media only screen and (max-width: 578px) {
		display: none;
	}
`;

const NavTitle = styled(motion.div)`
	display: none;
	@media only screen and (max-width: 578px) {
		display: unset;
	}
`;

const NavLink = styled(motion.div)``;

// End
const NavEnd = styled(motion.div)`
	display: none;
	/* @media only screen and (max-width: 578px) {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	} */
`;

const MenuButton = styled(motion.button)`
	border: none;
`;

const MobileMenuTrigger = styled(motion.div)`
	display: none;
	position: fixed;
	left: calc(50% - 4rem);
	bottom: 0;
	width: 8rem;
	height: 2rem;
	background: red;
	cursor: pointer;

	@media only screen and (max-width: 578px) {
		display: grid;
		place-items: center;
	}
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
	padding-top: 5rem;
	font-size: 3rem;
	font-weight: 500;
	text-transform: capitalize;
	background: grey;

	a {
		margin: 0.25rem 0;
	}
`;

const Information = styled.div`
	flex-shrink: 1;
	display: flex;
	padding: 1rem 1rem;
	background: lightgrey;
	a {
		margin: 0.25rem 0;
	}
`;

const SocialInformation = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
`;

const ContactInformation = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
`;

const ContactCTA = styled.button`
	flex: 1;
	margin: 1rem 0;
`;

// Animations
const navigationVariants = {
	initial: { y: -64 },
	animate: { y: 0, transition: { duration: 0.5 } },
	// exit: { opacity: 0, y: -10 },
};

const menuVariants = {
	initial: { opacity: 0, scale: 0.95 },
	animate: { opacity: 1, scale: 1 },
	exit: { opacity: 0, scale: 0.95 },
};

const logoVariants = {
	initial: { opacity: 0, x: 16 },
	animate: { opacity: 1, x: 0, transition: { duration: 0.25 } },
};

const titleVariants = {
	initial: { opacity: 0, x: -16 },
	animate: { opacity: 1, x: 0, transition: { duration: 0.25 } },
};

const navLinksVariants = {
	initial: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	animate: {
		transition: { staggerChildren: 0.05, staggerDirection: 1 },
	},
};

const linkVariants = {
	initial: {
		y: -32,
		opacity: 0,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.6,
			y: { stiffness: 1000 },
		},
	},
};
