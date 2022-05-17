import React, { useEffect, useState } from "react";
import style from "../styles/menu.module.css";
import {
	AiOutlineUser,
	AiOutlineProfile,
	AiOutlineProject,
} from "react-icons/ai";
import { FaUserGraduate, FaGraduationCap } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function Menu() {
	const location = useLocation();
	const [path, setPath] = useState(null);

	useEffect(() => {
		setPath(location.pathname);
	}, [location.pathname]);

	return (
		<nav className={style.nav}>
			<ul className={style.list}>
				<li>
					<AiOutlineUser />
					<Link to="/" style={{ color: path === "/" ? "#0da65b" : "#fff" }}>
						Profile
					</Link>
				</li>
				<li>
					<FaUserGraduate />
					<Link
						to="/education"
						style={{ color: path === "/education" ? "#0da65b" : "#fff" }}
					>
						Education
					</Link>
				</li>
				<li>
					<FaUserGraduate />

					<Link
						to="/work"
						style={{ color: path === "/work" ? "#0da65b" : "#fff" }}
					>
						Work
					</Link>
				</li>
				<li>
					<AiOutlineProfile />
					<Link
						to="/skills"
						style={{ color: path === "/skills" ? "#0da65b" : "#fff" }}
					>
						Skills
					</Link>
				</li>
				<li>
					<AiOutlineProject />
					<Link
						to="/projects"
						style={{ color: path === "/projects" ? "#0da65b" : "#fff" }}
					>
						Projects
					</Link>
				</li>
				<li>
					<FaGraduationCap />
					<Link
						to="/awards"
						style={{ color: path === "/awards" ? "#0da65b" : "#fff" }}
					>
						Awards
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Menu;
