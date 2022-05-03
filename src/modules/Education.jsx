import React from "react";
import Input from "../components/Input";

function Education() {
	return (
		<div>
			<div className="divider"></div>
			<Input
				type="text"
				placeholder="Nom de l'établissement"
				labelText="Etablissement"
			/>
			<Input type="text" placeholder="Ville et Pays" labelText="Lieu" />
			<Input
				type="text"
				placeholder="Annee academique"
				labelText="Annee academique"
			/>
			<Input type="text" placeholder="Filière" labelText="Filière" />
			<Input type="text" placeholder="Niveau" labelText="Niveau" />
		</div>
	);
}

export default Education;
