import {
	createStackNavigator,
	TransitionPresets,
} from '@react-navigation/stack';

import React from 'react';

import Welcome from '../../../presentation/screens/Welcome';

export enum AuthScreensNavigations {
	home = 'HomeScreen',
}

export type AuthNavigatorParamList = {
	[AuthScreensNavigations.home]: undefined;
};

export default () => {
	const AuthNavigator = createStackNavigator<AuthNavigatorParamList>();

	return (
		<AuthNavigator.Navigator
			screenOptions={{
				...TransitionPresets.SlideFromRightIOS,
				headerTransparent: true,
				headerTitleAlign: 'center',
				headerShown: false,
			}}
			initialRouteName={AuthScreensNavigations.home}>
			<AuthNavigator.Screen
				name={AuthScreensNavigations.home}
				component={Welcome}
				options={{ title: '' }}
			/>
		</AuthNavigator.Navigator>
	);
};
