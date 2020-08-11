/**@jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

export const AppleMask = () => {
	return (
		<svg
			css={{
				position: "absolute",
				top: "270px",
				right: "30px",
				"@media (min-width: 640px)": {
					width: "701px",
					height: "493px",
					top: "325px",
					left: "200px",
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
