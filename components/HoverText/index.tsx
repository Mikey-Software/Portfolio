import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export default function index({ children, hoverText = "", rotation = 4 }) {
    return (
        <TextContainer>
            <DisplayText initial={{ opacity: 1 }} animate={{ opacity: 0.25, textDecoration: "line-through", transition: { delay: 0.125 } }}>
                {children}
            </DisplayText>
            <HoverText initial={{ opacity: 0 }} animate={{ opacity: 1, y: -32, rotate: rotation, transition: { delay: 0.25 } }}>
                {hoverText}
            </HoverText>
        </TextContainer>
    );
}

const TextContainer = styled(motion.span)`
    position: relative;
    cursor: pointer;
    @media only screen and (max-width: 576px) {
        display: block;
    }
`;

const DisplayText = styled(motion.span)``;

const HoverText = styled(motion.span)`
    top: 0;
    display: flex;
    position: absolute;
    white-space: nowrap;
    pointer-events: none;
`;
