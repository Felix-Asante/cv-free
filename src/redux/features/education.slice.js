import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	content: [],
	educationTitle: "",
};
const contentStructure = (field, value, item) => {
	let myObj;
	if (!item) {
		myObj = {
			school: "",
			location: "",
			year: "",
			course: "",
			level: "",
		};
	} else {
		myObj = { ...item };
	}

	myObj[field] = value;

	return myObj;
};
const educationSlice = createSlice({
	name: "education",
	initialState,
	reducers: {
		setContent(state, action) {
			const item = state.content[action.payload.index];
			const content = contentStructure(
				action.payload.FIELD,
				action.payload.value,
				item
			);

			state.content[action.payload.index] = content;
		},
		removeContent(state, action) {
			state.content = state.content.slice(0, -1);
		},
		setEducationTitle(state, action) {
			state.educationTitle = action.payload;
		},
	},
});

export const { setContent, setEducationTitle, removeContent } =
	educationSlice.actions;
export default educationSlice.reducer;
