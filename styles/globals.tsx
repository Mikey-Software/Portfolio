import styled from "styled-components";
import { motion } from "framer-motion";

// Typography
export const Headline = styled.h1`
	margin: 0.75rem 0;
	font-size: 4rem;
	font-weight: 900;
	line-height: 1.125;

	@media only screen and (max-width: 1024px) {
		font-size: 3.5rem;
	}

	@media only screen and (max-width: 768px) {
		font-size: 3rem;
	}

	@media only screen and (max-width: 578px) {
		font-size: 2.5rem;
	}
`;

// Dividers
