import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	awards: [],
	awardTitle: "",
};
const contentStructure = (field, value, item) => {
	let award;
	if (!item) {
		award = {
			name: "",
			year: "",
			organizationName: "",
		};
	} else {
		award = { ...item };
	}

	award[field] = value;

	return award;
};
const awardSlice = createSlice({
	name: "project",
	initialState,
	reducers: {
		setAward(state, action) {
			const item = state.awards[action.payload.index];
			const content = contentStructure(
				action.payload.FIELD,
				action.payload.value,
				item
			);

			state.awards[action.payload.index] = content;
		},
		onRemoveAward(state, action) {
			state.awards = state.awards.slice(0, -1);
		},
		setAwardTitle(state, action) {
			state.awardTitle = action.payload;
		},
	},
});

export const { setAward, setAwardTitle, onRemoveAward } = awardSlice.actions;
export default awardSlice.reducer;
