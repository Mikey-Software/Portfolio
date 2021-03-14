import styled, { css } from "styled-components";
import { motion } from "framer-motion";

// Typography

export const Headline = ({ size = 1, children }) => <HeadlineContainer size={size}>{children}</HeadlineContainer>;

const HeadlineContainer = styled.h1`
    margin: 0.75rem 0;
    font-size: 3.75rem;
    font-weight: 900;
    line-height: 1.125;

    @media only screen and (max-width: 1024px) {
        font-size: 3.25rem;
    }

    @media only screen and (max-width: 768px) {
        font-size: 3rem;
    }

    @media only screen and (max-width: 576px) {
        font-size: 2.5rem;
    }

    ${({ size }) =>
        size === 2 &&
        css`
            font-size: 2.5rem;

            @media only screen and (max-width: 1024px) {
                font-size: 2rem;
            }

            @media only screen and (max-width: 768px) {
                font-size: 1.5rem;
            }

            @media only screen and (max-width: 576px) {
                font-size: 1rem;
            }
        `}

    ${({ size }) =>
        size === 3 &&
        css`
            font-size: 2rem;

            @media only screen and (max-width: 1024px) {
                font-size: 1.5rem;
            }

            @media only screen and (max-width: 768px) {
                font-size: 1rem;
            }
        `}
`;

// Dividers
