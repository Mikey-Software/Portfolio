import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";
import Wrapper from "@layouts/Wrapper";
import Button from "@components/Button";
import Logo from "@components/Logo";

const LINKS = ["work", "projects", "blog", "about"];

export default function index() {
    return (
        <NavigationContainer variants={navigationVariants}>
            <Wrapper>
                <NavigationBar>
                    <NavStart>
                        <LogoContainer initial="initial" animate="animate" variants={logoVariants}>
                            <Link href="/">
                                <a>
                                    <Logo />
                                </a>
                            </Link>
                        </LogoContainer>
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
                        <Button>Let's Link</Button>
                    </NavEnd>
                </NavigationBar>
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
    @media only screen and (max-width: 576px) {
        padding: 1.25rem 0;
    }
`;

// Start
const NavStart = styled(motion.div)`
    flex: 1;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

const LogoContainer = styled(motion.div)`
    cursor: pointer;
    svg {
        height: 2.5rem;
        width: auto;
    }
`;

const Divider = styled.div`
    margin: 0 2rem;
    min-width: 0.125rem;
    height: 1.5rem;
    background: grey;

    @media only screen and (max-width: 768px) {
        margin: 0 1.25rem;
    }
`;

const NavLinks = styled(motion.div)`
    flex: 1;
    display: flex;
    align-items: center;
    a {
        margin-right: 2.5rem;
        text-transform: capitalize;
    }
    @media only screen and (max-width: 768px) {
        display: none;
    }
`;

const NavTitle = styled(motion.div)`
    display: none;
    /* white-space: nowrap; */
    @media only screen and (max-width: 768px) {
        display: unset;
    }

    @media only screen and (max-width: 576px) {
        font-size: 1rem;
    }
`;

const NavLink = styled(motion.div)``;

// End
const NavEnd = styled(motion.div)``;

// Animations
const navigationVariants = {
    initial: { y: -64 },
    animate: { y: 0, transition: { duration: 0.5 } },
    // exit: { opacity: 0, y: -10 },
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
