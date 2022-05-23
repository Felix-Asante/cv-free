import React from "react";
import style from "../styles/input.module.css";

function FormGroup({ labelText, children }) {
	return (
		<div className={style.input}>
			<label className={style.label}>{labelText}</label>
			{children}
		</div>
	);
}

export default FormGroup;
