/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";
import * as image from "../assets/apple.png";

import { AppleMask } from "../assets/appleMask";

export const AppleOffset = () => {
	return (
		<div css={{ marginBottom: "80px" }}>
			<img
				src={image}
				alt="display of apples and apple slices"
				css={{
					width: "20.125rem",
					objectFit: "contain",
					position: "relative",
					zIndex: "1",
					"@media (min-width: 40rem)": {
						objectFit: "cover",
						objectPosition: "top",
						width: "43.75rem",
						height: "493px",
						zIndex: "1",
					},
				}}
			/>
			<AppleMask />
		</div>
	);
};
