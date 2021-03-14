import React from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export default function index({ children, variant = "" }) {
    return (
        <ButtonContainer type="button" variant={variant} whileHover={{ rotate: -3 }} whileTap={{ scale: 0.95 }}>
            {children}
        </ButtonContainer>
    );
}

const ButtonContainer = styled(motion.button)`
    border: none;
    cursor: pointer;
    font-weight: 500;
    font-size: 1.125rem;
    padding: 0.85rem 1.35rem;
    border-radius: 0.125rem;
    white-space: nowrap;
    font-family: "Grandis Extended";

    ${(props) =>
        props.variant === "line" &&
        css`
            background: none;
            text-decoration: underline;
        `}
`;
