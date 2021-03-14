import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export default function index() {
    return (
        <EditorContainer
            initial={{ opacity: 0, y: 128, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: -4, transition: { delay: 0.25 } }}
            whileHover={{ scale: 0.98 }}
        >
            <Line>
                <LineNumber></LineNumber>
                <LineText></LineText>
            </Line>
            <Line>
                <LineNumber>1</LineNumber>
                <LineText>{"const Your_Next_Dev = {"}</LineText>
            </Line>
            <Line>
                <LineNumber>2</LineNumber>
                <LineText>
                    <TabSpace />
                    fullName: "Michael Cowan",
                </LineText>
            </Line>
            <Line>
                <LineNumber>3</LineNumber>
                <LineText>
                    <TabSpace />
                    email: "mikey.software@gmail.com",
                </LineText>
            </Line>
            <Line>
                <LineNumber>4</LineNumber>
                <LineText>
                    <TabSpace />
                    role: "Fullstack Developer",
                </LineText>
            </Line>

            <Line>
                <LineNumber>5</LineNumber>
                <LineText>
                    <TabSpace />
                    {'education: "BSc in ICT - SWE Major",'}
                </LineText>
            </Line>
            {/* Stack */}
            <Line>
                <LineNumber>6</LineNumber>
                <LineText>
                    <TabSpace />
                    {"devStack: {"}
                </LineText>
            </Line>
            <Line>
                <LineNumber>7</LineNumber>
                <LineText>
                    <TabSpace />
                    <TabSpace />
                    {'frontend: "React, Next, Framer Motion",'}
                </LineText>
            </Line>
            <Line>
                <LineNumber>8</LineNumber>
                <LineText>
                    <TabSpace />
                    <TabSpace />
                    {'backend: "NodeJs, Express, Postgres",'}
                </LineText>
            </Line>
            <Line>
                <LineNumber>9</LineNumber>
                <LineText>
                    <TabSpace />
                    <TabSpace />
                    {'mobile: "React Native, Expo, PWA",'}
                </LineText>
            </Line>
            <Line>
                <LineNumber>10</LineNumber>
                <LineText>
                    <TabSpace />
                    <TabSpace />
                    {'database: "Postgres, Mongo, Firebase",'}
                </LineText>
            </Line>

            <Line>
                <LineNumber>11</LineNumber>
                <LineText>
                    <TabSpace />
                    {"},"}
                </LineText>
            </Line>
            <Line>
                <LineNumber>12</LineNumber>
                <LineText>{"};"}</LineText>
            </Line>
            <Line>
                <LineNumber></LineNumber>
                <LineText></LineText>
            </Line>
        </EditorContainer>
    );
}

const EditorContainer = styled(motion.div)`
    background: lightgray;
    min-width: 36rem;
    width: max-content;
    height: max-content;
    border-radius: 0.5rem;
    margin: auto;
    overflow: hidden;
    cursor: pointer;

    @media only screen and (max-width: 1024px) {
        width: 100%;
    }

    @media only screen and (max-width: 576px) {
        width: 100%;
        min-width: unset;
        /* min-width: 23rem; */
    }
`;

const Line = styled.div`
    display: flex;
    height: 2rem;
    font-size: 1rem;
    overflow: hidden;
    align-items: center;
    @media only screen and (max-width: 576px) {
        height: 1.5rem;
    }
`;

const LineNumber = styled.div`
    flex-shrink: 1;
    width: 3rem;
    height: 100%;
    color: lightgray;
    background: black;
    padding: 0 0.5rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 1rem;

    @media only screen and (max-width: 576px) {
        width: 2rem;
        font-size: 0.65rem;
    }
`;

const LineText = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    white-space: nowrap;
    font-size: 1.125rem;
    padding-left: 1.25rem;
    overflow: hidden;
    @media only screen and (max-width: 576px) {
        font-size: 0.75rem;
        padding-left: 0.875rem;
    }
`;

const TabSpace = styled.span`
    min-width: 1.75rem;
    @media only screen and (max-width: 576px) {
        min-width: 1.125rem;
    }
`;
