import React from 'react';

import { Container, LabelButton } from './styles';

export enum TypeButton {
	SOLID = 'SOLID',
	OUTLINE = 'OUTLINE',
}

interface ButtonProps {
	text: string;
	typeButton?: TypeButton;
	isWhiteButton?: boolean;
	marginBottom?: number;
	onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({
	text,
	isWhiteButton = false,
	marginBottom,
	typeButton = TypeButton.SOLID,
	onPress,
}) => {
	return (
		<Container
			onPress={onPress}
			isWhiteButton={isWhiteButton}
			marginBottom={marginBottom}
			typeButton={typeButton}>
			<LabelButton typeButton={typeButton} isWhiteButton={isWhiteButton}>
				{text}
			</LabelButton>
		</Container>
	);
};

export default Button;
