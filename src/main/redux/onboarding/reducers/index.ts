import { combineReducers } from '@reduxjs/toolkit';
import { OnboardingCepActions, OnboardingCepReducers } from './cep-reducer';
import {
	OnboardingPersonActions,
	OnboardingPersonReducers,
} from './person-reducer';
import {
	StepPersonDataActions,
	StepPersonDataReducers,
} from './step-person-data-reducer';

export const OnboardingActions = {
	cep: OnboardingCepActions,
	person: OnboardingPersonActions,
	stepPersonData: StepPersonDataActions,
};

export const OnboardingReducers = combineReducers({
	cep: OnboardingCepReducers,
	person: OnboardingPersonReducers,
	stepPersonData: StepPersonDataReducers,
});
