import React from 'react';
import { StyleSheet } from 'react-native';

import LottieView from 'lottie-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import Button, {
	TypeButton,
} from '../../../../../../modules/global/components/Button';

import {
	Description,
	ModalContainer,
	ModalContent,
	ContentIcon,
	ContentLottie,
	ContentButtons,
} from './styles';

interface DispatchAlertIncidentModalProps {
	visible: boolean;
	onClose: () => void;
	handleSendAlert: () => void;
}

const DispatchAlertIncidentModal: React.FC<DispatchAlertIncidentModalProps> = ({visible, onClose, handleSendAlert}) => {
	return (
		<ModalContainer visible={visible} animationType="slide">
			<LinearGradient colors={['#ff7f7f', '#D64040']} style={styles.gradient}>
				<ModalContent>
					<ContentLottie>
						<LottieView
							style={{
								width: 400,
								height: 400,
								alignItems: 'center',
								justifyContent: 'center',
							}}
							autoPlay
							source={require('../../../../../../assets/lottie/press-white.json')}></LottieView>

						<ContentIcon>
							<FontAwesome name={'bell-o'} size={50} color={'#D64040'} />
						</ContentIcon>
					</ContentLottie>

					<Description>
						Dispare um alerta de emergência com sua localização para todos os
						moradores do seu bairro, informando que você está em risco
					</Description>
				</ModalContent>

				<ContentButtons>
					<Button
						text="Estou a salvo"
						typeButton={TypeButton.OUTLINE}
						marginBottom={16}
						isWhiteButton
						onPress={() => onClose()}
					/>
					<Button text="Enviar alerta" isWhiteButton onPress={() => handleSendAlert()} />
				</ContentButtons>
			</LinearGradient>
		</ModalContainer>
	);
};

export default DispatchAlertIncidentModal;

const styles = StyleSheet.create({
	gradient: {
		flex: 1,
	},
});
