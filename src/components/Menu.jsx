import React from "react";
import style from "../styles/menu.module.css";
import {
	AiOutlineUser,
	AiOutlineProfile,
	AiOutlineProject,
} from "react-icons/ai";
import { FaUserGraduate, FaGraduationCap } from "react-icons/fa";
import { Link } from "react-router-dom";

function Menu() {
	return (
		<nav className={style.nav}>
			<ul className={style.list}>
				<li>
					<AiOutlineUser />
					<Link to="/">Profile</Link>
				</li>
				<li>
					<FaUserGraduate />
					<Link to="education">Education</Link>
				</li>
				<li>
					<FaUserGraduate />

					<Link to="work">Work</Link>
				</li>
				<li>
					<AiOutlineProfile />
					<Link to="skills">Skills</Link>
				</li>
				<li>
					<AiOutlineProject />
					<Link to="projects">Projects</Link>
				</li>
				<li>
					<FaGraduationCap />
					<Link to="awards">Awards</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Menu;
