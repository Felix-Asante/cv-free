import React from "react";
import FormGroup from "../components/FormGroup";

function Education() {
	return (
		<div>
			<div className="divider"></div>
			<FormGroup labelText="Etablissement">
				<input type="text" placeholder="Nom de l'établissement" />
			</FormGroup>
			<FormGroup labelText="Lieu">
				<input type="text" placeholder="Ville et Pays" />
			</FormGroup>
			<FormGroup labelText="Annee academique">
				<input type="text" placeholder="Annee academique" />
			</FormGroup>
			<FormGroup labelText="Filière">
				<input type="text" placeholder="Filière" />
			</FormGroup>
			<FormGroup labelText="Niveau">
				<input type="text" placeholder="Niveau" />
			</FormGroup>
		</div>
	);
}

export default Education;
