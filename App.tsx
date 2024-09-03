import React from 'react';
import { AppRegistry } from 'react-native';
import { expo as appName } from './app.json';
import Providers from './src/main/Providers';

export default function App() {
	return <Providers />;
}

AppRegistry.registerComponent(appName.name, () => App);
