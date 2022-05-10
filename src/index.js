import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Education from "./pages/Education";
import Work from "./pages/Work";
import Skills from "./pages/Skills";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/education" element={<Education />} />
				<Route path="/work" element={<Work />} />
				<Route path="/skills" element={<Skills />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
