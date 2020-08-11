/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";

export const VisionBlock = ({ titleText, subTitleText, bodyParagraph }) => {
	return (
		<React.Fragment>
			<h2
				css={{
					"-webkit-text-stroke": "0.8px #1e252c",
					"font-family": "Eczar",
					"font-size": "4.5625rem",
					"font-weight": "600",
					"font-stretch": "normal",
					"font-style": "normal",
					"line-height": "1.77",
					"letter-spacing": "normal",
					color: "white",
					width: "354px",
					height: "129px",
				}}
			>
				{titleText}
			</h2>

			<h3
				css={{
					"font-family": "Poppins",
					"font-size": "1.5rem",
					"font-weight": "600",
					"font-stretch": "normal",
					"font-style": "normal",
					"line-height": "1.46",
					"letter-spacing": "0.46px",
					color: "#1e252c",
					"@media (min-width: 640px)": {
						"grid-column-start": "2",
						"grid-row-start": "1",
						"padding-left": "197px",
						"margin-top": "130px",
						width: "450px",
					},
				}}
			>
				{subTitleText}
			</h3>
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
						width: "450px",
					},
				}}
			>
				{bodyParagraph}
			</p>
		</React.Fragment>
	);
};
