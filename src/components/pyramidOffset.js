/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";
import * as image from "../assets/pyramid.png";

import { PyramidMask } from "../assets/pyramidMask";

export const PyramidOffset = () => {
	return (
		<React.Fragment>
			<div css={{ "margin-top": "80px", "margin-bottom": "-140px" }}>
				<img
					src={image}
					alt="inverted cubic pyramid"
					css={{
						width: "327px",
						left: "25px",
						"object-fit": "contain",
						position: "relative",
						"z-index": "2",
						"@media (min-width: 640px)": {
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
