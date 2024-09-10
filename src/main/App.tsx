import React, { useEffect } from 'react';

import NetInfo from '@react-native-community/netinfo';
import { NetworkActions } from '../infra/network';
import { useDispatch } from 'react-redux';
import RootRoutes from './navigation';

export default function MyApp() {
	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribe = NetInfo.addEventListener(state => {
			dispatch(NetworkActions.setNetworkState(state));
		});

		return unsubscribe;
	});

	return <RootRoutes />;
}
