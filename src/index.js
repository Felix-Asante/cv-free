import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Education from "./pages/Education";
import Work from "./pages/Work";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import Awards from "./pages/Awards";
import { Provider } from "react-redux";
import store from "./redux/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<App />} />
					<Route path="/education" element={<Education />} />
					<Route path="/work" element={<Work />} />
					<Route path="/skills" element={<Skills />} />
					<Route path="/projects" element={<Project />} />
					<Route path="/awards" element={<Awards />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
