import React from 'react';

import {
	createStackNavigator,
	TransitionPresets,
} from '@react-navigation/stack';

import Welcome from '../../../presentation/screens/onboarding/Welcome';
import FirstAccess from '../../../presentation/screens/onboarding/InformationForm';
import Instructions from '../../../presentation/screens/onboarding/Instructions';
import BeAnAmbassador from '../../../presentation/screens/onboarding/Ambassador/BeAnAmbassador';

export enum OnboardingScreensNavigations {
	welcome = 'WelcomeScreen',
	informationForm = 'InformationFormScreen',
	instructions = 'InstructionsScreen',
	beAnAmbassador = 'BeAnAmbassadorScreen',
}

export type OnboardingNavigatorParamList = {
	[OnboardingScreensNavigations.welcome]: undefined;
	[OnboardingScreensNavigations.informationForm]: undefined;
	[OnboardingScreensNavigations.instructions]: undefined;
	[OnboardingScreensNavigations.beAnAmbassador]: undefined;
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
				name={OnboardingScreensNavigations.informationForm}
				component={FirstAccess}
				options={{ title: '' }}
			/>
			<OnboardingNavigator.Screen
				name={OnboardingScreensNavigations.instructions}
				component={Instructions}
				options={{ title: '' }}
			/>
			<OnboardingNavigator.Screen
				name={OnboardingScreensNavigations.beAnAmbassador}
				component={BeAnAmbassador}
				options={{ title: '' }}
			/>
		</OnboardingNavigator.Navigator>
	);
};
