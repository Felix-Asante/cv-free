import React from "react";
import Header from "./Header";
import Menu from "./Menu";

function Layout(props) {
	return (
		<div>
			<Header />
			<div className="flex">
				<Menu />
				<div className="contenu">{props.children}</div>
				<div className="affichage">Affichage</div>
			</div>
		</div>
	);
}

export default Layout;
