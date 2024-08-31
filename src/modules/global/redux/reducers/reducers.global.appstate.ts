import { createAction } from "@reduxjs/toolkit";
import { GlobalReducers } from "../models/model.redux";
import Immutable from 'seamless-immutable';

import {
	AppState,
	AppStateActionTypes,
	AppStateType,
	CreatorTypes,
} from '../types/types.appstate';

import {
	BACKGROUND,
	FOREGROUND,
	INACTIVE,
} from 'redux-enhancer-react-native-appstate';

const { Types, Creators } = createAction<AppStateActionTypes, CreatorTypes>(
	{
		appSyncState: ['state'],
	},
	{
		prefix: `${GlobalReducers.root}/${GlobalReducers.appstate}/`,
	},
);

const INITIAl_STATE: AppState = Immutable({
	previousAppState: null,
	appState: null,
	appSyncState: null,
});

export function reducer(state = INITIAl_STATE, action: any) {
	switch (action.type) {
		case FOREGROUND:
			return state.merge({
				appState: AppStateType.foreground,
				previousAppState: state.appState,
			});
		case BACKGROUND:
			return state.merge({
				appState: AppStateType.background,
				previousAppState: state.appState,
			});
		case INACTIVE:
			return state.merge({
				appState: AppStateType.inactive,
				previousAppState: state.appState,
			});
		case Types.APP_SYNC_STATE:
			return state.merge({
				appSyncState: action.state,
			});
		default:
			return state;
	}
}

export const AppStateActions = Creators;
export const AppStateTypes = Types;
