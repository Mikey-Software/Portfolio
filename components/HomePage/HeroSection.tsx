import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled, { css } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import Wrapper from "@layouts/Wrapper";
import { Headline } from "../../styles/globals";
import Button from "@components/Button";
import HoverText from "@components/HoverText";

import BrowserCarousel from "@components/BrowserCarousel";
import CodeEditor from "@components/CodeEditor";

export default function HeroSection() {
    return (
        <Hero>
            <Wrapper>
                <HeroContainer>
                    <HeroHeadline>
                        <HeroGreeting>
                            <HoverText hoverText="What's up?">Wah gwaan?</HoverText> I'm Mikey (Software)
                        </HeroGreeting>
                        <Headline>Fullstack developer building software nobody asked for!</Headline>
                        <HeroCTA>
                            <Link href="/work">
                                <a>
                                    <Button>View Portfolio</Button>
                                </a>
                            </Link>
                            <Link href="/projects">
                                <a>
                                    <Button>Things I Made ↗</Button>
                                </a>
                            </Link>
                        </HeroCTA>
                    </HeroHeadline>
                    <HeroImage>
                        <CodeEditor />
                    </HeroImage>
                </HeroContainer>
            </Wrapper>
        </Hero>
    );
}

const Hero = styled.div`
    overflow: hidden;
    @media only screen and (max-width: 768px) {
        /* height: calc(100vh - 3.875rem); // Height of Navigation Bar */
    }
`;

const HeroContainer = styled.div`
    display: flex;
    padding: 2rem 0rem;
    /* background: red; */
    @media only screen and (max-width: 1024px) {
        flex-direction: column;
    }
    @media only screen and (max-width: 768px) {
        padding: 2rem 0rem;
    }
`;

const HeroGreeting = styled.p`
    /* flex: 1; */
    font-size: 1.5rem;
    margin: 2rem 0;
    /* display: flex;
    align-items: center;
    div {
        margin-left: 0.5rem;
    } */
    /* margin: 4rem 0; */
`;

const HeroHeadline = styled.div`
    flex: 3;
    /* padding-bottom: 4rem; */
    /* margin: 4rem 0; */
`;

const HeroImage = styled.div`
    flex: 2;
    margin-bottom: 2rem;
    position: relative;
    margin-left: 2rem;

    @media only screen and (max-width: 1280px) {
        display: grid;
        place-items: center;
    }

    @media only screen and (max-width: 768px) {
        margin: 0;
    }
    /* display: grid; */
    /* place-items: center; */
    /* background: red; */
`;

const HeroCTA = styled.div`
    /* background: lightsteelblue; */
    margin: 2.5rem 0;
    button {
        margin-right: 1.5rem;
    }
`;
