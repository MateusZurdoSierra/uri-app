import React from 'react';
import { CameraView, useCameraPermissions } from 'expo-camera';
import Ionicons from '@expo/vector-icons/Ionicons';
import { View } from 'react-native';

import TemplateInstructions from '../../../../modules/global/components/Templates/Template.Instructions';
import ButtonCapture from '../../../../modules/global/components/ButtonCapture';
import Mask from './Mask';

import {
	ButtonsRow,
	Container,
	ContentButtons,
	ContentDescription,
	ContentRightIcon,
	ContentTitle,
	DescriptionTitle,
	LabelBottom,
	Title,
	TouchableIcon,
} from './styles';

const CaptureDocument: React.FC = () => {
	const [permission, requestPermission] = useCameraPermissions();

	if (!permission) {
		return <View />;
	}

	if (!permission.granted) {
		return (
			<TemplateInstructions
				illustration="send_data"
				description="Para seguir com os próximos passos, precisamos de acesso à sua câmera."
				textButton="Permitir câmera"
				quantityCircles={0}
				onPress={requestPermission}
			/>
		);
	}

	return (
		<Container>
			<CameraView style={{ flex: 1 }}>
				<Mask />

				<ContentTitle>
					<Title>Frente</Title>
				</ContentTitle>

				<ContentDescription>
					<DescriptionTitle>Centralize o seu documento</DescriptionTitle>
					<LabelBottom>
						Posicione seu documento sobre uma superfície plana e verifique se a
						imagem está clara e todas as informações estão legíveis.
					</LabelBottom>
				</ContentDescription>

				<ContentButtons>
					<ButtonsRow>
						<ButtonCapture onPress={() => {}} />

						<ContentRightIcon>
							<TouchableIcon onPress={() => {}}>
								<Ionicons name="flash-outline" size={30} color="white" />
							</TouchableIcon>
						</ContentRightIcon>
					</ButtonsRow>
				</ContentButtons>
			</CameraView>
		</Container>
	);
};

export default CaptureDocument;
