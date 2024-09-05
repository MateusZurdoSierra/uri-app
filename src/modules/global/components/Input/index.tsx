import React from 'react';

import { DescriptionInput, InputComponent, InputContainer } from './styles';
import { TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
	description: string;
	value: string;
	selected?: boolean;
}

const Input: React.FC<InputProps> = ({ description, value, selected }) => {
	return (
		<InputContainer>
			<DescriptionInput>{description}</DescriptionInput>
			<InputComponent value={value} selected={selected} />
		</InputContainer>
	);
};

export default Input;
