import { combineReducers } from '@reduxjs/toolkit';
import onboarding from '../../main/redux/onboarding';
import { all } from 'redux-saga/effects';

const sagasList: any = [onboarding.sagas()];

const reducersList = {
	onboarding: onboarding.reducer,
};

export const rootReducers = combineReducers(reducersList);
export const rootCombineReducers = combineReducers(reducersList);

export type ApplicationState = ReturnType<typeof rootCombineReducers>;

export const rootSagas = function* rootSagas(): Generator {
	return yield all(sagasList);
};

