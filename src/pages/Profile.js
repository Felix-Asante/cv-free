import React from "react";
import Input from "../components/Input";

function Profile() {
	return (
		<div>
			<h4 className="section-header">INFORMATIONS PERSONNELLE</h4>
			<div className="formulaire">
				<Input type="text" placeholder="Nom" name="nom" labelText="Nom:" />
				<Input
					type="text"
					placeholder="Prenom"
					name="prenom"
					labelText="Prenom:"
				/>
				<Input
					type="email"
					placeholder="example@email.com"
					name="email"
					labelText="Email:"
				/>
				<Input
					type="tel"
					placeholder="Telephone"
					name="tel"
					labelText="Telephone:"
				/>
				<Input
					type="text"
					placeholder="Address"
					name="address"
					labelText="Address:"
				/>
			</div>
		</div>
	);
}

export default Profile;
