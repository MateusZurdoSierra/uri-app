import React, { useState } from 'react';
import Input from '../../../../modules/global/components/Input';
import Button from '../../../../modules/global/components/Button';

import { Container, Title, Subtitle, ContentText, Footer } from './styles';

const FirstAccess: React.FC = () => {
	const [fullName, setFullName] = useState<string>(
		'Digite o seu nome completo',
	);
	const [phone, setPhone] = useState<string>('Digite o seu número de celular');
	const [email, setEmail] = useState<string>('Insira o seu e-mail principal');
	const [zipCode, setZipCode] = useState<string>('Digite o CEP da sua rua');

	return (
		<Container>
			<ContentText>
				<Title>Vamos começar</Title>
				<Subtitle>
					Precisamos de algumas informações para garantir sua segurança e
					verificar se seu bairro está cadastrado no Uri.
				</Subtitle>
			</ContentText>

			<Input
				description="Nome"
				value={fullName}
				onChangeText={text => setFullName(text)}
			/>
			<Input description="Telefone" value={phone} />
			<Input description="E-mail" value={email} />
			<Input description="CEP" value={zipCode} />

			<Footer>
				<Button text="Começar" onPress={() => {}} />
			</Footer>
		</Container>
	);
};

export default FirstAccess;
