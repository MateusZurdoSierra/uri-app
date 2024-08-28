import React from 'react';

import { DescriptionInput, InputComponent, InputContainer } from './styles';

const Input: React.FC = () => {
	return (
		<InputContainer>
			<DescriptionInput>Nome completo</DescriptionInput>
			<InputComponent value="Insira seu nome" />
		</InputContainer>
	);
};

export default Input;
