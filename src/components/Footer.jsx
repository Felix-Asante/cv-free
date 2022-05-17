import React from "react";
import { Link } from "react-router-dom";
import style from "../styles/footer.module.css";
function Footer({ prev, next }) {
	return (
		<footer className={style.footer}>
			{prev && (
				<Link to={prev ? prev : "#"}>
					<button className={style.btn}>&larr; Prev</button>
				</Link>
			)}
			{next && (
				<Link to={next ? next : "#"}>
					<button className={style.btn}>Next &rarr;</button>
				</Link>
			)}
		</footer>
	);
}

export default Footer;
