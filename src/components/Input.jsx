import React from "react";
import style from "../styles/input.module.css";

function Input({ type, placeholder, name, labelText }) {
	return (
		<div className={style.input}>
			<label className={style.label}>{labelText}</label>
			<input
				type={type}
				placeholder={placeholder}
				name={name}
				className={style.input}
			/>
		</div>
	);
}

export default Input;
