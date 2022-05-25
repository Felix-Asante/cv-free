import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	skillTitle: "",
	competence: [],
};

const createCompetenceTitle = (text, item) => {
	let content;
	if (!item) {
		content = {
			title: "",
			items: [],
		};
	} else {
		content = {
			title: text,
			items: item.items.length === 0 ? [] : item.items,
		};
	}

	return content;
};
const competenceSkills = (item, payload) => {
	let content;
	if (!item) {
		content = {
			title: "",
			items: [],
		};
	} else {
		item.items[payload.step] = payload.text;
		content = {
			title: item.title ? item.title : "",
			items: item.items,
		};
	}

	return content;
};
const skillSlice = createSlice({
	name: "skills",
	initialState,
	reducers: {
		setCompetenceTitle(state, action) {
			const item = state.competence[action.payload.index];
			const result = createCompetenceTitle(action.payload.text, item);
			state.competence[action.payload.index] = result;
		},
		setCompetenceSkill(state, action) {
			const item = state.competence[action.payload.index];
			const result = competenceSkills(item, action.payload);
			state.competence[action.payload.index] = result;
		},
		onRemoveSkills(state, action) {
			state.competence = state.competence.slice(0, -1);
		},
		onCompetenceSkillRemove(state, action) {
			const item = state.competence[action.payload.index].items;
			state.competence[action.payload.index].items = item.slice(
				action.payload.step,
				1
			);
		},
		setSkillTitle(state, action) {
			state.skillTitle = action.payload;
		},
	},
});

export const {
	setSkillTitle,
	setCompetenceTitle,
	setCompetenceSkill,
	onRemoveSkills,
	onCompetenceSkillRemove,
} = skillSlice.actions;
export default skillSlice.reducer;
