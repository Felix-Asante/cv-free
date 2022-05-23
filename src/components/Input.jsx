import React from "react";
import style from "../styles/input.module.css";

function Input({ type, placeholder, name }) {
	return (
		<input
			type={type}
			placeholder={placeholder}
			name={name}
			className={style.input}
		/>
	);
}

export default Input;
