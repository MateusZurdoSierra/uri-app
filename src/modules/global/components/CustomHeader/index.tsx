import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import {
	Container,
	ContentIcon,
	ContentText,
	LabelHeader,
	TitleHeader,
} from './styles';

const CustomHeader: React.FC = () => {
	return (
		<Container>
			<ContentIcon>
				<FontAwesome name="home" size={30} color="#8133f1" />
			</ContentIcon>

			<ContentText>
				<TitleHeader numberOfLines={1}>
					Olá Danilo, Bairro Von Zuben
				</TitleHeader>
				<LabelHeader numberOfLines={1}>Rua Leopoldo Arantes, 289</LabelHeader>
			</ContentText>
		</Container>
	);
};

export default CustomHeader;
