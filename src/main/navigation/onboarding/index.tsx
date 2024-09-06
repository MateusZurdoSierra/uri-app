import React from 'react';

import {
	createStackNavigator,
	TransitionPresets,
} from '@react-navigation/stack';

import Welcome from '../../../presentation/screens/onboarding/Welcome';
import FirstAccess from '../../../presentation/screens/onboarding/FirstAccess';

export enum OnboardingScreensNavigations {
	onboarding = 'OnboardingScreen',
	firstAccess = 'FirstAccessScreen',
}

export type OnboardingNavigatorParamList = {
	[OnboardingScreensNavigations.onboarding]: undefined;
	[OnboardingScreensNavigations.firstAccess]: undefined;
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
			initialRouteName={OnboardingScreensNavigations.firstAccess}>
			<OnboardingNavigator.Screen
				name={OnboardingScreensNavigations.firstAccess}
				component={FirstAccess}
				options={{ title: '' }}
			/>
		</OnboardingNavigator.Navigator>
	);
};
