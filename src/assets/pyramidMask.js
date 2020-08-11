/**@jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";

export const PyramidMask = () => {
	return (
		<svg
			css={{
				position: "relative",
				bottom: "195px",
				right: "0",
				"@media (min-width: 640px)": {
					width: "996px",
					height: "553px",
					bottom: "600px",
				},
			}}
			xmlns="http://www.w3.org/2000/svg"
			width="303"
			height="168"
			fill="none"
		>
			<path fill="#ededed" d="M0 0h1074v571H0V0z" />
		</svg>
	);
};
