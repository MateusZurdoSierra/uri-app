import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const AppLoading: React.FC = () => {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<ActivityIndicator color={'#8133f1'} size={'large'} />
		</View>
	);
};

export default AppLoading;
