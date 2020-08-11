/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";
import * as image from "../assets/pyramid.png";

import { PyramidMask } from "../assets/pyramidMask";

export const PyramidOffset = () => {
	return (
		<React.Fragment>
			<div css={{ marginTop: "80px", marginBottom: "-140px" }}>
				<img
					src={image}
					alt="inverted cubic pyramid"
					css={{
						width: "20.5rem",
						left: "1.5rem",
						objectFit: "contain",
						position: "relative",
						zIndex: "2",
						"@media (min-width: 40rem)": {
							width: "1074px",
							height: "571px",
						},
					}}
				/>
				<PyramidMask />
			</div>
		</React.Fragment>
	);
};
