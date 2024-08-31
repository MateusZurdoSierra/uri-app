import React from 'react';
import { Navigations, Navigator } from './types';
import Welcome from '../../presentation/screens/Welcome';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthNavigatorParamList } from './auth';

export const ScreensNameRoot = {
	global: 'Global',
	auth: 'Auth',
	features: 'Features',
	home: 'Home',
};

type Keys = keyof typeof ScreensNameRoot;
export type ScreensNameRootType = (typeof ScreensNameRoot)[Keys];
export type RootNavigatorParamList = AuthNavigatorParamList;

const navigations: Navigations = [
	{
		name: ScreensNameRoot.home,
		component: Welcome,
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
			initialRouteName={ScreensNameRoot.home}
			screenOptions={{
				headerShown: false,
				animationEnabled: true,
			}}>
			{renderNavigations}
		</Stack.Navigator>
	);
};

export default RootRoutes;
