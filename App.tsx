import React, { useEffect, useState } from 'react';
import { AppRegistry, View } from 'react-native';

import AppLoading from './src/modules/global/components/AppLoading';
import { expo as appName } from './app.config';
import Providers from './src/main/Providers';
import './src/main/config/reactotron';
import * as Font from 'expo-font';

const loadFonts = async () => {
  await Font.loadAsync({
    'Inter-Thin': require('./assets/fonts/Inter-Thin.ttf'),
    'Inter-ExtraLight': require('./assets/fonts/Inter-ExtraLight.ttf'),
    'Inter-Light': require('./assets/fonts/Inter-Light.ttf'),
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf'),
    'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    'Inter-ExtraBold': require('./assets/fonts/Inter-ExtraBold.ttf'),
    'Inter-Black': require('./assets/fonts/Inter-Black.ttf'),
  });
};

export default function App() {
	const [fontsLoaded, setFontsLoaded] = useState(false);

	useEffect(() => {
    (async () => {
      await loadFonts();
      setFontsLoaded(true);
    })();
  }, []);

	useEffect(() => {
		if (__DEV__) {
			console.tron.log('Hello from Reactotron!');
		}
	}, []);

	if (!fontsLoaded) {
    return <AppLoading />;
  }

	return <Providers />;
}

AppRegistry.registerComponent(appName.name, () => App);
