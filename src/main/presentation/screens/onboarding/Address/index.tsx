import React, { useState } from 'react';

import Input from '../../../../../modules/global/components/Input';
import Footer from '../../../../../modules/global/components/Footer';

import { OnboardingScreensNavigations } from '../../../../navigation/onboarding';
import { Navigator } from '../../../../../modules/global/utils/rootNavigations';
import { OnboardingActions } from '../../../../redux/onboarding/reducers';
import { KeyboardAvoidingView } from '../InitialInformation/styles';
import { maskCep } from '../../../../../modules/global/utils/mask';
import { useDispatch } from 'react-redux';

import {
	Container,
	Title,
	Subtitle,
	ContentText,
	RowContainer,
	NumberContainer,
	NeighborhoodContainer,
	ScrollContainer,
} from './styles';

const AddressScreen: React.FC = () => {
	const dispatch = useDispatch();

	const [inputSelected, setInputSelected] = useState({
		street: false,
		number: false,
		neighborhood: false,
		city: false,
		zipCode: false,
	});

	const [address, setAddress] = useState({
		zipCode: '',
		street: '',
		number: '',
		neighborhood: '',
		city: '',
	});

	const handleNavigateToPasswordScreen = () => {
		dispatch(OnboardingActions.stepPersonData.updateAddress(address));
		Navigator.navigate(OnboardingScreensNavigations.password);
	};

	return (
		<Container>
			<KeyboardAvoidingView>
				<ScrollContainer>
					<ContentText>
						<Title>Endereço</Title>
						<Subtitle>
							Para garantir a segurança da vizinhança e permitir seu acesso ao
							seu bairro dentro do Uri precisamos de algumas informações suas.
						</Subtitle>
					</ContentText>

					<Input
						description="CEP"
						value={address.zipCode}
						maxLength={9}
						keyboardType="number-pad"
						selected={inputSelected.zipCode}
						onFocus={() => {
							setInputSelected({ ...inputSelected, zipCode: true });
							setAddress({ ...address, zipCode: '' });
						}}
						onBlur={() => {
							setInputSelected({ ...inputSelected, zipCode: false });
						}}
						onChangeText={number =>
							setAddress({ ...address, zipCode: maskCep(number) })
						}
					/>

					<Input
						description="Rua"
						value={address.street}
						selected={inputSelected.street}
						onFocus={() => {
							setInputSelected({ ...inputSelected, street: true });
							setAddress({ ...address, street: '' });
						}}
						onBlur={() => {
							setInputSelected({ ...inputSelected, street: false });
						}}
						onChangeText={street => setAddress({ ...address, street: street })}
					/>

					<RowContainer>
						<NumberContainer>
							<Input
								description="Número"
								value={address.number}
								keyboardType="number-pad"
								selected={inputSelected.number}
								onFocus={() => {
									setInputSelected({ ...inputSelected, number: true });
									setAddress({ ...address, number: '' });
								}}
								onBlur={() => {
									setInputSelected({ ...inputSelected, number: false });
								}}
								onChangeText={number =>
									setAddress({ ...address, number: number })
								}
							/>
						</NumberContainer>

						<NeighborhoodContainer>
							<Input
								description="Bairro"
								value={address.neighborhood}
								selected={inputSelected.neighborhood}
								onFocus={() => {
									setInputSelected({ ...inputSelected, neighborhood: true });
									setAddress({ ...address, neighborhood: '' });
								}}
								onBlur={() => {
									setInputSelected({ ...inputSelected, neighborhood: false });
								}}
								onChangeText={neighborhood =>
									setAddress({ ...address, neighborhood: neighborhood })
								}
							/>
						</NeighborhoodContainer>
					</RowContainer>

					<Input
						description="Cidade"
						value={address.city}
						selected={inputSelected.city}
						onFocus={() => {
							setInputSelected({ ...inputSelected, city: true });
							setAddress({ ...address, city: '' });
						}}
						onBlur={() => {
							setInputSelected({ ...inputSelected, city: false });
						}}
						onChangeText={city => setAddress({ ...address, city: city })}
					/>
				</ScrollContainer>
				<Footer
					textButton="Proximo"
					onPress={() => {
						handleNavigateToPasswordScreen();
					}}
				/>
			</KeyboardAvoidingView>
		</Container>
	);
};

export default AddressScreen;
