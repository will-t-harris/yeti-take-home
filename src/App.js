/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";

import { Navbar } from "./components/navbar";
import { About } from "./components/about";

function App() {
	return (
		<React.Fragment>
			<Navbar />
			<main
				css={{
					padding: "0 30px",
					"@media (min-width: 640px)": {
						padding: "0 128px",
					},
				}}
			>
				<About />
			</main>
		</React.Fragment>
	);
}

export default App;
