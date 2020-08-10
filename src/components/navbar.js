/** @jsx jsx */
import { jsx } from "@emotion/core";
import tw, { css } from "twin.macro";

import { HamburgerMenu } from "./icons/hamburgerMenu";
import { SiteLogo } from "./icons/siteLogo";

export const Navbar = () => {
	return (
		<header tw="flex pt-10 pr-6 justify-end">
			<nav>
				<SiteLogo />
			</nav>
			<nav
				tw="mr-3"
				css={[
					css`
						font-family: Poppins;
						font-size: 12px;
						font-weight: 500;
						font-stretch: normal;
						font-style: normal;
						line-height: 1.58;
						letter-spacing: 3px;
						color: #1e252c;
					`,
				]}
			>
				MENU
			</nav>
			<HamburgerMenu />
		</header>
	);
};
