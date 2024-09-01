import React from 'react';

import {
	createStackNavigator,
	TransitionPresets,
} from '@react-navigation/stack';

import Welcome from '../../../presentation/screens/onboarding/Welcome';

export enum AuthScreensNavigations {
	login = 'LoginScreen',
}

export type AuthNavigatorParamList = {
	[AuthScreensNavigations.login]: undefined;
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
			initialRouteName={AuthScreensNavigations.login}>
			<AuthNavigator.Screen
				name={AuthScreensNavigations.login}
				component={Welcome}
				options={{ title: '' }}
			/>
		</AuthNavigator.Navigator>
	);
};
