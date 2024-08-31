import { Action } from 'redux';
import { ImmutableObject } from 'seamless-immutable';

export enum AppStateType {
	foreground = 'FOREGROUND',
	background = 'BACKGROUND',
	inactive = 'INACTIVE',
}

export enum AppSyncStateType {
	syncEnvironment = 'SYNC_ENVIRONMENT',
	connectServer = 'CONNECT_SERVER',
	syncMessages = 'SYNC_MESSAGES',
}

export interface NetworkState {
	isConnected: boolean;
}

export interface AppStateActionTypes {
	APP_SYNC_STATE: string;
}

export interface AppSyncState extends Action<AppStateActionTypes> {
	state: AppSyncStateType;
}

export interface CreatorTypes {
	appSyncState(state: AppSyncStateType): AppSyncState;
}

export interface AppStateMetadata {
	appState: AppStateType | null;
	previousAppState: AppStateType | null;
	appSyncState: AppSyncStateType | null;
}

interface State {
	appState: AppStateType | null;
	previousAppState: AppStateType | null;
	appSyncState: AppSyncStateType | null;
}

export type AppState = ImmutableObject<State>;

export type ReducerTypes = AppSyncState;
