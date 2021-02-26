import { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import "../styles/globals.css";

function App({ Component, pageProps, router }: AppProps) {
	return (
		<AnimatePresence>
			<PageContainer key={router.route} initial="initial" animate="animate" exit="exit" variants={pageVariants}>
				<Component {...pageProps} />
			</PageContainer>
		</AnimatePresence>
	);
}

export default App;

const PageContainer = styled(motion.div)`
	background-color: lightblue;
	flex: 1;
	min-height: 100vh;
`;

const pageVariants = {
	initial: { opacity: 0, y: 10 },
	animate: { opacity: 1, y: 0 },
	// exit: { opacity: -10 },
};
