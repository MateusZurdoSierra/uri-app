import { Reducer, Store } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import {
	seamlessImmutableReconciler,
	seamlessImmutableTransformCreator, //@ts-ignore
} from 'redux-persist-seamless-immutable';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { ApplicationState } from '../../lib/redux';

const transformerConfigRoot = {
	whitelistPerReducer: {},
	blacklistPerReducer: {
		auth: ['appStart', 'loading', 'error'],
	},
};

const rootPersist = {
	key: 'root',
	storage: AsyncStorage,
	stateReconciler: seamlessImmutableReconciler,
	transforms: [seamlessImmutableTransformCreator(transformerConfigRoot)],
	whitelist: [],
	timeout: undefined,
};

export const getPersistedReducer = (rootReducer: Reducer<ApplicationState>) => {
	return persistReducer<ApplicationState>(rootPersist, rootReducer);
};

export const getPersistor = (store: Store<ApplicationState>) =>
	persistStore(store);
