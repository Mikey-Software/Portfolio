import React from "react";
import styled from "styled-components";
import Button from "@components/Button";

export default function index() {
	return (
		<BrowserCarousel>
			<Browser>
				<Toolbar>
					<TitleBar>asdasd</TitleBar>
					<AddressBar>https://example-project.com</AddressBar>
					<ActionBar>
						<ActionButton>_</ActionButton>
						<ActionButton>-></ActionButton>
						<ActionButton>X</ActionButton>
					</ActionBar>
				</Toolbar>
				<Window>asd</Window>
			</Browser>
			{/* <Arrows>
				<Arrow>-</Arrow>
				<Arrow>-</Arrow>
			</Arrows> */}
		</BrowserCarousel>
	);
}

const BrowserCarousel = styled.div`
	position: relative;
	height: 100%;
	display: flex;
	flex-direction: column;
	/* background: black; */
`;

const Browser = styled.div`
	flex: 1;
	width: 100%;
	/* height: 28rem; */
	display: flex;
	position: relative;
	flex-direction: column;
	/* padding-top: 56.25%; */
	border: 0.25rem solid black;
`;

const Toolbar = styled.div`
	flex-shrink: 1;
	display: flex;
	/* background: lightgray; */
	padding: 0.25rem 0.5rem;
`;

const TitleBar = styled.div`
	flex: 1;
	/* border: 2rem solid black; */
`;

const AddressBar = styled.div`
	flex: 2;
	display: flex;
	font-size: 0.75rem;
	align-items: center;
	justify-content: center;
	border-radius: 0.125rem;
	background: lightgray;
	/* border: 2rem solid black; */
`;

const ActionBar = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-end;
	/* border: 2rem solid black; */
`;

const ActionButton = styled.button`
    border: none;
    width: 1.5rem;
    height: 1.5rem;
    padding: 0.25rem;
    margin-left: 0.75rem;
	border-radius: 0.125rem;
	background: lightgray;
`;

const Window = styled.div`
	flex: 1;
	background: darkgray;
	/* border: 2rem solid black; */
`;

const Arrows = styled.div`
	padding: 1rem 0rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Arrow = styled.button`
    width: 2rem;
    height: 2rem;
    margin: 0rem 0.5rem;
    border-radius: 50%;
    border-radius: 0.25rem;
    border: 0.125rem solid black;
`;
