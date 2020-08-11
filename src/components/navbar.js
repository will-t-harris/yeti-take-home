/** @jsx jsx */
import { jsx } from "@emotion/core";

import { HamburgerMenu } from "./icons/hamburgerMenu";
import { SiteLogo } from "./icons/siteLogo";

export const Navbar = () => {
	return (
		<header
			css={{
				display: "flex",
				justifyContent: "flex-end",
				padding: "40px 24px 0 0",
				"@media (min-width: 640px)": {
					paddingRight: "128px",
					marginBottom: "128px",
				},
			}}
		>
			<nav
				css={{
					display: "none",
					paddingLeft: "176px",
					marginRight: "auto",
					"@media (min-width: 640px)": {
						display: "flex",
						paddingLeft: "128px",
					},
				}}
			>
				<SiteLogo />
			</nav>
			<nav
				css={{
					fontFamily: "Poppins",
					fontSize: "12px",
					fontWeight: "500",
					fontStretch: "normal",
					fontStyle: "normal",
					letterSpacing: "3px",
					color: "#1e252c",
					marginRight: "12px",
					"@media (min-width: 640px)": {
						marginRight: "17.5px",
					},
				}}
			>
				MENU
			</nav>
			<HamburgerMenu />
		</header>
	);
};
