import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	projects: [],
	projectTitle: "",
};
const contentStructure = (field, value, item) => {
	let project;
	if (!item) {
		project = {
			projectName: "",
			link: "",
		};
	} else {
		project = { ...item };
	}

	project[field] = value;

	return project;
};
const projectSlice = createSlice({
	name: "project",
	initialState,
	reducers: {
		setProject(state, action) {
			const item = state.projects[action.payload.index];
			const content = contentStructure(
				action.payload.FIELD,
				action.payload.value,
				item
			);

			state.projects[action.payload.index] = content;
		},
		onRemoveProject(state, action) {
			state.projects = state.projects.slice(0, -1);
		},
		setProjectTitle(state, action) {
			state.projectTitle = action.payload;
		},
	},
});

export const { setProject, setProjectTitle, onRemoveProject } =
	projectSlice.actions;
export default projectSlice.reducer;
