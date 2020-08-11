/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";

export const ValuesBlock = ({
	titleText,
	subTitleText,
	bodyFirstParagraph,
	bodySecondParagraph,
}) => {
	return (
		<React.Fragment>
			<h2
				css={{
					WebkitTextStroke: "0.8px #1e252c",
					fontFamily: "Eczar",
					fontSize: "4.25rem",
					fontWeight: "600",
					fontStretch: "normal",
					fontStyle: "normal",
					lineHeight: "1.77",
					letterSpacing: "normal",
					color: "white",
					width: "354px",
					height: "129px",
					margin: 0,
				}}
			>
				{titleText}
			</h2>
			<h3
				css={{
					fontFamily: "Poppins",
					fontSize: "1.375rem",
					fontWeight: "600",
					fontStretch: "normal",
					fontStyle: "normal",
					lineHeight: "1.46",
					letterSpacing: "0.46px",
					color: "#1e252c",
					margin: 0,
					"@media (min-width: 640px)": {
						gridColumnStart: "2",
						gridRowStart: "1",
						paddingLeft: "197px",
						marginTop: "130px",
						width: "450px",
					},
				}}
			>
				{subTitleText}
			</h3>
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
					marginBottom: "30px",
					"@media (min-width: 640px)": {
						gridColumnStart: "2",
						gridRowStart: "1",
						paddingLeft: "197px",
						paddingTop: "205px",
						width: "450px",
					},
				}}
			>
				{bodyFirstParagraph}
			</p>
			<p
				css={{
					fontFamily: "Roboto Mono",
					fontSize: "18px",
					fontWeight: "normal",
					fontStretch: "normal",
					fontStyle: "normal",
					lineHeight: "1.56",
					letterSpacing: "normal",
					color: "#4a4a4a",
					marginBottom: "106px",
				}}
			>
				{bodySecondParagraph}
			</p>
		</React.Fragment>
	);
};
