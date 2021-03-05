import { Fragment } from "react";
import { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import "../styles/globals.css";

function App({ Component, pageProps, router }: AppProps) {
	const Layout = Component?.Layout ? Component?.Layout : Fragment;

	return (
		<PageWrapper>
			<Layout>
				<AnimatePresence initial={false} exitBeforeEnter>
					<PageContainer key={router.route} initial="initial" animate="animate" exit="exit" variants={pageVariants}>
						<Component {...pageProps} />
					</PageContainer>
				</AnimatePresence>
			</Layout>
		</PageWrapper>
	);
}

export default App;

const PageWrapper = styled(motion.div)`
	flex: 1;
	display: flex;
	flex-direction: column;
	position: relative;
	min-height: 100vh;
`;

const PageContainer = styled(motion.div)`
	flex: 1;
`;

const pageVariants = {
	initial: { opacity: 0, y: 32 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: 32 },
};
