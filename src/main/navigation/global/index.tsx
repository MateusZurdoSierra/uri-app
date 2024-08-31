import {
	TransitionPresets,
	createStackNavigator,
} from '@react-navigation/stack';

import { ErrorBoundaryScreen } from '../../../presentation/global/screen.errorBoundary';
import CustomStatusScreen from '../../../presentation/global/screen.customStatus';

import React from 'react';
// import { CustomStatusProps } from '~/modules/global/components/Templates/Template.CustomStatus';

export interface StatusScreenProps {
	headerTitle: string;
	customStatusProps: any;
}

export enum SharedScreenNames {
	customStatus = 'CustomStatusScreen',
	errorBoundary = 'ErrorBoundary',
}

export type SharedNavigationParamsList = {
	[SharedScreenNames.customStatus]: StatusScreenProps;
	[SharedScreenNames.errorBoundary]: undefined;
};

export default () => {
	const SharedNavigator = createStackNavigator<SharedNavigationParamsList>();

	return (
		<SharedNavigator.Navigator
			screenOptions={{
				...TransitionPresets.SlideFromRightIOS,
				headerTransparent: true,
			}}
			initialRouteName={SharedScreenNames.errorBoundary}>
			<SharedNavigator.Screen
				name={SharedScreenNames.errorBoundary}
				component={ErrorBoundaryScreen}
				options={{ title: '' }}
			/>
			<SharedNavigator.Screen
				name={SharedScreenNames.customStatus}
				component={CustomStatusScreen}
				options={({ route }) => ({
					title: route.params.headerTitle,
					headerLeft: () => null,
				})}
			/>
		</SharedNavigator.Navigator>
	);
};
