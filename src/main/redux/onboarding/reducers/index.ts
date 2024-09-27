import { combineReducers } from '@reduxjs/toolkit';
import { OnboardingCepActions, OnboardingCepReducers } from './cep-reducer';
import { OnboardingPersonActions, OnboardingPersonReducers } from './person-reducer';

export const OnboardingActions = {
	cep: OnboardingCepActions,
	person: OnboardingPersonActions,
};

export const OnboardingReducers = combineReducers({
	cep: OnboardingCepReducers,
	person: OnboardingPersonReducers,
});
