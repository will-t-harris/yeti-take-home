/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import tw, { css } from "twin.macro";

export const PageTitle = ({ titleText }) => {
	return (
		<h1
			tw="font-eczar font-semibold not-italic text-white"
			css={[
				css`
					-webkit-text-stroke: 1px #1e252c;
					font-size: 99px;
					font-stretch: normal;
					letter-spacing: normal;
				`,
			]}
		>
			{titleText}
		</h1>
	);
};
