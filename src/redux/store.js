import { configureStore } from "@reduxjs/toolkit";
import awardsReducer from "./features/awards.slice.js";
import educationReducer from "./features/education.slice.js";
import profileReducer from "./features/profile.slice.js";
import projectReducer from "./features/project.slice.js";
import skillsReducer from "./features/skills.slice.js";
import workReducer from "./features/work.slice.js";
const store = configureStore({
	reducer: {
		profile: profileReducer,
		education: educationReducer,
		work: workReducer,
		project: projectReducer,
		award: awardsReducer,
		skill: skillsReducer,
	},
});

export default store;
