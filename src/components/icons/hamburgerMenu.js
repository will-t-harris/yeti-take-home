/**@jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

export const HamburgerMenu = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="27"
			height="10"
			fill="none"
			css={{ paddingTop: "4px" }}
		>
			<path
				stroke="#000"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M11 8.889h15M1 1.111h25"
			/>
		</svg>
	);
};
