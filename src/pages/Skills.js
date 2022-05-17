import React from "react";
import Layout from "../components/Layout";
import SkillsModule from "../modules/Skills";
import Input from "../components/Input";
function Skills() {
	return (
		<Layout prev="/work" next="/projects">
			<h4 className="section-header">Vos competence</h4>
			<Input
				type="text"
				placeholder="Titre de la section"
				labelText="Titre de la section"
			/>
			<SkillsModule />
		</Layout>
	);
}

export default Skills;
