import React from 'react';
import { useEffect } from 'react';
import NetInfo from '@react-native-community/netinfo';
import { useDispatch } from 'react-redux';
import { NetworkActions } from '../infra/network';
import RootRoutes from './navigation';
import Welcome from '../presentation/screens/Welcome';

export default function MyApp() {
	// const dispatch = useDispatch();

	// useEffect(() => {
	// 	const unsubscribe = NetInfo.addEventListener(state => {
	// 		dispatch(NetworkActions.setNetworkState(state));
	// 	});

	// 	return unsubscribe;
	// });

	// return <Welcome />
	return <RootRoutes />;
}
