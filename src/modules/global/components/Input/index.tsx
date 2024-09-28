import React from 'react';

import { DescriptionInput, InputComponent, InputContainer } from './styles';
import { TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
	description: string;
	value: string;
	selected?: boolean;
	maxLength?: number;
	onChangeText?: (text: string) => void;
	onFocus?: () => void;
	onBlur?: () => void;
}

const Input: React.FC<InputProps> = ({
	description,
	value,
	selected,
	onChangeText,
	...rest
}) => {
	return (
		<InputContainer>
			<DescriptionInput>{description}</DescriptionInput>
			<InputComponent
				value={value}
				selected={selected}
				onChangeText={onChangeText}
				{...rest}
			/>
		</InputContainer>
	);
};

export default Input;
