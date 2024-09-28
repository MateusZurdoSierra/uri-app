import React from 'react';

import Button from '../Button';

import { FooterContainer } from './styles';

interface FooterProps {
	withFlex?: boolean;
	textButton: string;
	onPress: () => void;
}

const Footer: React.FC<FooterProps> = ({ withFlex, textButton, onPress }) => {
	return (
		<FooterContainer withFlex={withFlex}>
			<Button text={textButton} onPress={() => onPress()} />
		</FooterContainer>
	);
};

export default Footer;
