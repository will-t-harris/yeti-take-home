/**@jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

export const AppleMask = () => {
	return (
		<svg
			css={{
				position: "absolute",
				top: "16rem",
				right: "1.5rem",
				"@media (min-width: 40rem)": {
					width: "43.75rem",
					height: "30.8125rem",
					top: "25rem",
					left: "13rem",
				},
			}}
			xmlns="http://www.w3.org/2000/svg"
			width="322"
			height="270"
			fill="none"
		>
			<path fill="#ededed" d="M0 0h1074v571H0V0z" />
		</svg>
	);
};
