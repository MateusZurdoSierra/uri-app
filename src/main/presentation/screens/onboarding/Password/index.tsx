import React, { useState } from 'react';

import { Container, ContentText, Label, Subtitle, Title } from './styles';
import Input from '../../../../../modules/global/components/Input';
import Footer from '../../../../../modules/global/components/Footer';

function handleValidatePassword(password: string) {
	const validations = {
		minLength: password.length >= 8,
		hasLowerCase: /[a-z]/.test(password),
		hasUpperCase: /[A-Z]/.test(password),
		hasNumber: /\d/.test(password),
		hasSpecialChar: /[\W_]/.test(password),
	};

	const isValid = Object.values(validations).every(Boolean);

	return { isValid, ...validations };
}

function validateColorLabel(isValid: boolean, password: string) {
	if (password === '' || password === 'Digite a sua senha') return 'black';

	if (isValid) {
		return 'green';
	}
	return 'red';
}

const Password: React.FC = () => {
	const [password, setPassword] = useState('Digite a sua senha');
	const [isFocusedPassword, setIsFocusedPassword] = useState(false);
	const [confirmPassword, setConfirmPassword] = useState(
		'Confirme a sua senha',
	);
	const [isFocusedConfirmPassword, setIsFocusedConfirmPassword] =
		useState(false);

	const {
		hasLowerCase,
		hasNumber,
		hasSpecialChar,
		hasUpperCase,
		isValid,
		minLength,
	} = handleValidatePassword(password);

	console.warn(isFocusedPassword);

	return (
		<Container>
			<ContentText>
				<Title>Senha</Title>
				<Subtitle>A sua senha deve conter:</Subtitle>

				<Label style={{ color: validateColorLabel(minLength, password) }}>
					Use pelo menos 8 caracteres
				</Label>

				<Label
					style={{
						color: validateColorLabel(hasLowerCase && hasUpperCase, password),
					}}>
					Inclua letras maiúsculas e minúsculas
				</Label>

				<Label style={{ color: validateColorLabel(hasNumber, password) }}>
					Adicione números (0-9)
				</Label>

				<Label style={{ color: validateColorLabel(hasSpecialChar, password) }}>
					Use caracteres especiais como ! @ # $ %
				</Label>
			</ContentText>

			<Input
				value={isFocusedPassword ? '' : password}
				description="Senha"
				onFocus={() => {
					setIsFocusedPassword(true);
					setPassword('');
				}}
				onBlur={() => setIsFocusedPassword(false)}
				onChangeText={password => {
					setPassword(password);
					handleValidatePassword(password);
				}}
			/>
			<Input
				value={isFocusedConfirmPassword ? '' : confirmPassword}
				description="Confirme a sua senha"
				onFocus={() => {
					setIsFocusedConfirmPassword(true);
					setConfirmPassword('');
				}}
				onBlur={() => setIsFocusedConfirmPassword(false)}
				onChangeText={confirmPassword => {
					setConfirmPassword(confirmPassword);
				}}
			/>

			<Footer textButton="Próximo" onPress={() => {}} />
		</Container>
	);
};

export default Password;
