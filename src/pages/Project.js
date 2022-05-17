import { useState } from "react";
import Input from "../components/Input";
import Layout from "../components/Layout";
import ProjectModule from "../modules/Project";

function Project() {
	const [project, setProject] = useState([<ProjectModule key={0} />]);

	const addProject = () => {
		setProject((prev) => [...prev, <ProjectModule key={project.length} />]);
	};
	const removeProject = () => {
		setProject(project.slice(0, -1));
	};
	return (
		<Layout prev="/skills" next="/awards">
			<h3 className="section-header">Vos Projets</h3>
			<div className="formuliare">
				<div className="heading">
					<Input
						type="text"
						placeholder="Titre de la section"
						labelText="Titre de la section"
					/>
				</div>
				{project}
				<div className="flex">
					<button
						type="button"
						className="btn-success"
						onClick={() => addProject()}
					>
						Ajouter un projet
					</button>
					{project.length > 1 && (
						<button type="button" onClick={() => removeProject()}>
							supprimmer
						</button>
					)}
				</div>
			</div>
		</Layout>
	);
}

export default Project;
