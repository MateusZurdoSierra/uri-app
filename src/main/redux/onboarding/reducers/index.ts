import { combineReducers } from '@reduxjs/toolkit';
import { OnboardingCepActions, OnboardingCepReducers } from './cep-reducer';

export const OnboardingActions = {
	cep: OnboardingCepActions,
};

export const OnboardingReducers = combineReducers({
	cep: OnboardingCepReducers,
});
