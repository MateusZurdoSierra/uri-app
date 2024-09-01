import React from 'react';

import { Container, LabelButton } from './styles';

interface ButtonProps {
	onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ onPress }) => {
	return (
		<Container onPress={onPress}>
			<LabelButton>Começar</LabelButton>
		</Container>
	);
};

export default Button;
