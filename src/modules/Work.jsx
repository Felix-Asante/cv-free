import React from "react";
import Input from "../components/Input";
function Work() {
	return (
		<div>
			<div className="divider"></div>
			<Input type="text" placeholder="Company Name" labelText="Company Name" />
			<Input
				type="text"
				placeholder="Titre du poste"
				labelText="Titre du poste"
			/>
			<Input
				type="text"
				placeholder="Addresse de l'entreprise"
				labelText="Addresse"
			/>
			<Input
				type="text"
				placeholder="Date de debut"
				labelText="Date de debut"
			/>
			<Input type="text" placeholder="Date de fin" labelText="Date de fin" />
			<div className="textarea">
				<label htmlFor="desc">Vos reponsibilites</label>
				<textarea name="description" placeholder="Ecrivez ici"></textarea>
			</div>
		</div>
	);
}

export default Work;
