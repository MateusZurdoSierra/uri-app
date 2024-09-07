import React from 'react';

import Button from '../Button';

import { FooterContainer } from './styles';

interface FooterProps {
	textButton: string;
	onPress: () => void;
}

const Footer: React.FC<FooterProps> = ({ textButton, onPress }) => {
	return (
		<FooterContainer>
			<Button text={textButton} onPress={() => onPress()} />
		</FooterContainer>
	);
};

export default Footer;
