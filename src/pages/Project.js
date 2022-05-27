import { useState, useEffect } from "react";
import FormGroup from "../components/FormGroup";
import Input from "../components/Input";
import Layout from "../components/Layout";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import ProjectModule from "../modules/Project";
import {
	onRemoveProject,
	setProjectTitle,
} from "../redux/features/project.slice";

function Project() {
	const { projects, projectTitle } = useAppSelector((state) => state.project);
	const dispatch = useAppDispatch();
	const [project, setProject] = useState([<ProjectModule key={0} index={0} />]);

	useEffect(() => {
		if (projects.length > 1) {
			const oldProjects = [];
			for (let i = 0; i < projects.length; i++) {
				oldProjects.push(<ProjectModule key={i} index={i} />);
			}
			setProject(oldProjects);
		}
	}, []);

	const addProject = () => {
		setProject((prev) => [
			...prev,
			<ProjectModule key={project.length} index={project.length} />,
		]);
	};
	const removeProject = () => {
		setProject(project.slice(0, -1));
		if (project.length === projects.length) {
			dispatch(onRemoveProject());
		}
	};

	return (
		<Layout prev="/skills" next="/awards">
			<h3 className="section-header">Vos Projets</h3>
			<div className="formuliare">
				<div className="heading">
					<FormGroup labelText="Titre de la section">
						<input
							type="text"
							placeholder="Titre de la section"
							onChange={(e) => {
								dispatch(setProjectTitle(e.target.value));
							}}
							value={projectTitle}
						/>
					</FormGroup>
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
