import { configureStore, createSlice } from "@reduxjs/toolkit";
import awardsReducer from "./features/awards.slice.js";
import educationReducer from "./features/education.slice.js";
import profileReducer from "./features/profile.slice.js";
import projectReducer from "./features/project.slice.js";
import skillsReducer from "./features/skills.slice.js";
import workReducer from "./features/work.slice.js";
import cv from "../assets/blank.pdf";

const initialState = {
	document: cv,
};

const generalSlice = createSlice({
	name: "general",
	initialState,
	reducers: {
		setDocument(state, action) {
			state.document = action.payload;
		},
	},
});

export const { setDocument } = generalSlice.actions;
export const generalReducer = generalSlice.reducer;

const store = configureStore({
	reducer: {
		profile: profileReducer,
		education: educationReducer,
		work: workReducer,
		project: projectReducer,
		award: awardsReducer,
		skill: skillsReducer,
		general: generalReducer,
	},
});

export default store;
