import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled, { css } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import Wrapper from "@layouts/Wrapper";
import { Headline } from "../../styles/globals";
import Button from "@components/Button";

export default function ExperienceSection() {
	return (
		<Experience>
			<Wrapper>
				<CompaniesContainer>Companies Logos</CompaniesContainer>
			</Wrapper>
		</Experience>
	);
}

const Experience = styled.div`
	background: white;
	@media only screen and (max-width: 578px) {
	}
`;

const CompaniesContainer = styled.div`
	display: flex;
	padding: 2rem 0rem;
	@media only screen and (max-width: 768px) {
		flex-direction: column;
	}
`;
