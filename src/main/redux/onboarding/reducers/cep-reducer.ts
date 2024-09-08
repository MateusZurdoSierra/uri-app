import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type FindCepRegisteredPayload = PayloadAction<{
	cep: string;
}>;

export interface OnboardingCepState {
	loading: boolean;
	error: string | null;
}

const initialState: OnboardingCepState = {
	loading: false,
	error: null,
};

const onboardingCepSlice = createSlice({
	name: 'onboarding-cep',
	initialState: initialState,
	reducers: {
		findCepRegistered: (state, _: FindCepRegisteredPayload) => {
			state.loading = true;
			state.error = null;
		},
	},
});

export const OnboardingCepReducers = onboardingCepSlice.reducer;
export const OnboardingCepActions = onboardingCepSlice.actions;
