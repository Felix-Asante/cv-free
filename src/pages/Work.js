import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import FormGroup from "../components/FormGroup";
import Layout from "../components/Layout";
import { useAppSelector } from "../hooks/useRedux";
import WorkModule from "../modules/Work";
import { removeWork, setWorkTitle } from "../redux/features/work.slice";
function Work() {
	const { works, workTitle } = useAppSelector((state) => state.work);
	const dispatch = useDispatch();

	const [experience, setExperience] = useState([
		<WorkModule key={0} index={0} />,
	]);

	useEffect(() => {
		if (works.length > 1) {
			const oldWorks = [];
			for (let i = 0; i < works.length; i++) {
				oldWorks.push(<WorkModule key={i} index={i} />);
			}
			setExperience(oldWorks);
		}
	}, []);

	const addExperience = () => {
		setExperience((prevExperience) => [
			...prevExperience,
			<WorkModule key={experience.length} index={experience.length} />,
		]);
	};
	const reduceExperience = () => {
		setExperience(experience.slice(0, -1));
		if (experience.length === works.length) {
			dispatch(removeWork());
		}
	};

	return (
		<Layout prev="/education" next="/skills">
			<h3 className="section-header">Vos Experiences</h3>
			<div className="formulaire">
				<div className="heading">
					<FormGroup labelText="Titre de la section">
						<input
							type="text"
							placeholder="Titre de la section"
							onChange={(e) => dispatch(setWorkTitle(e.target.value))}
							value={workTitle}
						/>
					</FormGroup>

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
