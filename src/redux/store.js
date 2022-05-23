import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./features/profile.slice.js";
const store = configureStore({
	reducer: {
		profile: profileReducer,
	},
});

export default store;
