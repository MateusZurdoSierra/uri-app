import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../../presentation/screens/home/Home';
import CustomHeader from '../../../modules/global/components/CustomHeader';

export enum HomeScreensNavigations {
	home = 'HomeScreen',
}

export type HomeNavigatorParamList = {
	[HomeScreensNavigations.home]: undefined;
};

const Stack = createStackNavigator();
const TabNavigator = React.memo(() => {
	const Tab = createBottomTabNavigator();

	return (
		<Tab.Navigator
			screenOptions={{
				tabBarActiveTintColor: '#8133f1',
				tabBarShowLabel: false,
				tabBarStyle: {
					height: 80,
					borderTopLeftRadius: 30,
					borderTopRightRadius: 30,

					backgroundColor: '#fff',
					position: 'absolute',

					shadowColor: '#000',
					shadowOffset: { width: 0, height: 5 },
					shadowOpacity: 0.2,
					shadowRadius: 5,
					elevation: 5,
				},
			}}>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{ headerShown: false }}
			/>
		</Tab.Navigator>
	);
});

export default () => {
	return (
		<Stack.Navigator
			screenOptions={{
				header: () => <CustomHeader />,
			}}>
			<Stack.Screen name="Main" component={TabNavigator} />
		</Stack.Navigator>
	);
};
