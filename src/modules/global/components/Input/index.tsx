import React from 'react';

import { DescriptionInput, InputComponent, InputContainer } from './styles';
import { TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
	description: string;
	value: string;
	selected?: boolean;
	onChangeText?: (text: string) => void;
}

const Input: React.FC<InputProps> = ({
	description,
	value,
	selected,
	onChangeText,
}) => {
	return (
		<InputContainer>
			<DescriptionInput>{description}</DescriptionInput>
			<InputComponent
				value={value}
				selected={selected}
				onChangeText={onChangeText}
			/>
		</InputContainer>
	);
};

export default Input;
