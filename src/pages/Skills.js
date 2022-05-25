import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import SkillsModule from "../modules/Skills";
import FormGroup from "../components/FormGroup";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { onRemoveSkills, setSkillTitle } from "../redux/features/skills.slice";
function Skills() {
	const { skillTitle, competence } = useAppSelector((state) => state.skill);
	const dispatch = useAppDispatch();
	const [skillsModule, setSkillsModule] = useState([
		<SkillsModule key={0} index={0} />,
	]);

	useEffect(() => {
		if (competence.length > 1) {
			const oldCompetence = [];
			for (let i = 0; i < competence.length; i++) {
				oldCompetence.push(<SkillsModule key={i} index={i} />);
			}
			setSkillsModule(oldCompetence);
		}
	}, []);

	const addSkills = () => {
		setSkillsModule((prev) => [
			...prev,
			<SkillsModule key={skillsModule.length} index={skillsModule.length} />,
		]);
	};
	const removeSkills = () => {
		setSkillsModule(skillsModule.slice(0, -1));
		if (skillsModule.length === competence.length) {
			dispatch(onRemoveSkills());
		}
	};

	return (
		<Layout prev="/work" next="/projects">
			<h4 className="section-header">Vos competence</h4>
			<FormGroup labelText="Titre de la section">
				<input
					type="text"
					placeholder="Titre de la section"
					onChange={(e) => dispatch(setSkillTitle(e.target.value))}
					value={skillTitle}
				/>
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
