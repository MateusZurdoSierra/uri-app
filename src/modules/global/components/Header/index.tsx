import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { ContentHeader, ContentText, LabelHeader, TitleHeader } from './styles';

const Header: React.FC = () => {
	return (
		<ContentHeader>
			<FontAwesome name="home" size={40} color="black" />

			<ContentText>
				<TitleHeader>Olá Danilo, Bairro Von Zuben</TitleHeader>
				<LabelHeader>Rua Leopoldo Arantes, 289</LabelHeader>
			</ContentText>
		</ContentHeader>
	);
};

export default Header;
