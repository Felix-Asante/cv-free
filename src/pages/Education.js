import React, { useEffect, useState } from "react";
import FormGroup from "../components/FormGroup";
import Layout from "../components/Layout";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import EducationModule from "../modules/Education";
import {
	setEducationTitle,
	removeContent,
} from "../redux/features/education.slice";
function Education() {
	const [formations, setFormations] = useState([
		<EducationModule key={0} index={0} />,
	]);
	const dispatch = useAppDispatch();
	const { content } = useAppSelector((state) => state.education);
	useEffect(() => {
		if (content.length > 1) {
			const oldContent = [];
			for (let i = 0; i < content.length; i++) {
				oldContent.push(<EducationModule key={i} index={i} />);
			}
			console.log("OLD CONTENT:", oldContent);
			setFormations(oldContent);
		}
	}, []);

	const addFormation = () => {
		setFormations((prevFormation) => [
			...prevFormation,
			<EducationModule key={formations.length} index={formations.length} />,
		]);
	};
	const reduceFormation = () => {
		setFormations(formations.slice(0, -1));
		if (formations.length === content.length) {
			dispatch(removeContent());
		}
	};
	return (
		<Layout prev="/" next="/work">
			<h3 className="section-header">Votre formation</h3>
			<div className="formulaire">
				<div className="heading">
					<FormGroup labelText="Titre de la section">
						<input
							type="text"
							placeholder="Titre de la section"
							onChange={(e) =>
								dispatch(setEducationTitle(e.target.value.trim()))
							}
						/>
					</FormGroup>

					{formations}

					<div className="flex">
						<button
							type="button"
							className="btn-success"
							onClick={() => addFormation()}
						>
							Ajouter une formation
						</button>
						{formations.length > 1 && (
							<button type="button" onClick={() => reduceFormation()}>
								supprimmer
							</button>
						)}
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default Education;
