import React, { useState } from "react";
import Layout from "../components/Layout";
import SkillsModule from "../modules/Skills";
import FormGroup from "../components/FormGroup";
function Skills() {
	const [skillsModule, setSkillsModule] = useState([
		<SkillsModule key={0} index={0} />,
	]);

	const addSkills = () => {
		setSkillsModule((prev) => [
			...prev,
			<SkillsModule key={skillsModule.length} index={skillsModule.length} />,
		]);
	};
	const removeSkills = () => {
		setSkillsModule(skillsModule.slice(0, -1));
		// if (project.length === projects.length) {
		// 	dispatch(onRemoveProject());
		// }
	};

	return (
		<Layout prev="/work" next="/projects">
			<h4 className="section-header">Vos competence</h4>
			<FormGroup labelText="Titre de la section">
				<input type="text" placeholder="Titre de la section" />
			</FormGroup>
			{skillsModule}
			<div className="flex">
				<button
					type="button"
					className="btn-success"
					onClick={() => addSkills()}
				>
					Ajouter un projet
				</button>
				{skillsModule.length > 1 && (
					<button type="button" onClick={() => removeSkills()}>
						supprimmer
					</button>
				)}
			</div>
		</Layout>
	);
}

export default Skills;
