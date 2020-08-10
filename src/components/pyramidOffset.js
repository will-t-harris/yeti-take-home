/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import tw, { css } from "twin.macro";
import * as image from "../assets/pyramid.png";

import { PyramidMask } from "../assets/pyramidMask";

export const PyramidOffset = () => {
	return (
		<React.Fragment>
			<div tw="mt-20">
				<img
					src={image}
					alt="inverted cubic pyramid"
					css={[
						css`
							width: 327px;
							height: 174px;
							left: 25px;
							object-fit: contain;
							position: relative;
							z-index: 2;
						`,
					]}
				/>
				<PyramidMask />
			</div>
		</React.Fragment>
	);
};
