import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Input from "../components/Input";
import AwardsModule from "../modules/Awards";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { onRemoveAward, setAwardTitle } from "../redux/features/awards.slice";
import FormGroup from "../components/FormGroup";

function Awards() {
	const { awards, awardTitle } = useAppSelector((state) => state.award);
	const dispatch = useAppDispatch();
	const [award, setAward] = useState([<AwardsModule key={0} index={0} />]);

	useEffect(() => {
		if (awards.length > 1) {
			const oldAwards = [];
			for (let i = 0; i < awards.length; i++) {
				oldAwards.push(<AwardsModule key={i} index={i} />);
			}
			setAward(oldAwards);
		}
	}, []);

	const addAward = () => {
		setAward((prev) => [
			...prev,
			<AwardsModule key={award.length} index={award.length} />,
		]);
	};
	const removeAward = () => {
		setAward(award.slice(0, -1));
		if (award.length === awards.length) {
			dispatch(onRemoveAward());
		}
	};
	return (
		<Layout prev="/projects" next="">
			<h3 className="section-header">activités extra-professionnelles</h3>
			<div className="formulaire">
				<div className="heading">
					<FormGroup labelText="Titre de la section">
						<input
							type="text"
							placeholder="Titre de la section"
							onChange={(e) => {
								dispatch(setAwardTitle(e.target.value));
							}}
							value={awardTitle}
						/>
					</FormGroup>
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
