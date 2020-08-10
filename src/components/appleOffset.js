/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { css } from "twin.macro";
import * as image from "../assets/image.png";

export const AppleOffset = () => {
	return (
		<React.Fragment>
			<img
				src={image}
				alt="display showing apple and apple slices"
				css={[
					css`
						width: 322px;
						object-fit: contain;
						position: relative;
						z-index: 2;
					`,
				]}
			/>
			<div
				css={[
					css`
						width: 322px;
						height: 270px;
						left: 60px;
						top: 245px;
						position: absolute;
						background: #ededed;
					`,
				]}
			/>
		</React.Fragment>
	);
};
