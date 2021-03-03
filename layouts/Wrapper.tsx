import React from "react";
import styled from "styled-components";

export default function Wrapper({ children }) {
	return <WrapperContainer>{children}</WrapperContainer>;
}

const WrapperContainer = styled.div`
	margin: 0 auto;
	max-width: 90rem;
	padding: 0 1rem;
`;
