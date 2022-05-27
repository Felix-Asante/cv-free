import React from "react";
import {
	setFirstName,
	setLastName,
	setEmail,
	setTelephone,
	setNationality,
	setAddress,
} from "../redux/features/profile.slice";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import FormGroup from "../components/FormGroup";

function Profile() {
	const dispatch = useAppDispatch();
	const { firstName, lastName, email, telephone, address, nationality } =
		useAppSelector((state) => state.profile);

	return (
		<div>
			<h4 className="section-header">INFORMATIONS PERSONNELLE</h4>
			<div className="formulaire">
				<FormGroup labelText="Nom">
					<input
						type="text"
						placeholder="Nom"
						name="nom"
						onChange={(e) => dispatch(setFirstName(e.target.value))}
						value={firstName}
					/>
				</FormGroup>

				<FormGroup labelText="Prenom:">
					<input
						type="text"
						placeholder="Prenom"
						name="prenom"
						onChange={(e) => dispatch(setLastName(e.target.value))}
						value={lastName}
					/>
				</FormGroup>
				<FormGroup labelText="Email:">
					<input
						type="email"
						placeholder="example@email.com"
						name="email"
						onChange={(e) => dispatch(setEmail(e.target.value))}
						value={email}
					/>
				</FormGroup>
				<FormGroup labelText="Telephone:">
					<input
						type="tel"
						placeholder="Telephone"
						name="tel"
						onChange={(e) => dispatch(setTelephone(e.target.value))}
						value={telephone}
					/>
				</FormGroup>
				<FormGroup labelText="Nationalite:">
					<input
						type="text"
						placeholder="Nationalite"
						name="nationalite"
						onChange={(e) => dispatch(setNationality(e.target.value))}
						value={nationality}
					/>
				</FormGroup>
				<FormGroup labelText="Address:">
					<input
						type="text"
						placeholder="Address"
						name="address"
						onChange={(e) => dispatch(setAddress(e.target.value))}
						value={address}
					/>
				</FormGroup>
			</div>
		</div>
	);
}

export default Profile;
