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
					fontFamily: "Poppins",
					fontSize: "1.5rem",
					fontWeight: "600",
					lineHeight: "1.46",
					letterSpacing: "0.46px",
					color: "#1e252c",
					margin: "0",
					"@media (min-width: 40rem)": {
						gridColumnStart: "2",
						gridRowStart: "1",
						paddingLeft: "197px",
						paddingTop: "130px",
						fontSize: "26px",
						width: "280px",
					},
				}}
			>
				{subTitleText}
			</h2>
			<p
				css={{
					width: "354px",
					fontFamily: "Roboto Mono",
					fontSize: "18px",
					fontWeight: "normal",
					fontStretch: "normal",
					fontStyle: "normal",
					lineHeight: "1.56",
					letterSpacing: "normal",
					color: "#4a4a4a",
					marginTop: "24px",
					marginBottom: "49px",
					"@media (min-width: 640px)": {
						gridColumnStart: "2",
						gridRowStart: "1",
						paddingLeft: "197px",
						paddingTop: "205px",
						fontSize: "20px",
						width: "270px",
					},
				}}
			>
				{bodyParagraph}
			</p>
		</React.Fragment>
	);
};
