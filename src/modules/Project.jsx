import React from "react";
import Input from "../components/Input";

function Project() {
	return (
		<div>
			<div className="divider"></div>
			<Input
				type="text"
				placeholder="Nom du projet"
				labelText="Nom du projet"
			/>
			<Input
				type="text"
				placeholder="Lien vers projet"
				labelText="Lien du projet"
			/>
		</div>
	);
}

export default Project;
