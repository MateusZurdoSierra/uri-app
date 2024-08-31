import { AnyAction, combineReducers } from 'redux';
import globalModule from '../../modules/global';
import { RootStateOrAny } from 'react-redux';
// import { LogoutTypes } from './actions/actions.logout';
import { isAllOf } from '@reduxjs/toolkit';

const sagasList: any = [globalModule.redux.sagas()];

const reducersList = {
	global: globalModule.redux.reducers,
};

export const appReducers = combineReducers(reducersList);

export const rootReducers = (state: RootStateOrAny, action: AnyAction) => {
	// if (action.type === LogoutTypes.RESET) {
	// 	state = undefined;
	// }

	return appReducers(state, action);
};

export type ApplicationState = ReturnType<typeof rootReducers>;

export const rootSagas = function* rootSagas(): Generator {
	return yield isAllOf(sagasList);
};
