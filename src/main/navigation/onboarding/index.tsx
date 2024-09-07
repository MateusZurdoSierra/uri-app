import React from 'react';

import {
	createStackNavigator,
	TransitionPresets,
} from '@react-navigation/stack';

import Welcome from '../../../presentation/screens/onboarding/Welcome';
import FirstAccess from '../../../presentation/screens/onboarding/FirstAccess';
import Instructions from '../../../presentation/screens/onboarding/Instructions';

export enum OnboardingScreensNavigations {
	welcome = 'WelcomeScreen',
	firstAccess = 'FirstAccessScreen',
	instructions = 'InstructionsScreen',
}

export type OnboardingNavigatorParamList = {
	[OnboardingScreensNavigations.welcome]: undefined;
	[OnboardingScreensNavigations.firstAccess]: undefined;
	[OnboardingScreensNavigations.instructions]: undefined;
};

export default () => {
	const OnboardingNavigator =
		createStackNavigator<OnboardingNavigatorParamList>();

	return (
		<OnboardingNavigator.Navigator
			screenOptions={{
				...TransitionPresets.SlideFromRightIOS,
				headerTransparent: true,
				headerTitleAlign: 'center',
				headerShown: false,
			}}
			initialRouteName={OnboardingScreensNavigations.welcome}>
			<OnboardingNavigator.Screen
				name={OnboardingScreensNavigations.welcome}
				component={Welcome}
				options={{ title: '' }}
			/>
			<OnboardingNavigator.Screen
				name={OnboardingScreensNavigations.firstAccess}
				component={FirstAccess}
				options={{ title: '' }}
			/>
			<OnboardingNavigator.Screen
				name={OnboardingScreensNavigations.instructions}
				component={Instructions}
				options={{ title: '' }}
			/>
		</OnboardingNavigator.Navigator>
	);
};
