import React, { useState } from 'react';
import Input from '../../../../modules/global/components/Input';
import Button from '../../../../modules/global/components/Button';

import { Container, Title, Subtitle, ContentText } from './styles';
import Footer from '../../../../modules/global/components/Footer';
import { Navigator } from '../../../../modules/global/utils/rootNavigations';
import { OnboardingScreensNavigations } from '../../../../main/navigation/onboarding';
import { useDispatch } from 'react-redux';
import { OnboardingActions } from '../../../../main/redux/onboarding/reducers';

const InformationForm: React.FC = () => {
	const dispatch = useDispatch();

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
			<Input
				description="Telefone"
				value={phone}
				onChangeText={text => setPhone(text)}
			/>
			<Input
				description="E-mail"
				value={email}
				onChangeText={text => setFullName(text)}
			/>
			<Input
				description="CEP"
				value={zipCode}
				onChangeText={text => setZipCode(text)}
			/>

			<Footer
				textButton="Começar"
				onPress={
					() => {
						dispatch(OnboardingActions.cep.findCepRegistered({ cep: zipCode }))
						// Navigator.navigate(OnboardingScreensNavigations.beAnAmbassador)
					}}
			/>
		</Container>
	);
};

export default InformationForm;
