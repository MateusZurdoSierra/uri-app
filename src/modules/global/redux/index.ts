function* sagas() {
	return yield all([sagaDeeplink(), sagaStore()]);
}

const reducers = combineReducers({
	[GlobalReducers.appstate]: reducerAppState,
});

export default {
	reducers,
	sagas,
};
