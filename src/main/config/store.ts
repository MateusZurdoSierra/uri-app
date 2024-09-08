import { applyMiddleware, compose, createStore } from 'redux';
import ReactotronConfig from './reactotron';
import { replace as NavigatorReplace } from '../../modules/global/utils/rootNavigations';
//@ts-ignore
import applyAppStateListener from 'redux-enhancer-react-native-appstate';
import createSagaMiddleware from 'redux-saga';
import log from '../../modules/global/utils/log';
import { SharedScreenNames } from '../navigation/global';
import { ScreensNameRoot } from '../navigation';
import { getPersistedReducer, getPersistor } from './persist';
import { rootReducers, rootSagas } from '../../lib/redux';

// Configuração dos middlewares
const middlewares = [];
const sagaMonitor = __DEV__
	? ReactotronConfig.createSagaMonitor?.()
	: undefined;

const sagaMiddleware = createSagaMiddleware({
	sagaMonitor,
	onError: error => {
		const message = error.message || 'saga-root-error';
		log(message, error);
		NavigatorReplace(ScreensNameRoot.auth, {
			screens: SharedScreenNames.errorBoundary,
		});
	},
});

middlewares.push(sagaMiddleware);

const composer: any = __DEV__
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
export default store;
