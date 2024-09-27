import React, { useEffect, useState } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import {
	useForegroundPermissions,
	watchPositionAsync,
	LocationAccuracy,
	LocationSubscription,
	LocationObjectCoords,
} from 'expo-location';

import Footer from '../../../../../modules/global/components/Footer';
import { getAddressLocation } from '../../../../../modules/global/utils/getAddressLocation';

import {
	Container,
	ContentTexts,
	Description,
	ModalContainer,
	ModalContent,
	Title,
	TitleModal,
} from './styles';

const ConfirmLocation: React.FC = () => {
	const [isLoadingLocation, setIsLoadingLocation] = useState(true);
	const [currentAddress, setCurrentAddress] = useState<string | null>(null);
	const [coordinates, setCoordinates] = useState<LocationObjectCoords | null>(
		null,
	);
	const [modalVisible, setModalVisible] = useState(true);
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

	if (!locationForegroundPermission?.granted) {
		<Container />;
	}

	if (isLoadingLocation) {
		//retornar loading
		return <Container />;
	}

	return (
		<Container>
			<ContentTexts>
				<Title>Confirmar localização</Title>
				<Description>
					Para confirmar sua residência em um bairro onde o Uri está disponível,
					envie sua localização atual
				</Description>
			</ContentTexts>

			<MapView
				provider={PROVIDER_GOOGLE}
				region={{
					latitude: coordinates?.latitude ?? 0,
					longitude: coordinates?.longitude ?? 0,
					latitudeDelta: 0.005,
					longitudeDelta: 0.005,
				}}
				style={{ flex: 1 }}
				mapType="terrain">
				<Marker
					coordinate={{
						latitude: coordinates?.latitude ?? 0,
						longitude: coordinates?.longitude ?? 0,
					}}
				/>
			</MapView>

			{modalVisible && (
				<ModalContainer>
					<ModalContent>
						<TitleModal>Minha localização</TitleModal>
						<Description>{currentAddress}</Description>

						<Footer
							textButton="Confirmar localização"
							onPress={() => setModalVisible(false)}
						/>
					</ModalContent>
				</ModalContainer>
			)}
		</Container>
	);
};

export default ConfirmLocation;
