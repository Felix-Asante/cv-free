import React from "react";
import FormGroup from "../components/FormGroup";
import Input from "../components/Input";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { setProject } from "../redux/features/project.slice";

function Project({ index }) {
	const { projects } = useAppSelector((state) => state.project);
	const dispatch = useAppDispatch();
	return (
		<div>
			<div className="divider"></div>
			<FormGroup labelText="Nom du projet">
				<input
					type="text"
					placeholder="Nom du projet"
					onChange={(e) =>
						dispatch(
							setProject({
								FIELD: "projectName",
								index,
								value: e.target.value,
							})
						)
					}
					value={projects[index]?.projectName}
				/>
			</FormGroup>
			<FormGroup labelText="Lien du projet">
				<input
					type="text"
					placeholder="Lien vers projet"
					onChange={(e) =>
						dispatch(
							setProject({
								FIELD: "link",
								index,
								value: e.target.value,
							})
						)
					}
					value={projects[index]?.link}
				/>
			</FormGroup>
		</div>
	);
}

export default Project;
