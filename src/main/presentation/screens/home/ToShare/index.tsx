import React from 'react';
import HeaderBackButton from '../../../../../modules/global/components/HeaderBackButton';
import { Navigator } from '../../../../../modules/global/utils/rootNavigations';
import { HomeScreensNavigations } from '../../../../navigation/home';
import * as Sharing from 'expo-sharing';

import {
	Container,
	Content,
	ContentTitleAndIllustration,
	Title,
} from './styles';
import Illustration from '../../../../../modules/global/components/Illustration';
import Footer from '../../../../../modules/global/components/Footer';

const ToShare: React.FC = () => {
	const shareMessage = async () => {
		try {
			await Sharing.shareAsync('https://uriapp.com', {
				dialogTitle:
					'Olá, dê uma olhadinha no Uri, e vamos aumentar a segurança em nosso bairro.',
				mimeType: 'text/plain',
			});
		} catch (error) {
			console.error('Erro ao compartilhar:', error);
		}
	};

	return (
		<Container>
			<HeaderBackButton
				onPress={() => Navigator.navigate(HomeScreensNavigations.home)}
			/>

			<Content>
				<ContentTitleAndIllustration>
					<Title>
						Convide vizinhos para o Uri e aumente a segurança em seu bairro.
					</Title>
					<Illustration name="share" height={200} width={200} />
				</ContentTitleAndIllustration>

				<Footer textButton="Convidar vizinhos" onPress={shareMessage} />
			</Content>
		</Container>
	);
};

export default ToShare;
