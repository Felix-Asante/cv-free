import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	works: [],
	workTitle: "",
};
const contentStructure = (field, value, item) => {
	let work;
	if (!item) {
		work = {
			company: "",
			position: "",
			companyAddress: "",
			startDate: "",
			endDate: "",
			responsibility: "",
		};
	} else {
		work = { ...item };
	}

	work[field] = value;

	return work;
};
const workSlice = createSlice({
	name: "work",
	initialState,
	reducers: {
		setWork(state, action) {
			const item = state.works[action.payload.index];
			const content = contentStructure(
				action.payload.FIELD,
				action.payload.value,
				item
			);

			state.works[action.payload.index] = content;
		},

		setWorkTitle(state, action) {
			state.workTitle = action.payload;
		},
		removeWork(state, action) {
			state.works = state.works.slice(0, -1);
		},
	},
});

export const { setWork, setWorkTitle, removeWork } = workSlice.actions;
export default workSlice.reducer;
