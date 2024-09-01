import React from 'react';
import { Navigations, Navigator } from './types';
import { createStackNavigator } from '@react-navigation/stack';

import HomeNavigation, { HomeNavigatorParamList } from './home';
import OnboardingNavigation, {
	OnboardingNavigatorParamList,
} from './onboarding';

export const ScreensNameRoot = {
	onboarding: 'Onboarding',
	home: 'Home',
};

type Keys = keyof typeof ScreensNameRoot;
export type ScreensNameRootType = (typeof ScreensNameRoot)[Keys];
export type RootNavigatorParamList = OnboardingNavigatorParamList &
	HomeNavigatorParamList;

const navigations: Navigations = [
	{
		name: ScreensNameRoot.onboarding,
		component: OnboardingNavigation,
	},
	{
		name: ScreensNameRoot.home,
		component: HomeNavigation,
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
				{(props: any) => <Component key={name} {...props} />}
			</Stack.Screen>
		);
	},
);

const RootRoutes: React.FC = () => {
	return (
		<Stack.Navigator
			initialRouteName={ScreensNameRoot.onboarding}
			screenOptions={{
				headerShown: false,
				animationEnabled: true,
			}}>
			{renderNavigations}
		</Stack.Navigator>
	);
};

export default RootRoutes;
