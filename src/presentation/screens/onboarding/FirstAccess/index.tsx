import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles, { Container, Title, Subtitle } from './styles';

const FirstAccess: React.FC = () => {
	const [fullName, setFullName] = useState<string>('');
	const [phone, setPhone] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [zipCode, setZipCode] = useState<string>('');

	const handleSubmit = () => {
		console.log({ fullName, phone, email, zipCode });
	};

	return (
		<Container>
			<Title>Primeiros Passos</Title>
			<Subtitle>Precisamos de algumas informações para garantir a sua segurança e verificar se o seu bairro está cadastrado no Uri.
			</Subtitle>



			<Text style={styles.label}>Nome Completo</Text>
			<TextInput
				style={styles.input}
				placeholder="Digite seu nome completo"
				value={fullName}
				onChangeText={setFullName}
			/>

			<Text style={styles.label}>Telefone</Text>
			<TextInput
				style={styles.input}
				placeholder="Digite seu telefone"
				value={phone}
				onChangeText={setPhone}
				keyboardType="phone-pad"
			/>

			<Text style={styles.label}>Email</Text>
			<TextInput
				style={styles.input}
				placeholder="Digite seu email"
				value={email}
				onChangeText={setEmail}
				keyboardType="email-address"
			/>

			<Text style={styles.label}>CEP</Text>
			<TextInput
				style={styles.input}
				placeholder="Digite seu CEP"
				value={zipCode}
				onChangeText={setZipCode}
				keyboardType="numeric"
			/>

			<Button title="Enviar" onPress={handleSubmit} />
		</Container>
	);
};

export default FirstAccess;