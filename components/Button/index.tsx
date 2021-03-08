import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export default function index({ children }) {
	return <ButtonContainer type="button">{children}</ButtonContainer>;
}

const ButtonContainer = styled.button`
	border: none;
	cursor: pointer;
	font-weight: 500;
	font-size: 1rem;
	padding: 0.75rem 1.25rem;
	font-family: "Grandis Extended";
`;
