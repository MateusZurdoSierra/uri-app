import React, { useState } from 'react';

import Input from '../../../../../modules/global/components/Input';
import Footer from '../../../../../modules/global/components/Footer';
import { KeyboardAvoidingView } from '../InformationForm/styles';

import { OnboardingScreensNavigations } from '../../../../navigation/onboarding';
import { Navigator } from '../../../../../modules/global/utils/rootNavigations';
import { OnboardingActions } from '../../../../redux/onboarding/reducers';
import { useDispatch } from 'react-redux';

import {
	Container,
	ContentText,
	Label,
	ScrollContainer,
	Subtitle,
	Title,
} from './styles';

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
	const dispatch = useDispatch();

	const [password, setPassword] = useState('Digite a sua senha');
	const [isFocusedPassword, setIsFocusedPassword] = useState(false);
	const [confirmPassword, setConfirmPassword] = useState(
		'Confirme a sua senha',
	);
	const [isFocusedConfirmPassword, setIsFocusedConfirmPassword] =
		useState(false);

	const { hasLowerCase, hasNumber, hasSpecialChar, hasUpperCase, minLength } =
		handleValidatePassword(password);

	const handleNavigateToDataConfirmScreen = () => {
		dispatch(OnboardingActions.stepPersonData.updatePassword(password));
		Navigator.navigate(OnboardingScreensNavigations.confirmData);
	};

	return (
		<Container>
			<KeyboardAvoidingView>
				<ScrollContainer>
					<ContentText>
						<Title>Senha</Title>
						<Subtitle>A sua senha deve conter:</Subtitle>

						<Label style={{ color: validateColorLabel(minLength, password) }}>
							Use pelo menos 8 caracteres
						</Label>

						<Label
							style={{
								color: validateColorLabel(
									hasLowerCase && hasUpperCase,
									password,
								),
							}}>
							Inclua letras maiúsculas e minúsculas
						</Label>

						<Label style={{ color: validateColorLabel(hasNumber, password) }}>
							Adicione números (0-9)
						</Label>

						<Label
							style={{ color: validateColorLabel(hasSpecialChar, password) }}>
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
				</ScrollContainer>

				<Footer
					textButton="Próximo"
					onPress={() => handleNavigateToDataConfirmScreen()}
				/>
			</KeyboardAvoidingView>
		</Container>
	);
};

export default Password;
