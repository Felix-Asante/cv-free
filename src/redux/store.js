import { configureStore } from "@reduxjs/toolkit";
import educationReducer from "./features/education.slice.js";
import profileReducer from "./features/profile.slice.js";
const store = configureStore({
	reducer: {
		profile: profileReducer,
		education: educationReducer,
	},
});

export default store;
