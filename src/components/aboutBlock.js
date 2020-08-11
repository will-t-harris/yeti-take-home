/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";

export const AboutBlock = ({
	subTitleText,
	subTitleFontSize,
	bodyParagraph,
}) => {
	return (
		<React.Fragment>
			<h2
				css={{
					"font-family": "Poppins",
					"font-size": "1.5rem",
					"font-weight": "600",
					"font-stretch": "normal",
					"font-style": "normal",
					"line-height": "1.46",
					"letter-spacing": "0.288rem",
					color: "#1e252c",
					margin: "0",
					"@media (min-width: 40rem)": {
						"grid-column-start": "2",
						"grid-row-start": "1",
						"padding-left": "197px",
						"padding-top": "130px",
						"font-size": "26px",
						width: "280px",
					},
				}}
			>
				{subTitleText}
			</h2>
			<p
				css={{
					width: "354px",
					"font-family": "Roboto Mono",
					"font-size": "18px",
					"font-weight": "normal",
					"font-stretch": "normal",
					"font-style": "normal",
					"line-height": "1.56",
					"letter-spacing": "normal",
					color: "#4a4a4a",
					"margin-top": "24px",
					"margin-bottom": "49px",
					"@media (min-width: 640px)": {
						"grid-column-start": "2",
						"grid-row-start": "1",
						"padding-left": "197px",
						"padding-top": "205px",
						"font-size": "20px",
						width: "270px",
					},
				}}
			>
				{bodyParagraph}
			</p>
		</React.Fragment>
	);
};
