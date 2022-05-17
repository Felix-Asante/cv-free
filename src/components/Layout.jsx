import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";

function Layout(props) {
	return (
		<div>
			<Header />
			<div className="flex layout">
				<Menu />
				<div className="contenu">{props.children}</div>
				<div className="affichage">Affichage</div>
			</div>
			<Footer prev={props.prev} next={props.next} />
		</div>
	);
}

export default Layout;
