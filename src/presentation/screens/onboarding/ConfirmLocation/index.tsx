import React, { useState } from 'react';
import {
	Container,
	ContentTexts,
	Description,
	ModalContainer,
	ModalContent,
	Title,
	TitleModal,
} from './styles';

import MapView from 'react-native-maps';
import Footer from '../../../../modules/global/components/Footer';

const ConfirmLocation: React.FC = () => {
	const [modalVisible, setModalVisible] = useState(true);

	return (
		<Container>
			<ContentTexts>
				<Title>Confirmar localização</Title>
				<Description>
					Para confirmar sua residência em um bairro onde o Uri está disponível,
					envie sua localização atual
				</Description>
			</ContentTexts>

			<MapView style={{ flex: 1 }} mapType="none" />

			{modalVisible && (
				<ModalContainer>
					<ModalContent>
						<TitleModal>Minha localização</TitleModal>
						<Description>
							Descrição que define onde é a minha localização: Rua Eduardo Souza
							Luiz, 179
						</Description>

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
