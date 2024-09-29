import React from 'react';
import { Platform } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import CustomHeader from '../../../modules/global/components/CustomHeader';

import Home from '../../presentation/screens/home/Home';
import NewIncident from '../../presentation/screens/home/Incident/NewIncident';
import SosUrgent from '../../presentation/screens/home/SosUrgent';
import ToShare from '../../presentation/screens/home/ToShare';
import Configurations from '../../presentation/screens/home/Configurations';

export enum HomeScreensNavigations {
	home = 'HomeScreen',
	incident = 'IncidentScreen',
	sosUrgent = 'SosUrgentScreen',
	toShare = 'ToShareScreen',
	configurations = 'ConfigurationsScreen',
}

export type HomeNavigatorParamList = {
	[HomeScreensNavigations.home]: undefined;
	[HomeScreensNavigations.incident]: undefined;
	[HomeScreensNavigations.sosUrgent]: undefined;
	[HomeScreensNavigations.toShare]: undefined;
	[HomeScreensNavigations.configurations]: undefined;
};

const Stack = createStackNavigator();

const TabNavigator = React.memo(() => {
	const Tab = createBottomTabNavigator();

	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ color }) => {
					if (route.name === HomeScreensNavigations.home) {
						return <FontAwesome name={'home'} size={30} color={color} />;
					}

					if (route.name === HomeScreensNavigations.incident) {
						return <FontAwesome name={'file-text-o'} size={24} color={color} />;
					}

					if (route.name === HomeScreensNavigations.sosUrgent) {
						return (
							<MaterialCommunityIcons
								name={'shield-alert-outline'}
								size={30}
								color={color}
							/>
						);
					}

					if (route.name === HomeScreensNavigations.toShare) {
						return <MaterialIcons name={'group-add'} size={30} color={color} />;
					}

					if (route.name === HomeScreensNavigations.configurations) {
						return <MaterialIcons name={'settings'} size={30} color={color} />;
					}
				},
				tabBarActiveTintColor: '#8133f1',
				tabBarInactiveTintColor: '#8e8e93',
				tabBarShowLabel: false,
				tabBarStyle: {
					display: route.name === HomeScreensNavigations.home ? 'flex' : 'none',
					height: Platform.OS === 'ios' ? 100 : 80,
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
			})}>
			<Tab.Screen
				name={HomeScreensNavigations.home}
				component={Home}
				options={{ header: () => <CustomHeader /> }}
			/>
			<Tab.Screen
				name={HomeScreensNavigations.incident}
				component={NewIncident}
				options={{ headerShown: false }}
			/>
			<Tab.Screen
				name={HomeScreensNavigations.sosUrgent}
				component={SosUrgent}
				options={{ headerShown: false }}
			/>
			<Tab.Screen
				name={HomeScreensNavigations.toShare}
				component={ToShare}
				options={{ headerShown: false }}
			/>
			<Tab.Screen
				name={HomeScreensNavigations.configurations}
				component={Configurations}
				options={{ headerShown: false }}
			/>
		</Tab.Navigator>
	);
});

export default () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}>
			<Stack.Screen name="Home" component={TabNavigator} />
		</Stack.Navigator>
	);
};
