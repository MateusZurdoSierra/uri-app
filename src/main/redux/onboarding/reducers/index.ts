import { combineReducers } from '@reduxjs/toolkit';
import {
	OnboardingPersonActions,
	OnboardingPersonReducers,
} from './person-reducer';
import {
	StepPersonDataActions,
	StepPersonDataReducers,
} from './step-person-data-reducer';

export const OnboardingActions = {
	person: OnboardingPersonActions,
	stepPersonData: StepPersonDataActions,
};

export const OnboardingReducers = combineReducers({
	person: OnboardingPersonReducers,
	stepPersonData: StepPersonDataReducers,
});
