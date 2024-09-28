import React, { useState } from 'react';

import { PersonProps } from '../../../../../main/redux/onboarding/reducers/person-reducer';
import { OnboardingActions } from '../../../../../main/redux/onboarding/reducers';
import Footer from '../../../../../modules/global/components/Footer';
import Input from '../../../../../modules/global/components/Input';
import { useDispatch } from 'react-redux';

import {
	Container,
	Title,
	Subtitle,
	ContentText,
	ScrollContainer,
	KeyboardAvoidingView,
} from './styles';
import {
	maskCellPhone,
	maskCep,
} from '../../../../../modules/global/utils/mask';

const InformationForm: React.FC = () => {
	const dispatch = useDispatch();

	const [inputSelected, setInputSelected] = useState({
		name: false,
		phone: false,
		email: false,
		zipCode: false,
	});

	const [person, setPerson] = useState<PersonProps>({
		name: 'Digite o seu nome completo',
		phone: 'Digite o seu número de celular',
		email: 'Insira o seu e-mail principal',
		zipCode: 'Digite o CEP da sua rua',
	});

	return (
		<Container>
			<KeyboardAvoidingView>
				<ScrollContainer>
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
						selected={inputSelected.name}
						onFocus={() => {
							setInputSelected({ ...inputSelected, name: true });
							setPerson({ ...person, name: '' });
						}}
						onBlur={() => {
							setInputSelected({ ...inputSelected, name: false });
						}}
						onChangeText={name => setPerson({ ...person, name: name })}
					/>

					<Input
						description="Telefone"
						value={person.phone}
						selected={inputSelected.phone}
						keyboardType="number-pad"
						onFocus={() => {
							setInputSelected({ ...inputSelected, phone: true });
							setPerson({ ...person, phone: '' });
						}}
						onBlur={() => {
							setInputSelected({ ...inputSelected, phone: false });
						}}
						onChangeText={phone =>
							setPerson({ ...person, phone: maskCellPhone(phone) })
						}
					/>

					<Input
						description="E-mail"
						value={person.email}
						selected={inputSelected.email}
						onFocus={() => {
							setInputSelected({ ...inputSelected, email: true });
							setPerson({ ...person, email: '' });
						}}
						onBlur={() => {
							setInputSelected({ ...inputSelected, email: false });
						}}
						onChangeText={email => setPerson({ ...person, email: email })}
					/>

					<Input
						description="CEP"
						value={person.zipCode}
						maxLength={9}
						keyboardType="number-pad"
						selected={inputSelected.zipCode}
						onFocus={() => {
							setInputSelected({ ...inputSelected, zipCode: true });
							setPerson({ ...person, zipCode: '' });
						}}
						onBlur={() => {
							setInputSelected({ ...inputSelected, zipCode: false });
						}}
						onChangeText={zipCode =>
							setPerson({ ...person, zipCode: maskCep(zipCode) })
						}
					/>
				</ScrollContainer>
				<Footer
					textButton="Começar"
					onPress={() => {
						dispatch(OnboardingActions.person.statusPerson({ person }));
					}}
				/>
			</KeyboardAvoidingView>
		</Container>
	);
};

export default InformationForm;
