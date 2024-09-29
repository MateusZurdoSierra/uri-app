import React from 'react';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import LottieView from 'lottie-react-native';

import {
	Container,
	Content,
	ContentIcon,
	ContentLottie,
	Subtitle,
	Title,
} from './styles';
import DispatchAlertIncidentModal from './DispatchAlertIncidentModal';

const SosUrgent: React.FC = () => {
	const [modalVisible, setModalVisible] = React.useState(false);

	return (
		<Container>
			<Content>
				<ContentLottie>
					<LottieView
						style={{
							width: 400,
							height: 400,
							alignItems: 'center',
							justifyContent: 'center',
						}}
						autoPlay
						source={require('../../../../../assets/lottie/press.json')}></LottieView>

					<ContentIcon
						onLongPress={() => setModalVisible(true)}
						delayLongPress={3000}>
						<FontAwesome name={'hand-pointer-o'} size={30} color={'#FFF'} />
					</ContentIcon>
				</ContentLottie>

				<Title>Pressione SOS por 3 segundos</Title>
				<Subtitle>
					Você poderá emitir um alerta de emergência para os moradores que
					estiverem por perto
				</Subtitle>
			</Content>

			<DispatchAlertIncidentModal
				visible={modalVisible}
				handleSendAlert={() => {}}
				onClose={() => setModalVisible(false)}
			/>
		</Container>
	);
};

export default SosUrgent;
