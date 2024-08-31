import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeModules } from 'react-native';
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

declare global {
	interface Console {
		tron: typeof Reactotron;
	}
}

let tron: typeof Reactotron = Reactotron;

if (__DEV__) {
	tron = Reactotron.configure({
		name: 'OlhoNoLance',
		host: NativeModules.SourceCode.scriptURL.split('://')[1].split(':')[0],
	})
		.setAsyncStorageHandler?.(AsyncStorage)
		.useReactNative({
			asyncStorage: false,
			overlay: false,
		})
		.use(reactotronRedux())
		.use(sagaPlugin({}) as any)
		.connect();

	tron.clear?.();

	console.tron = tron;
}

export default tron;
