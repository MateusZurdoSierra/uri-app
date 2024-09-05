import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

import Input from '../../../../modules/global/components/Input';
import Button, {
	TypeButton,
} from '../../../../modules/global/components/Button';

import {
	Access,
	Container,
	Content,
	DividerContent,
	DividerText,
	Footer,
	ForgotMyPassword,
	Line,
	ViewText,
} from './styles';

const Login: React.FC = () => {
	const [inputSelected, setInputSelected] = useState(false);
	console.warn(inputSelected);

	return (
		<Container>
			<Content>
				<Access>Acessar</Access>
				<Input
					description={'E-mail'}
					value={'Digite o seu endereço de e-mail'}
					onFocus={() => setInputSelected(true)}
					selected={inputSelected}
				/>
				<Input description={'Senha'} value={'Digite a sua senha'} />

				<ViewText>
					<TouchableOpacity>
						<ForgotMyPassword>Esqueci minha senha</ForgotMyPassword>
					</TouchableOpacity>
				</ViewText>

				<Footer>
					<Button text="Acessar" onPress={() => {}} />
					<DividerContent>
						<Line />
						<DividerText>ou</DividerText>
						<Line />
					</DividerContent>
					<Button
						text="Criar uma conta"
						typeButton={TypeButton.OUTLINE}
						onPress={() => {}}
					/>
				</Footer>
			</Content>
		</Container>
	);
};

export default Login;
