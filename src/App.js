/** @jsx jsx */
import { jsx } from "@emotion/core";
import tw from "twin.macro";
import "tailwindcss/dist/base.min.css";

import { About } from "./components/about";

function App() {
	return (
		<main tw="px-7">
			<About />
		</main>
	);
}

export default App;
