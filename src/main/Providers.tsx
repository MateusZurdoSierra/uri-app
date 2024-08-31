import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import ThemeProvider from './styles/theme/ThemeProvider';

import theme from './styles/theme';
import MyApp from './App';

import {
	navigationAnalytics,
	navigationRef,
} from '../modules/global/utils/rootNavigations';

const Providers: React.FC = () => {
	return (
		<ThemeProvider theme={theme}>
			<NavigationContainer
				ref={navigationRef}
				onStateChange={navigationAnalytics.onNavigatorStateChange}>
				<MyApp />
			</NavigationContainer>
		</ThemeProvider>
	);
};

export default Providers;
