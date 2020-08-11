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
					"@media (min-width: 640px)": {
						position: "relative",
						margin: "-660px auto 0",
						zIndex: 20,
						fontSize: "7rem",
						width: "592px",
						color: "transparent",
					},
				}}
			>
				{titleText}
			</h2>
			<h3
				css={{
					fontFamily: "Poppins",
					textAlign: "center",
					fontSize: "1.375rem",
					fontWeight: "600",
					fontStretch: "normal",
					fontStyle: "normal",
					lineHeight: "1.46",
					letterSpacing: "0.46px",
					color: "#1e252c",
					margin: 0,
					width: "354px",
					"@media (min-width: 640px)": {
						fontSize: "35px",
						textAlign: "center",
						margin: "130px auto 92px",
						width: "701px",
					},
				}}
			>
				{subTitleText}
			</h3>
			<div
				css={{
					"@media (min-width: 640px)": {
						display: "grid",
						gridTemplateColumns: "1fr 1fr",
						gridTemplateRows: "560px",
					},
				}}
			>
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
							width: "560px",
							marginLeft: "130px",
							lineHeight: "1.6",
							fontSize: "20px",
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
						"@media (min-width: 640px)": {
							width: "560px",
							marginLeft: "130px",
							lineHeight: "1.6",
							fontSize: "20px",
						},
					}}
				>
					{bodySecondParagraph}
				</p>
			</div>
		</React.Fragment>
	);
};
