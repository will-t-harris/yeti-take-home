/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";
import * as image from "../assets/apple.png";

import { AppleMask } from "../assets/appleMask";

export const AppleOffset = () => {
	return (
		<div css={{ "margin-bottom": "80px" }}>
			<img
				src={image}
				alt="display of apples and apple slices"
				tw="w-322 lg:w-701"
				css={{
					width: "322px",
					"object-fit": "contain",
					position: "relative",
					"z-index": "2",
					"@media (min-width: 640px)": {
						width: "701px;",
					},
				}}
			/>
			<AppleMask />
		</div>
	);
};
