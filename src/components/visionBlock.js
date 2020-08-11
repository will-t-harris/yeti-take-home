/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";

export const VisionBlock = ({ titleText, subTitleText, bodyParagraph }) => {
	return (
		<React.Fragment>
			<h2
				css={{
					WebkitTextStroke: "0.8px #1e252c",
					fontFamily: "Eczar",
					fontSize: "4.5625rem",
					fontWeight: "600",
					fontStretch: "normal",
					fontStyle: "normal",
					lineHeight: "1.77",
					letterSpacing: "normal",
					color: "white",
					width: "354px",
					height: "129px",
					margin: 0,
					"@media (min-width: 640px)": {
						gridColumnStart: 4,
						gridRowStart: 2,
						fontSize: "7.5rem",
						transform: "rotate(90deg)",
						height: "150px",
						width: "575px",
						lineHeight: "1.25",
					},
				}}
			>
				{titleText}
			</h2>

			<h3
				css={{
					fontFamily: "Poppins",
					fontSize: "1.5rem",
					fontWeight: "600",
					fontStretch: "normal",
					fontStyle: "normal",
					lineHeight: "1.46",
					letterSpacing: "0.46px",
					color: "#1e252c",
					margin: 0,
					"@media (min-width: 640px)": {
						gridColumnStart: "1",
						gridRowStart: "1",
						fontSize: "2.1875rem",
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
					marginBottom: "49px",
					"@media (min-width: 640px)": {
						gridColumnStart: 2,
						gridRowStart: 2,
						width: "665px",
						fontSize: "20px",
					},
				}}
			>
				{bodyParagraph}
			</p>
		</React.Fragment>
	);
};
