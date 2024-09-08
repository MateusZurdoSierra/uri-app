import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import ThemeProvider from './styles/theme/ThemeProvider';
import { Provider } from 'react-redux';

import theme from './styles/theme';
import MyApp from './App';

import {
	navigationAnalytics,
	navigationRef,
} from '../modules/global/utils/rootNavigations';
import store from './config/store';

const Providers: React.FC = () => {
	return (
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<NavigationContainer
					ref={navigationRef}
					onStateChange={navigationAnalytics.onNavigatorStateChange}>
					<MyApp />
				</NavigationContainer>
			</Provider>
		</ThemeProvider>
	);
};

export default Providers;
