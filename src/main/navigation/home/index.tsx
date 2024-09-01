import React from 'react';

import Home from '../../../presentation/screens/home/Home';
import {
	createStackNavigator,
	TransitionPresets,
} from '@react-navigation/stack';

export enum HomeScreensNavigations {
	home = 'HomeScreen',
}

export type HomeNavigatorParamList = {
	[HomeScreensNavigations.home]: undefined;
};

export default () => {
	const HomeNavigator = createStackNavigator<HomeNavigatorParamList>();

	return (
		<HomeNavigator.Navigator
			screenOptions={{
				...TransitionPresets.SlideFromRightIOS,
				headerTransparent: true,
				headerTitleAlign: 'center',
				headerShown: false,
			}}
			initialRouteName={HomeScreensNavigations.home}>
			<HomeNavigator.Screen
				name={HomeScreensNavigations.home}
				component={Home}
				options={{ title: '' }}
			/>
		</HomeNavigator.Navigator>
	);
};
