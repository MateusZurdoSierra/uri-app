import React, { useEffect } from 'react';
import { AppRegistry } from 'react-native';
import { expo as appName } from './app.config';
import Providers from './src/main/Providers';
import './src/main/config/reactotron';

export default function App() {
	useEffect(() => {
		if (__DEV__) {
			console.tron.log('Hello from Reactotron!');
		}
	}, []);

	return <Providers />;
}

AppRegistry.registerComponent(appName.name, () => App);
