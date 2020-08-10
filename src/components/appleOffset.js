/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { css } from "twin.macro";
import * as image from "../assets/apple.png";

import { AppleMask } from "../assets/appleMask";

export const AppleOffset = () => {
	return (
		<React.Fragment>
			<img
				src={image}
				alt="display of apples and apple slices"
				css={[
					css`
						width: 322px;
						object-fit: contain;
						position: relative;
						z-index: 2;
					`,
				]}
			/>
			<AppleMask />
		</React.Fragment>
	);
};
