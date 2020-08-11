/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

export const PageTitle = ({ titleText }) => {
	return (
		<h1
			css={{
				"-webkit-text-stroke": "1px #1e252c",
				"font-family": "Eczar",
				"font-size": "99px",
				"font-weight": "600",
				"font-stretch": "normal",
				"font-style": "normal",
				"line-height": "1.78",
				"letter-spacing": "normal",
				color: "#ffffff",
				width: "354px",
				height: "176px",
				"@media (min-width: 640px)": {
					position: "relative",
					"padding-top": "62px",
					"z-index": "10",
					color: "transparent",
					width: "335px",
					"font-size": "120px",
				},
			}}
		>
			{titleText}
		</h1>
	);
};
