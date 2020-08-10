/**@jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import tw, { css } from "twin.macro";

export const PyramidMask = () => {
	return (
		<svg
			tw="relative"
			css={[
				css`
					bottom: 195px;
					right: 0;
				`,
			]}
			xmlns="http://www.w3.org/2000/svg"
			width="303"
			height="168"
			fill="none"
		>
			<path fill="#ededed" d="M0 0h1074v571H0V0z" />
		</svg>
	);
};
