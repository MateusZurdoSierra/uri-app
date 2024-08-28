import React from 'react';

import Button from '../../../modules/global/components/Button';

import {
	Container,
	Content,
	ContentButton,
	ContentTexts,
	Image,
	LabelWelcome,
	TextWelcome,
} from './styles';

const Welcome: React.FC = () => {
	return (
		<Container>
			<Content>
				<Image
					style={{
						height: '70%',
						width: '100%',
						resizeMode: 'cover',
						backgroundColor: 'gray',
						borderRadius: 25,
					}}
					source={require('../../../assets/images/welcome.jpg')}
				/>

				<ContentTexts>
					<TextWelcome>Seja bem-vindo ao URI App!</TextWelcome>
					<LabelWelcome> Sentir-se seguro é para todos.</LabelWelcome>
				</ContentTexts>

				<ContentButton>
					<Button />
				</ContentButton>
			</Content>
		</Container>
	);
};

export default Welcome;
