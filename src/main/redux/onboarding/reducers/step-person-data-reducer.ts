import { createSlice } from '@reduxjs/toolkit';

export interface OnboardingStepPersonDataState {
	email: string;
	password: string;
	documents: {
		cpf: string;
		rg: string;
	};
	address: string;
	selfie: string | null;
}

const initialState: OnboardingStepPersonDataState = {
	email: '',
	password: '',
	documents: {
		cpf: '',
		rg: '',
	},
	address: '',
	selfie: null,
};

const stepPersonDataSlice = createSlice({
	name: 'step-person-data',
	initialState,
	reducers: {
		updateEmail: (state, action) => {
			state.email = action.payload;
		},
		updatePassword: (state, action) => {
			state.password = action.payload;
		},
		updateDocuments: (state, action) => {
			state.documents = action.payload;
		},
		updateAddress: (state, action) => {
			state.address = action.payload;
		},
		updateSelfie: (state, action) => {
			state.selfie = action.payload;
		},
		resetOnboarding: () => initialState,
	},
});

export const StepPersonDataReducers = stepPersonDataSlice.reducer;
export const StepPersonDataActions = stepPersonDataSlice.actions;
