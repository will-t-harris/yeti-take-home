/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";

import { PageTitle } from "./pageTitle";
import { AboutBlock } from "../components/aboutBlock";
import { VisionBlock } from "../components/visionBlock";
import { ContentBlock } from "../components/contentBlock";
import { AppleOffset } from "../components/appleOffset";
import { PyramidOffset } from "../components/pyramidOffset";

export const About = () => {
	return (
		<React.Fragment>
			<div>
				<PageTitle titleText="About" />
			</div>
			<section
				css={{
					"@media (min-width: 640px)": {
						display: "grid",
						"grid-template-columns": "1fr 1fr",
					},
				}}
			>
				<AppleOffset />
				<AboutBlock
					subTitleText="Andy Griffith turned us down."
					bodyParagraph="Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his nice trailer. That's why you always leave a note!"
				/>
			</section>
			<section>
				<VisionBlock
					titleText="Our vision"
					subTitleText="Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his trailer."
					bodyParagraph="Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his trailer. That's why you always leave a note! Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his trailer. That's why you always leave a note! No… but I'd like to be asked! Oh, you're gonna be in a coma, all right."
				/>
			</section>
			<PyramidOffset />
			<section>
				<ContentBlock
					hasTitle={true}
					titleText="Our values"
					titleFontSize={68}
					subTitleText="Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his trailer."
					subTitleFontSize={22}
					bodyFirstParagraph="Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his trailer. That's why you always leave a note! Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his trailer. That's why you always leave a note! No… but I'd like to be asked! Oh, you're gonna be in a coma, all right."
					bodySecondParagraph="Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his trailer. That's why you always leave a note! Army had half a day. Bad news. Andy Griffith turned us down. "
				/>
			</section>
		</React.Fragment>
	);
};
