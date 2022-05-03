import React, { useState } from "react";
import Input from "../components/Input";
import Layout from "../components/Layout";
import EducationModule from "../modules/Education";

function Education() {
	const [formations, setFormations] = useState([<EducationModule key={0} />]);

	const addFormation = () => {
		setFormations((prevFormation) => [
			...prevFormation,
			<EducationModule key={formations.length} />,
		]);
	};
	const reduceFormation = () => {
		setFormations(formations.slice(0, -1));
	};
	return (
		<Layout>
			<h3 className="section-header">Votre formation</h3>
			<div className="formulaire">
				<div className="heading">
					<Input
						type="text"
						placeholder="Titre de la section"
						labelText="Titre de la section"
					/>

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
