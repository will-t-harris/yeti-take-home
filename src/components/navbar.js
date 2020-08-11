/** @jsx jsx */
import { jsx } from "@emotion/core";

import { HamburgerMenu } from "./icons/hamburgerMenu";
import { SiteLogo } from "./icons/siteLogo";

export const Navbar = () => {
	return (
		<header
			css={{
				display: "flex",
				"justify-content": "flex-end",
				padding: "40px 24px 0 0",
				"@media (min-width: 640px)": {
					"padding-right": "128px",
				},
			}}
		>
			<nav
				css={{
					display: "none",
					"padding-left": "176px",
					"margin-right": "auto",
					"@media (min-width: 640px)": {
						display: "flex",
						"padding-left": "128px",
					},
				}}
			>
				<SiteLogo />
			</nav>
			<nav
				css={{
					"font-family": "Poppins",
					"font-size": "12px",
					"font-weight": "500",
					"font-stretch": "normal",
					"font-style": "normal",

					"letter-spacing": "3px",
					color: "#1e252c",
					"margin-right": "12px",
				}}
			>
				MENU
			</nav>
			<HamburgerMenu />
		</header>
	);
};
