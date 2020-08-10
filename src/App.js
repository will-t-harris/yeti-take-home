/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import tw from "twin.macro";

import { Navbar } from "./components/navbar";
import { About } from "./components/about";

function App() {
	return (
		<React.Fragment>
			<Navbar />
			<main tw="px-7">
				<About />
			</main>
		</React.Fragment>
	);
}

export default App;
