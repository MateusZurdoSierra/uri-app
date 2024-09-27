import React from 'react';

import { Navigator } from '../../../../../modules/global/utils/rootNavigations';
import { OnboardingScreensNavigations } from '../../../../navigation/onboarding';
import Footer from '../../../../../modules/global/components/Footer';

import {
	Container,
	Content,
	ContentTexts,
	Image,
	LabelWelcome,
	TextWelcome,
} from './styles';

const Welcome: React.FC = () => {
	return (
		<Container>
			<Image
				style={{
					height: '70%',
					width: '100%',
					resizeMode: 'cover',
					backgroundColor: 'gray',
					borderBottomRightRadius: 25,
					borderBottomLeftRadius: 25,
				}}
				source={require('../../../../../assets/images/welcome.jpg')}
			/>

			<Content>
				<ContentTexts>
					<TextWelcome>Bem vindo ao URI App!</TextWelcome>
					<LabelWelcome>O leão da sua vizinhança.</LabelWelcome>
				</ContentTexts>

				<Footer
					textButton="Começar"
					onPress={() =>
						Navigator.navigate(OnboardingScreensNavigations.instructions)
					}
				/>
			</Content>
		</Container>
	);
};

export default Welcome;
