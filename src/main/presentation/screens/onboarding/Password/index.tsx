import React, { useState } from 'react';

import Input from '../../../../../modules/global/components/Input';
import Footer from '../../../../../modules/global/components/Footer';
import { KeyboardAvoidingView } from '../InitialInformation/styles';

import { OnboardingScreensNavigations } from '../../../../navigation/onboarding';
import { Navigator } from '../../../../../modules/global/utils/rootNavigations';
import { OnboardingActions } from '../../../../redux/onboarding/reducers';
import { useValidatePassword } from './useValidatePassword';
import { useDispatch } from 'react-redux';

import {
	Container,
	ContentText,
	Label,
	ScrollContainer,
	Subtitle,
	Title,
} from './styles';

const Password: React.FC = () => {
	const dispatch = useDispatch();

	const [password, setPassword] = useState('Digite a sua senha');
	const [confirmPassword, setConfirmPassword] = useState(
		'Confirme a sua senha',
	);

	const [inputSelected, setInputSelected] = useState({
		password: false,
		confirmPassword: false,
	});

	const { handleValidatePassword, validateColorLabel } = useValidatePassword();

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
						value={password}
						description="Senha"
						selected={inputSelected.password}
						onFocus={() => {
							setInputSelected({ ...inputSelected, password: true });
							setPassword('');
						}}
						onBlur={() =>
							setInputSelected({ ...inputSelected, password: false })
						}
						onChangeText={password => {
							setPassword(password);
							handleValidatePassword(password);
						}}
					/>
					<Input
						value={confirmPassword}
						description="Confirme a sua senha"
						selected={inputSelected.confirmPassword}
						onFocus={() => {
							setInputSelected({ ...inputSelected, confirmPassword: true });
							setConfirmPassword('');
						}}
						onBlur={() =>
							setInputSelected({ ...inputSelected, confirmPassword: false })
						}
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
