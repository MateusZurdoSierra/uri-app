import React from 'react';
import { Navigations, Navigator } from './types';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeNavigation, { WelcomeNavigatorParamList } from './welcome';
import HomeNavigation, { HomeNavigatorParamList } from './home';
import AuthNavigation, { AuthNavigatorParamList } from './auth';
import OnboardingNavigation, {
	OnboardingNavigatorParamList,
} from './onboarding';

export const ScreensNameRoot = {
	welcome: 'Welcome',
	auth: 'Auth',
	onboarding: 'Onboarding',
	home: 'Home',
};

type Keys = keyof typeof ScreensNameRoot;
export type ScreensNameRootType = (typeof ScreensNameRoot)[Keys];
export type RootNavigatorParamList = WelcomeNavigatorParamList &
	OnboardingNavigatorParamList &
	HomeNavigatorParamList &
	AuthNavigatorParamList;

const navigations: Navigations = [
	{
		name: ScreensNameRoot.welcome,
		component: WelcomeNavigation,
	},
	{
		name: ScreensNameRoot.onboarding,
		component: OnboardingNavigation,
	},
	{
		name: ScreensNameRoot.home,
		component: HomeNavigation,
	},
	{
		name: ScreensNameRoot.auth,
		component: AuthNavigation,
	},
];

const Stack = createStackNavigator();

const renderNavigations = navigations.map(
	({ name, component: Component }: Navigator) => {
		return (
			<Stack.Screen
				key={name}
				name={name}
				options={{ animationEnabled: false }}>
				{(props: any) => <Component {...props} />}
			</Stack.Screen>
		);
	},
);

const RootRoutes: React.FC = () => {
	return (
		<Stack.Navigator
			initialRouteName={ScreensNameRoot.welcome}
			screenOptions={{
				headerShown: false,
				animationEnabled: true,
			}}>
			{renderNavigations}
		</Stack.Navigator>
	);
};

export default RootRoutes;
