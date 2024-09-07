import React from 'react';

import Button from '../../../../modules/global/components/Button';

import {
	Container,
	Content,
	ContentButton,
	ContentTexts,
	Image,
	LabelWelcome,
	TextWelcome,
} from './styles';
import { Navigator } from '../../../../modules/global/utils/rootNavigations';
import { ScreensNameRoot } from '../../../../main/navigation';
import Footer from '../../../../modules/global/components/Footer';
import { OnboardingScreensNavigations } from '../../../../main/navigation/onboarding';

const Welcome: React.FC = () => {
	return (
		<Container>
			<Image
				style={{
					height: '70%',
					width: '100%',
					resizeMode: 'cover',
					backgroundColor: 'gray',
					borderRadius: 25,
				}}
				source={require('../../../../assets/images/welcome.jpg')}
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
