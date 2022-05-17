import { useState } from "react";
import Layout from "../components/Layout";
import Input from "../components/Input";
import AwardsModule from "../modules/Awards";
function Awards() {
	const [award, setAward] = useState([<AwardsModule key={0} />]);

	const addAward = () => {
		setAward((prev) => [...prev, <AwardsModule key={award.length} />]);
	};
	const removeAward = () => {
		setAward(award.slice(0, -1));
	};
	return (
		<Layout prev="/projects" next="">
			<h3 className="section-header">activités extra-professionnelles</h3>
			<div className="formulaire">
				<div className="heading">
					<Input
						type="text"
						placeholder="Titre de la section"
						labelText="Titre de la section"
					/>
				</div>
				{award}
				<div className="flex">
					<button
						type="button"
						className="btn-success"
						onClick={() => addAward()}
					>
						Ajouter une activite
					</button>
					{award.length > 1 && (
						<button type="button" onClick={() => removeAward()}>
							supprimmer
						</button>
					)}
				</div>
			</div>
		</Layout>
	);
}

export default Awards;
