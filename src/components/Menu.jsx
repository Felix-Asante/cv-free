import React, { useEffect, useState } from "react";
import style from "../styles/menu.module.css";
import {
	AiOutlineUser,
	AiOutlineProfile,
	AiOutlineProject,
} from "react-icons/ai";
import { FaUserGraduate, FaGraduationCap } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { BACKEND_URL } from "../config/general";
import { setDocument } from "../redux/store";
function Menu({ updateDocument }) {
	const location = useLocation();
	const [path, setPath] = useState(null);
	const data = useAppSelector((state) => state);
	const dispatch = useAppDispatch();
	const generateCV = async () => {
		await fetch(`${BACKEND_URL}/create-pdf`, {
			method: "POST",
			body: JSON.stringify(data),
			// mode: "no-cors",
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Headers": "Content-Type",
				"Access-Control-Allow-Methods": "GET,POST,OPTIONS,DELETE,PUT",
			},
		});

		setTimeout(async () => {
			const fetchRes = await fetch(`${BACKEND_URL}/fetch-pdf`);
			const result = await fetchRes.json();
			dispatch(setDocument("data:application/pdf;base64," + result.data));
		}, 5000);
	};
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

			<button className={style.btn} onClick={() => generateCV()}>
				Create CV
			</button>
		</nav>
	);
}

export default Menu;
