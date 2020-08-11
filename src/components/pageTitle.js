/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

export const PageTitle = ({ titleText }) => {
	return (
		<h1
			css={{
				WebkitTextStroke: "1px #1e252c",
				fontFamily: "Eczar",
				fontSize: "99px",
				fontWeight: "600",
				fontStretch: "normal",
				fontStyle: "normal",
				lineHeight: "1.78",
				letterSpacing: "normal",
				color: "#ffffff",
				width: "354px",
				height: "176px",
				marginTop: "0",
				marginBottom: "-1rem",
				"@media (min-width: 640px)": {
					position: "relative",
					zIndex: "10",
					color: "transparent",
					width: "335px",
					fontSize: "120px",
					marginBottom: "-3.75rem",
				},
			}}
		>
			{titleText}
		</h1>
	);
};
