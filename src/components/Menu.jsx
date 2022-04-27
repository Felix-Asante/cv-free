import React from "react";
import style from "../styles/menu.module.css";
import {
	AiOutlineUser,
	AiOutlineProfile,
	AiOutlineProject,
} from "react-icons/ai";
import { FaUserGraduate, FaGraduationCap } from "react-icons/fa";

function Menu() {
	return (
		<nav className={style.nav}>
			<ul className={style.list}>
				<li>
					<AiOutlineUser />
					<a href="#">Profile</a>
				</li>
				<li>
					<FaUserGraduate />
					<a href="#">Education</a>
				</li>
				<li>
					<FaUserGraduate />

					<a href="#">Work</a>
				</li>
				<li>
					<AiOutlineProfile />
					<a href="#">Skills</a>
				</li>
				<li>
					<AiOutlineProject />
					<a href="#">Projects</a>
				</li>
				<li>
					<FaGraduationCap />
					<a href="#">Awards</a>
				</li>
			</ul>
		</nav>
	);
}

export default Menu;
