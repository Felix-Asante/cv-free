import React from "react";
import FormGroup from "../components/FormGroup";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { setWork } from "../redux/features/work.slice";

function Work({ index }) {
	const dispatch = useAppDispatch();
	const { works } = useAppSelector((state) => state.work);
	return (
		<div>
			<div className="divider"></div>
			<FormGroup labelText="Company Name">
				<input
					type="text"
					placeholder="Company Name"
					onChange={(e) =>
						dispatch(
							setWork({
								FIELD: "company",
								index,
								value: e.target.value.trim(),
							})
						)
					}
					value={works[index]?.company}
				/>
			</FormGroup>
			<FormGroup labelText="Titre du poste">
				<input
					type="text"
					placeholder="Titre du poste"
					onChange={(e) =>
						dispatch(
							setWork({
								FIELD: "position",
								index,
								value: e.target.value.trim(),
							})
						)
					}
					value={works[index]?.position}
				/>
			</FormGroup>
			<FormGroup labelText="Addresse">
				<input
					type="text"
					placeholder="Addresse de l'entreprise"
					onChange={(e) =>
						dispatch(
							setWork({
								FIELD: "companyAddress",
								index,
								value: e.target.value.trim(),
							})
						)
					}
					value={works[index]?.companyAddress}
				/>
			</FormGroup>
			<FormGroup labelText="Date de debut">
				<input
					type="text"
					placeholder="Date de debut"
					onChange={(e) =>
						dispatch(
							setWork({
								FIELD: "startDate",
								index,
								value: e.target.value.trim(),
							})
						)
					}
					value={works[index]?.startDate}
				/>
			</FormGroup>
			<FormGroup labelText="Date de fin">
				<input
					type="text"
					placeholder="Date de fin"
					onChange={(e) =>
						dispatch(
							setWork({
								FIELD: "endDate",
								index,
								value: e.target.value.trim(),
							})
						)
					}
					value={works[index]?.endDate}
				/>
			</FormGroup>
			<div className="textarea">
				<label htmlFor="desc">Vos reponsibilites</label>
				<textarea
					name="description"
					placeholder="Ecrivez ici"
					onChange={(e) =>
						dispatch(
							setWork({
								FIELD: "responsibility",
								index,
								value: e.target.value.trim(),
							})
						)
					}
					value={works[index]?.responsibility}
				></textarea>
			</div>
		</div>
	);
}

export default Work;
