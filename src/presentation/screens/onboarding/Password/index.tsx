import React from 'react';

import { Container, ContentText, Label, Subtitle, Title } from './styles';
import Input from '../../../../modules/global/components/Input';
import Footer from '../../../../modules/global/components/Footer';

const Password: React.FC = () => {
	return (
		<Container>
			<ContentText>
				<Title>Senha</Title>
				<Subtitle>A sua senha deve conter:</Subtitle>

				<Label>Use pelo menos 8 caracteres</Label>
				<Label>Inclua letras maiúsculas e minúsculas</Label>
				<Label>Adicione números (0-9)</Label>
				<Label>Use caracteres especiais como ! @ # $ %</Label>
			</ContentText>

			<Input value="Digite a sua senha" description="Senha" />
			<Input value="Confirme a sua senha" description="Confirme a sua senha" />

			<Footer textButton="Próximo" onPress={() => {}} />
		</Container>
	);
};

export default Password;
