import React from "react";
import FormGroup from "../components/FormGroup";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { setContent } from "../redux/features/education.slice";
function Education({ index }) {
	const dispatch = useAppDispatch();
	const { content } = useAppSelector((state) => state.education);
	return (
		<div>
			<div className="divider"></div>
			<FormGroup labelText="Etablissement">
				<input
					type="text"
					placeholder="Nom de l'établissement"
					onChange={(e) =>
						dispatch(
							setContent({
								FIELD: "school",
								index,
								value: e.target.value.trim(),
							})
						)
					}
					value={content[index]?.school}
				/>
			</FormGroup>
			<FormGroup labelText="Lieu">
				<input
					type="text"
					placeholder="Ville et Pays"
					onChange={(e) =>
						dispatch(
							setContent({
								FIELD: "location",
								index,
								value: e.target.value.trim(),
							})
						)
					}
					value={content[index]?.location}
				/>
			</FormGroup>
			<FormGroup labelText="Annee academique">
				<input
					type="text"
					placeholder="Annee academique"
					onChange={(e) =>
						dispatch(
							setContent({
								FIELD: "year",
								index,
								value: e.target.value.trim(),
							})
						)
					}
					value={content[index]?.year}
				/>
			</FormGroup>
			<FormGroup labelText="Filière">
				<input
					type="text"
					placeholder="Filière"
					onChange={(e) =>
						dispatch(
							setContent({
								FIELD: "course",
								index,
								value: e.target.value.trim(),
							})
						)
					}
					value={content[index]?.course}
				/>
			</FormGroup>
			<FormGroup labelText="Niveau">
				<input
					type="text"
					placeholder="Niveau"
					onChange={(e) =>
						dispatch(
							setContent({
								FIELD: "level",
								index,
								value: e.target.value.trim(),
							})
						)
					}
					value={content[index]?.level}
				/>
			</FormGroup>
		</div>
	);
}

export default Education;
