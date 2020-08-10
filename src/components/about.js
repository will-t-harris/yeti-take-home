/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import tw, { css } from "twin.macro";

import { PageTitle } from "./pageTitle";
import { ContentBlock } from "../components/contentBlock";
import { AppleOffset } from "../components/appleOffset";
import { PyramidOffset } from "../components/pyramidOffset";

export const About = () => {
	return (
		<React.Fragment>
			<div>
				<PageTitle titleText="About" />
				<AppleOffset />
			</div>
			<section tw="mt-20">
				<ContentBlock
					hasTitle={false}
					subTitleText="Andy Griffith turned us down."
					subTitleFontSize={24}
					bodyFirstParagraph="Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his nice trailer. That's why you always leave a note!"
				/>
			</section>
			<section>
				<ContentBlock
					hasTitle={true}
					titleText="Our vision"
					titleFontSize={73}
					subTitleText="Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his trailer."
					subTitleFontSize={24}
					bodyFirstParagraph="Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his trailer. That's why you always leave a note! Army had half a day. Bad news. Andy Griffith turned us down. He didn't like his trailer. That's why you always leave a note! No… but I'd like to be asked! Oh, you're gonna be in a coma, all right."
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
