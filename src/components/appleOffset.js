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
				css={{
					width: "322px",
					"object-fit": "contain",
					position: "relative",
					"z-index": "1",
					"@media (min-width: 640px)": {
						"object-fit": "cover",
						"object-position": "top",
						width: "701px",
						height: "493px",
						"z-index": "1",
					},
				}}
			/>
			<AppleMask />
		</div>
	);
};
