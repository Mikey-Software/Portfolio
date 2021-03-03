import React from "react";
import styled from "styled-components";
import NavigationBar from "@components/NavigationBar";

export default function DefaultLayout({ children }) {
	return (
		<Layout>
			<NavigationBar />
			{children}
		</Layout>
	);
}

const Layout = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	overflow: hidden;
`;
