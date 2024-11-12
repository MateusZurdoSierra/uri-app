import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PersonProps {
	name: string;
	phone: string;
	email: string;
	zipCode: string;
}

export type PersonPayload = PayloadAction<{
	person: PersonProps;
}>;

export interface OnboardingPersonState {
	person: PersonProps;
	loading: boolean;
	error: string | null;
}

const initialState: OnboardingPersonState = {
	person: { name: '', email: '', phone: '', zipCode: '' },
	loading: false,
	error: null,
};

const onboardingPersonSlice = createSlice({
	name: 'onboarding-person',
	initialState: initialState,
	reducers: {
		statusPerson: (state, action: PersonPayload) => {
			state.loading = true;
			state.error = null;
			state.person = action.payload.person;
		},
		statusPersonSuccess: (state, action: PersonPayload) => {
			state.loading = false;
			state.error = null;
			state.person = action.payload.person;
		},
		statusPersonFailure: (state, action: PayloadAction<string>) => {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const OnboardingPersonReducers = onboardingPersonSlice.reducer;
export const OnboardingPersonActions = onboardingPersonSlice.actions;
