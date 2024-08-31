import { applyMiddleware, compose, createStore } from 'redux';

import ReactotronConfig from './reactotron';

import { replace as NavigatorReplace } from '../../modules/global/utils/rootNavigations';

//@ts-ignore
import applyAppStateListener from 'redux-enhancer-react-native-appstate';
import createSagaMiddleware from 'redux-saga';
import log from '../../modules/global/utils/log';
import { SharedScreenNames } from '../navigation/global';
import { ScreensNameRoot } from '../navigation';
import { rootReducers, rootSagas } from '../redux';
import { getPersistedReducer, getPersistor } from './persist';

const middlewares = [];
const sagaMonitor = __DEV__
	? ReactotronConfig.createSagaMonitor?.()
	: undefined;

const sagaMiddleware = createSagaMiddleware({
	sagaMonitor,
	onError: error => {
		const message = error.message || 'saga-root-error';
		log(message, error);
		NavigatorReplace(ScreensNameRoot.global, {
			screens: SharedScreenNames.errorBoundary,
		});
	},
});

middlewares.push(sagaMiddleware);

const composer = __DEV__
	? compose(
			applyAppStateListener(),
			applyMiddleware(...middlewares),
			// @ts-ignore - this is only undefined if not in __DEV__
			ReactotronConfig.createEnhancer(),
	  )
	: compose(applyAppStateListener(), applyMiddleware(...middlewares));

const persistedReducer = getPersistedReducer(rootReducers);

const store = createStore(persistedReducer, composer);
sagaMiddleware.run(rootSagas);

export const persistor = getPersistor(store);
// persistor.purge();
export default store;
