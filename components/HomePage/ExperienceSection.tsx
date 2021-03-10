import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled, { css } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import Wrapper from "@layouts/Wrapper";
import { Headline } from "../../styles/globals";
import Button from "@components/Button";

const COMPANIES_LIST = [
    { name: "Smart Mobile Solutions", src: "/img/sms-logo.svg", link: "" },
    { name: "Advantage General Insurance Company", src: "/img/agic-logo.svg", link: "" },
    { name: "Outlance Software", src: "/img/agic-logo.svg", link: "" },
    { name: "Juici Beef Limited", src: "/img/agic-logo.svg", link: "" },
    { name: "Vocational Training Development Institute", src: "/img/agic-logo.svg", link: "" },
];

export default function ExperienceSection() {
    return (
        <Experience>
            <Wrapper>
                <CompaniesContainer initial="initial" animate="animate" variants={navLinksVariants}>
                    {COMPANIES_LIST.map(({ name, src, link }) => (
                        <Company key={name} variants={linkVariants}>
                            <Link href={`/${link}`}>
                                {/* <a>{name}</a> */}
                                <Image src={src} width={96} height={96} />
                            </Link>
                        </Company>
                    ))}
                </CompaniesContainer>
                <ExperienceContainer>
                    <Headline size={2}>With over 2+ years of software development experience.</Headline>
                    <Information>asd</Information>
                </ExperienceContainer>
            </Wrapper>
        </Experience>
    );
}

const Experience = styled.div`
    background: white;
    @media only screen and (max-width: 578px) {
    }
`;

const CompaniesContainer = styled(motion.div)`
    display: flex;
    padding: 2rem 0rem;
    /* border-top: 0.125rem solid black; */
    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

const Company = styled(motion.div)`
    display: flex;
    margin: 0 2rem;
`;

const ExperienceContainer = styled(motion.div)`
    display: flex;
    h1 {
        flex: 1;
    }
    /* padding: 2rem 0rem; */
    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

const Information = styled(motion.div)`
    flex: 2;
    display: flex;
    padding-left: 2rem;
    align-items: center;
    @media only screen and (max-width: 768px) {
        padding: 0;
    }
`;

// Animation Specs
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
        x: 64,
        opacity: 0,
        transition: {
            x: { stiffness: 1000, velocity: -100 },
        },
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            x: { stiffness: 1000 },
        },
    },
};
