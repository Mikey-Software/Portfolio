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
        <>
            <MobileMenuTrigger
                activated={isMenuOpen}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                initial="initial"
                animate={isMenuOpen ? "open" : "animate"}
                whileTap="whileTap"
                variants={menuTriggerVariants}
            >
                Menu
            </MobileMenuTrigger>
        </>
    );
}

// Styled Components
const MobileMenuTrigger = styled(motion.div)`
    display: none;
    position: fixed;
    left: calc(50% - 4rem);
    bottom: 0;
    width: 8rem;
    height: 2rem;
    background: red;
    cursor: pointer;

    @media only screen and (max-width: 576px) {
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

const menuTriggerVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    open: {
        opacity: 1,
        scale: 1,
        width: "80%",
        height: "60%",
        left: "10%",
        bottom: "20%",
    },
    whileTap: { scale: 0.95 },
};
