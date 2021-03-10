import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled, { css } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import Wrapper from "@layouts/Wrapper";
import { Headline } from "../../styles/globals";
import Button from "@components/Button";
import BrowserCarousel from "@components/BrowserCarousel";

export default function HeroSection() {
    return (
        <Hero>
            <Wrapper>
                <HeroContainer>
                    <HeroHeadline>
                        <p>Michael Cowan aka "Mikey Software"</p>
                        <Headline>Building digital products, services and solutions.</Headline>
                        <HeroCTA>
                            <Link href="/about">
                                <a>
                                    <Button>View Portfolio</Button>
                                </a>
                            </Link>
                            <Button>Live Projects</Button>
                        </HeroCTA>
                        <p>*Frontend, Backend, Mobile &amp; DevOps</p>
                    </HeroHeadline>
                    <HeroImage>{/* <BrowserCarousel /> */}</HeroImage>
                </HeroContainer>
            </Wrapper>
        </Hero>
    );
}

const Hero = styled.div`
    @media only screen and (max-width: 768px) {
        height: calc(100vh - 3.875rem); // Height of Navigation Bar
    }
`;

const HeroContainer = styled.div`
    display: flex;
    padding: 4rem 0rem;
    @media only screen and (max-width: 1024px) {
        flex-direction: column;
    }
    @media only screen and (max-width: 768px) {
        padding: 2rem 0rem;
    }
`;

const HeroHeadline = styled.div`
    flex: 1;
    /* margin: 4rem 0; */
`;

const HeroImage = styled.div`
    flex: 1;
    position: relative;
`;

const HeroCTA = styled.div`
    /* background: lightsteelblue; */
    margin: 1rem 0;

    button {
        margin-right: 1.5rem;
    }
`;
