import React from 'react';

import {
	createStackNavigator,
	TransitionPresets,
} from '@react-navigation/stack';

import Welcome from '../../../presentation/screens/onboarding/Welcome';

export enum OnboardingScreensNavigations {
	onboarding = 'OnboardingScreen',
}

export type OnboardingNavigatorParamList = {
	[OnboardingScreensNavigations.onboarding]: undefined;
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
			initialRouteName={OnboardingScreensNavigations.onboarding}>
			<OnboardingNavigator.Screen
				name={OnboardingScreensNavigations.onboarding}
				component={Welcome}
				options={{ title: '' }}
			/>
		</OnboardingNavigator.Navigator>
	);
};
