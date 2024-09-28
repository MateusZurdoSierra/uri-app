import React from 'react';

import {
	createStackNavigator,
	TransitionPresets,
} from '@react-navigation/stack';

import Welcome from '../../presentation/screens/onboarding/Welcome';
import Instructions from '../../presentation/screens/onboarding/Instructions';

export enum WelcomeScreensNavigations {
	welcome = 'WelcomeScreen',
	instructions = 'InstructionsScreen',
}

export type WelcomeNavigatorParamList = {
	[WelcomeScreensNavigations.welcome]: undefined;
	[WelcomeScreensNavigations.instructions]: undefined;
};

export default () => {
	const WelcomeNavigator = createStackNavigator<WelcomeNavigatorParamList>();

	return (
		<WelcomeNavigator.Navigator
			screenOptions={{
				...TransitionPresets.SlideFromRightIOS,
				headerTransparent: true,
				headerTitleAlign: 'center',
				headerShown: false,
			}}
			initialRouteName={WelcomeScreensNavigations.welcome}>
			<WelcomeNavigator.Screen
				name={WelcomeScreensNavigations.welcome}
				component={Welcome}
				options={{ title: '' }}
			/>
			<WelcomeNavigator.Screen
				name={WelcomeScreensNavigations.instructions}
				component={Instructions}
				options={{ title: '' }}
			/>
		</WelcomeNavigator.Navigator>
	);
};
