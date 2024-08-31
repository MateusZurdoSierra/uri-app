import { ImmutableObject } from 'seamless-immutable';
import { AppState } from '../types/types.appstate';
import { ModalState } from '../../utils/Modal/redux/types.modal';

export enum GlobalReducers {
	root = 'global',
	appstate = 'appstate',
}

export interface GlobalRootState {
	[GlobalReducers.appstate]: AppState;
}
export interface GlobalState {
	[GlobalReducers.root]: ImmutableObject<GlobalRootState>;
}
