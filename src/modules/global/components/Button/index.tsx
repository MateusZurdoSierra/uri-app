import React from 'react';

import { Container, LabelButton } from './styles';

export enum TypeButton {
	SOLID = 'SOLID',
	OUTLINE = 'OUTLINE',
}

interface ButtonProps {
	text: string;
	typeButton?: TypeButton;
	onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({
	text,
	typeButton = TypeButton.SOLID,
	onPress,
}) => {
	return (
		<Container onPress={onPress} typeButton={typeButton}>
			<LabelButton typeButton={typeButton}>{text}</LabelButton>
		</Container>
	);
};

export default Button;
