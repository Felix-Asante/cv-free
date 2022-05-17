import Input from "../components/Input";
function AwardsModule() {
	return (
		<div>
			<div className="divider"></div>
			<Input
				type="text"
				placeholder="Nom de la formation"
				labelText="Nom de la formation"
			/>
			<Input type="number" placeholder="Annee" labelText="Annee d'obtension" />
			<Input
				type="text"
				placeholder="Nom de l'organisation"
				labelText="Organisation"
			/>
		</div>
	);
}

export default AwardsModule;
