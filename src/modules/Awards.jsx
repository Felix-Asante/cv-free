import FormGroup from "../components/FormGroup";
import { useAppSelector, useAppDispatch } from "../hooks/useRedux";
import { setAward } from "../redux/features/awards.slice";
function AwardsModule({ index }) {
	const { awards } = useAppSelector((state) => state.award);
	const dispatch = useAppDispatch();
	return (
		<div>
			<div className="divider"></div>
			<FormGroup labelText="Nom de la formation">
				<input
					type="text"
					placeholder="Nom de la formation"
					onChange={(e) => {
						dispatch(
							setAward({
								FIELD: "name",
								index,
								value: e.target.value,
							})
						);
					}}
					value={awards[index]?.name}
				/>
			</FormGroup>
			<FormGroup labelText="Annee d'obtension">
				<input
					type="number"
					placeholder="Annee"
					onChange={(e) => {
						dispatch(
							setAward({
								FIELD: "year",
								index,
								value: e.target.value,
							})
						);
					}}
					value={awards[index]?.year}
				/>
			</FormGroup>
			<FormGroup labelText="Organisation">
				<input
					type="text"
					placeholder="Nom de l'organisation"
					onChange={(e) => {
						dispatch(
							setAward({
								FIELD: "organizationName",
								index,
								value: e.target.value,
							})
						);
					}}
					value={awards[index]?.organizationName}
				/>
			</FormGroup>
		</div>
	);
}

export default AwardsModule;
