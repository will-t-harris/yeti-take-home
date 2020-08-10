/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import tw, { css } from "twin.macro";

export const ContentBlock = ({
	hasTitle,
	titleText,
	titleFontSize,
	subTitleText,
	subTitleFontSize,
	bodyFirstParagraph,
	bodySecondParagraph,
}) => {
	return (
		<React.Fragment>
			{hasTitle && (
				<h2
					tw="text-white"
					css={[
						css`
							-webkit-text-stroke: 0.8px #1e252c;
							font-family: Eczar;
							font-size: ${titleFontSize}px;
							font-weight: 600;
							font-stretch: normal;
							font-style: normal;
							line-height: 1.77;
							letter-spacing: normal;
						`,
					]}
				>
					{titleText}
				</h2>
			)}
			<h3
				css={[
					css`
						font-family: Poppins;
						font-size: ${subTitleFontSize}px;
						font-weight: 600;
						font-stretch: normal;
						font-style: normal;
						line-height: 1.46;
						letter-spacing: 0.46px;
						color: #1e252c;
					`,
				]}
			>
				{subTitleText}
			</h3>
			<p
				tw="mt-6 mb-10 font-roboto-mono"
				css={[
					css`
						font-size: 18px;
						font-weight: normal;
						font-stretch: normal;
						font-style: normal;
						line-height: 1.56;
						letter-spacing: normal;
						color: #4a4a4a;
					`,
				]}
			>
				{bodyFirstParagraph}
			</p>
			{bodySecondParagraph && (
				<p
					tw="mt-6 mb-20 font-roboto-mono"
					css={[
						css`
							font-size: 18px;
							font-weight: normal;
							font-stretch: normal;
							font-style: normal;
							line-height: 1.56;
							letter-spacing: normal;
							color: #4a4a4a;
						`,
					]}
				>
					{bodySecondParagraph}
				</p>
			)}
		</React.Fragment>
	);
};
