import React from "react";
import styled from "styled-components";

export default function Wrapper({ children }) {
    return <WrapperContainer>{children}</WrapperContainer>;
}

const WrapperContainer = styled.div`
    margin: 0 auto;
    max-width: 90rem;
    padding: 0 2rem;
    @media only screen and (max-width: 768px) {
        padding: 0 1.5rem;
    }
`;
