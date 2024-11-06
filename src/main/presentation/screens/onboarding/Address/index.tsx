import React, { useState } from 'react';

import Input from '../../../../../modules/global/components/Input';
import Footer from '../../../../../modules/global/components/Footer';

import { Navigator } from '../../../../../modules/global/utils/rootNavigations';
import { OnboardingActions } from '../../../../redux/onboarding/reducers';
import { KeyboardAvoidingView } from '../InformationForm/styles';
import { useDispatch } from 'react-redux';

import {
	OnboardingScreensNavigations,
} from '../../../../navigation/onboarding';

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
						onChangeText={number => setAddress({ ...address, zipCode: number })}
					/>

					<Input
						description="Rua"
						value={address.street}
						onChangeText={street => setAddress({ ...address, street: street })}
					/>

					<RowContainer>
						<NumberContainer>
							<Input
								description="Número"
								value={address.number}
								onChangeText={number =>
									setAddress({ ...address, number: number })
								}
							/>
						</NumberContainer>

						<NeighborhoodContainer>
							<Input
								description="Bairro"
								value={address.neighborhood}
								onChangeText={neighborhood =>
									setAddress({ ...address, neighborhood: neighborhood })
								}
							/>
						</NeighborhoodContainer>
					</RowContainer>

					<Input
						description="Cidade"
						value={address.city}
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
