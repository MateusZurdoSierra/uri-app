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

const InputTextArea: React.FC<InputProps> = ({
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
				multiline
				value={value}
				selected={selected}
				onChangeText={onChangeText}
				textAlignVertical="top"
				{...rest}
			/>
		</InputContainer>
	);
};

export default InputTextArea;
