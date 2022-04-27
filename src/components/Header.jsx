import React from "react";
import style from "../styles/header.module.css";

function Header() {
	return (
		<header className={style.header}>
			<h2 className={style["app-name"]}>
				CV <span className="text-success">Free</span>
			</h2>
		</header>
	);
}

export default Header;
