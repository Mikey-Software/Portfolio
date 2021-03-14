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
    { name: "Technosoft Limited", src: "/img/agic-logo.svg", link: "" },
    { name: "Juici Beef Limited", src: "/img/agic-logo.svg", link: "" },
    { name: "Vocational Training Development Institute", src: "/img/agic-logo.svg", link: "" },
];

export default function ExperienceSection() {
    return (
        <Experience>
            <Wrapper>
                <CompaniesList initial="initial" animate="animate" variants={navLinksVariants}>
                    {COMPANIES_LIST.map(({ name, src, link }, index) => (
                        // <Company key={name} variants={linkVariants}>
                        //     <Link href={`/${link}`}>
                        //         <a>{name}</a>
                        //     </Link>
                        // </Company>
                        <CompanyContainer key={name} variants={linkVariants}>
                            <Company>
                                <Link href={`/${link}`}>
                                    <a>{name}</a>
                                </Link>
                            </Company>
                            {index + 1 !== COMPANIES_LIST.length && <CompanyDivider />}
                        </CompanyContainer>
                    ))}
                </CompaniesList>
                <ExperienceContainer>
                    <Headline size={2}>With over 3+ years of software development experience.</Headline>
                    <Information>
                        {/* <Info>Frontend</Info>
                        <Info>Backend &amp; API's</Info>
                        <Info>Mobile</Info> */}
                    </Information>
                </ExperienceContainer>
            </Wrapper>
        </Experience>
    );
}

const Experience = styled.div`
    background: black;
    color: white;
    @media only screen and (max-width: 576px) {
    }
`;

const CompaniesList = styled(motion.div)`
    display: flex;
    justify-content: center;
    padding: 2rem 0rem;
    /* border-top: 0.125rem solid black; */
    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
    /* background: blue; */
`;

const CompanyContainer = styled(motion.div)`
    display: flex;
    /* margin: 0 2rem; */
    /* background: darkgreen; */
    /* border: 1px solid salmon; */
`;

const Company = styled(motion.div)`
    display: flex;
    margin: 0 2rem;
    text-align: center;
    /* background: darkgreen; */
    /* border: 1px solid salmon; */
`;

const CompanyDivider = styled(motion.div)`
    height: 100%;
    min-width: 0.125rem;
    background: darkgray;
    transform: skew(-10deg);
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

const Information = styled(motion.ol)`
    flex: 2;
    /* display: flex; */
    padding-left: 2rem;
    align-items: center;
    @media only screen and (max-width: 768px) {
        padding: 0;
    }
`;

const Info = styled(motion.li)``;

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
