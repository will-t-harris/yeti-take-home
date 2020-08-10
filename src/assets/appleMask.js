/**@jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import tw, { css } from "twin.macro";

export const AppleMask = () => {
	return (
		<svg
			tw="absolute bottom-0"
			css={[
				css`
					top: 275px;
					left: 55px;
				`,
			]}
			xmlns="http://www.w3.org/2000/svg"
			width="322"
			height="270"
			fill="none"
		>
			<path fill="#ededed" d="M0 0h1074v571H0V0z" />
		</svg>
	);
};
