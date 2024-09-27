import React, { useState } from 'react';

import { PersonProps } from '../../../../../main/redux/onboarding/reducers/person-reducer';
import { OnboardingActions } from '../../../../../main/redux/onboarding/reducers';
import Footer from '../../../../../modules/global/components/Footer';
import Input from '../../../../../modules/global/components/Input';
import { useDispatch } from 'react-redux';

import { Container, Title, Subtitle, ContentText } from './styles';

const InformationForm: React.FC = () => {
	const dispatch = useDispatch();

	const [person, setPerson] = useState<PersonProps>({
		name: 'Digite o seu nome completo',
		phone: 'Digite o seu número de celular',
		email: 'Insira o seu e-mail principal',
		zipCode: 'Digite o CEP da sua rua',
	});

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
				value={person.name}
				onChangeText={name => setPerson({ ...person, name: name })}
			/>
			<Input
				description="Telefone"
				value={person.phone}
				onChangeText={phone => setPerson({ ...person, phone: phone })}
			/>
			<Input
				description="E-mail"
				value={person.email}
				onChangeText={email => setPerson({ ...person, email: email })}
			/>
			<Input
				description="CEP"
				value={person.zipCode}
				onChangeText={zipCode => setPerson({ ...person, zipCode: zipCode })}
			/>

			<Footer
				textButton="Começar"
				onPress={() => {
					dispatch(OnboardingActions.person.statusPerson({ person }));
				}}
			/>
		</Container>
	);
};

export default InformationForm;
