import React, { useState } from 'react';

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import { useLocation } from '../../../../../modules/global/hooks/useLocation';
import Footer from '../../../../../modules/global/components/Footer';

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
	const [modalVisible, setModalVisible] = useState(true);

	const {
		coordinates,
		currentAddress,
		isLoadingLocation,
		locationForegroundPermission,
	} = useLocation();

	if (!locationForegroundPermission?.granted) {
		<Container />;
	}

	if (isLoadingLocation) {
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
							withFlex
							onPress={() => setModalVisible(false)}
						/>
					</ModalContent>
				</ModalContainer>
			)}
		</Container>
	);
};

export default ConfirmLocation;
