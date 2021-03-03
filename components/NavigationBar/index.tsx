import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";

import Wrapper from "@layouts/Wrapper";

export default function index() {
	return (
		<NavigationContainer initial="initial" animate="animate" exit="exit" transition="transition" variants={navigationVariants}>
			<Wrapper>
				<NavigationBar>
					<NavStart>
						<Logo>
							<h2>Logo</h2>
						</Logo>
						<NavLinks>
							<Link href="/about">
								<a>Work</a>
							</Link>
							<Link href="/">
								<a>Projects</a>
							</Link>
							<Link href="/">
								<a>Blog</a>
							</Link>
							<Link href="/">
								<a>About</a>
							</Link>
						</NavLinks>
					</NavStart>
					<NavEnd>a</NavEnd>
				</NavigationBar>
			</Wrapper>
		</NavigationContainer>
	);
}

// Styled Components
const NavigationContainer = styled(motion.div)`
	/* background-color: lightcoral; */
`;

const NavigationBar = styled(motion.div)`
	display: flex;
	padding: 1rem 0;
	align-items: center;
`;

// Start
const NavStart = styled(motion.div)`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;

const Logo = styled.div``;

const NavLinks = styled.div`
	display: flex;
	a {
		margin-left: 1rem;
	}
`;

// End
const NavEnd = styled(motion.div)`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

// Animations
const navigationVariants = {
	initial: { opacity: 0, y: -32 },
	animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	// exit: { opacity: 0, y: -10 },
};
