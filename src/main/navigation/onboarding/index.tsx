import React from 'react';

import {
	createStackNavigator,
	TransitionPresets,
} from '@react-navigation/stack';

import AddressScreen from '../../presentation/screens/onboarding/Address';
import BeAnAmbassador from '../../presentation/screens/onboarding/Ambassador/BeAnAmbassador';
import WhatIsAmbassador from '../../presentation/screens/onboarding/Ambassador/WhatIsAmbassador';
import CaptureDocument from '../../presentation/screens/onboarding/CaptureDocument';
import ConfirmData from '../../presentation/screens/onboarding/ConfirmData';
import ConfirmLocation from '../../presentation/screens/onboarding/ConfirmLocation';
import FirstAccess from '../../presentation/screens/onboarding/InformationForm';
import Password from '../../presentation/screens/onboarding/Password';
import ValidateDocuments from '../../presentation/screens/onboarding/ValidateDocuments';

export enum OnboardingScreensNavigations {
	informationForm = 'InformationFormScreen',
	beAnAmbassador = 'BeAnAmbassadorScreen',
	whatIsAmbassador = 'WhatIsAmbassador',
	password = 'PasswordScreen',
	addressScreen = 'AddressScreen',
	confirmData = 'ConfirmData',
	validationDocuments = 'ValidationDocuments',
	captureDocument = 'CaptureDocument',
	confirmLocation = 'ConfirmLocation',
}

export type OnboardingNavigatorParamList = {
	[OnboardingScreensNavigations.informationForm]: undefined;
	[OnboardingScreensNavigations.beAnAmbassador]: undefined;
	[OnboardingScreensNavigations.whatIsAmbassador]: undefined;
	[OnboardingScreensNavigations.password]: undefined;
	[OnboardingScreensNavigations.addressScreen]: undefined;
	[OnboardingScreensNavigations.confirmData]: undefined;
	[OnboardingScreensNavigations.validationDocuments]: undefined;
	[OnboardingScreensNavigations.captureDocument]: undefined;
	[OnboardingScreensNavigations.confirmLocation]: undefined;
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
			initialRouteName={OnboardingScreensNavigations.informationForm}>
			<OnboardingNavigator.Screen
				name={OnboardingScreensNavigations.informationForm}
				component={FirstAccess}
				options={{ title: '' }}
			/>
			<OnboardingNavigator.Screen
				name={OnboardingScreensNavigations.beAnAmbassador}
				component={BeAnAmbassador}
				options={{ title: '' }}
			/>
			<OnboardingNavigator.Screen
				name={OnboardingScreensNavigations.whatIsAmbassador}
				component={WhatIsAmbassador}
				options={{ title: '' }}
			/>
			<OnboardingNavigator.Screen
				name={OnboardingScreensNavigations.password}
				component={Password}
				options={{ title: '' }}
			/>
			<OnboardingNavigator.Screen
				name={OnboardingScreensNavigations.addressScreen}
				component={AddressScreen}
				options={{ title: '' }}
			/>
			<OnboardingNavigator.Screen
				name={OnboardingScreensNavigations.confirmData}
				component={ConfirmData}
				options={{ title: '' }}
			/>
			<OnboardingNavigator.Screen
				name={OnboardingScreensNavigations.validationDocuments}
				component={ValidateDocuments}
				options={{ title: '' }}
			/>
			<OnboardingNavigator.Screen
				name={OnboardingScreensNavigations.captureDocument}
				component={CaptureDocument}
				options={{ title: '' }}
			/>
			<OnboardingNavigator.Screen
				name={OnboardingScreensNavigations.confirmLocation}
				component={ConfirmLocation}
				options={{ title: '' }}
			/>
		</OnboardingNavigator.Navigator>
	);
};
