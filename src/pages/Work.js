import React, { useState } from "react";
import Input from "../components/Input";
import Layout from "../components/Layout";
import WorkModule from "../modules/Work";

function Work() {
	const [experience, setExperience] = useState([<WorkModule key={0} />]);

	const addExperience = () => {
		setExperience((prevExperience) => [
			...prevExperience,
			<WorkModule key={experience.length} />,
		]);
	};
	const reduceExperience = () => {
		setExperience(experience.slice(0, -1));
	};
	return (
		<Layout prev="/education" next="/skills">
			<h3 className="section-header">Vos Experiences</h3>
			<div className="formulaire">
				<div className="heading">
					<Input
						type="text"
						placeholder="Titre de la section"
						labelText="Titre de la section"
					/>

					{experience}

					<div className="flex">
						<button
							type="button"
							className="btn-success"
							onClick={() => addExperience()}
						>
							Ajouter une experience
						</button>
						{experience.length > 1 && (
							<button type="button" onClick={() => reduceExperience()}>
								supprimmer
							</button>
						)}
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default Work;
