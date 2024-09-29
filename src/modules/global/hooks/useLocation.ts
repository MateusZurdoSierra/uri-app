import {
	LocationAccuracy,
	LocationObjectCoords,
	LocationSubscription,
	useForegroundPermissions,
	watchPositionAsync,
} from 'expo-location';
import { useEffect, useState } from 'react';
import { getAddressLocation } from '../utils/getAddressLocation';

interface useLocationProtocol {
	coordinates: LocationObjectCoords | null;
	currentAddress: string | null;
	isLoadingLocation: boolean;
	locationForegroundPermission?: any; 
}

export function useLocation(): useLocationProtocol {
	const [isLoadingLocation, setIsLoadingLocation] = useState(true);
	const [currentAddress, setCurrentAddress] = useState<string | null>(null);
	const [coordinates, setCoordinates] = useState<LocationObjectCoords | null>(
		null,
	);
	const [locationForegroundPermission, requestLocationForegroundPermission] =
		useForegroundPermissions();

	useEffect(() => {
		requestLocationForegroundPermission();
	}, []);

	useEffect(() => {
		if (!locationForegroundPermission?.granted) return;

		let subscription: LocationSubscription;

		watchPositionAsync(
			{
				accuracy: LocationAccuracy.High,
				timeInterval: 1000,
			},
			location => {
				if (location.coords) {
					console.tron.log(location);
					setCoordinates(location.coords);
				}

				getAddressLocation(location.coords)
					.then(address => {
						if (address) {
							setCurrentAddress(address);
						}
					})
					.finally(() => setIsLoadingLocation(false));
			},
		).then(response => (subscription = response));

		return () => {
			if (subscription) subscription.remove();
		};
	}, [locationForegroundPermission]);

	return {
		coordinates,
		currentAddress,
		isLoadingLocation,
		locationForegroundPermission,
	};
}
