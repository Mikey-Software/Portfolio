import React from "react";
import styled from "styled-components";
import Button from "@components/Button";

export default function index() {
    return (
        <BrowserCarousel>
            <Browser>
                <Toolbar>
                    <TitleBar>Project</TitleBar>
                    <AddressBar>https://example-project.com</AddressBar>
                    <ActionBar>
                        <ActionButton>−</ActionButton>
                        <ActionButton>↗</ActionButton>
                        <ActionButton>X</ActionButton>
                    </ActionBar>
                </Toolbar>
                <Window></Window>
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
    /* padding-top: 56.25%; */
    margin: auto;

    @media only screen and (max-width: 1024px) {
        height: 30rem;
        margin-top: 2rem;
    }

    @media only screen and (max-width: 768px) {
        display: none;
    }
`;

const Browser = styled.div`
    /* position: relative; */
    flex: 1;
    width: 100%;
    height: 100%;
    /* height: 28rem; */
    display: flex;
    position: relative;
    flex-direction: column;
    /* padding-top: 56.25%; */
    border: 0.25rem solid black;
    /* background: green; */

    /* DEBHUG */
    position: absolute;
    top: 0;
    bottom: 0;
`;

const Toolbar = styled.div`
    display: flex;
    flex-shrink: 1;
    font-size: 0.75rem;
    justify-content: stretch;
    /* background: lightgray; */
    padding: 0.25rem 0.5rem;
`;

const TitleBar = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const AddressBar = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.125rem;
    background: lightgray;
`;

const ActionBar = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`;

const ActionButton = styled.button`
    border: none;
    width: 1.5rem;
    height: 1.5rem;
    padding: 0.25rem;
    font-weight: 700;
    margin-left: 0.75rem;
    border-radius: 0.125rem;
    background: lightgray;
`;

const Window = styled.div`
    flex: 1;
    background: darkgray;
`;

const Arrows = styled.div`
    display: flex;
    padding: 1rem 0rem;
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
