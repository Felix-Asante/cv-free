import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	firstName: "",
	lastName: "",
	email: "",
	telephone: "",
	nationality: "",
	address: "",
};

const profileSlice = createSlice({
	name: "profile",
	initialState,
	reducers: {
		setFirstName(state, action) {
			state.firstName = action.payload;
		},
		setLastName(state, action) {
			state.lastName = action.payload;
		},
		setEmail(state, action) {
			state.email = action.payload;
		},
		setTelephone(state, action) {
			state.telephone = action.payload;
		},
		setNationality(state, action) {
			state.nationality = action.payload;
		},
		setAddress(state, action) {
			state.address = action.payload;
		},
	},
});

export const {
	setFirstName,
	setLastName,
	setEmail,
	setTelephone,
	setNationality,
	setAddress,
} = profileSlice.actions;
export default profileSlice.reducer;
