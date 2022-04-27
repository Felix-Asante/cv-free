import Header from "./components/Header";
import Menu from "./components/Menu";
function App() {
	return (
		<div>
			<Header />
			<div className="flex">
				<Menu />
				<div className="contenu">Contenu</div>
				<div className="affichage">Affichage</div>
			</div>
		</div>
	);
}

export default App;
