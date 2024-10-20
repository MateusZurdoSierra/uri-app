import React, { useState } from 'react';

import Input from '../../../../../modules/global/components/Input';
import Footer from '../../../../../modules/global/components/Footer';

import { KeyboardAvoidingView } from '../InformationForm/styles';

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
import { Navigator } from '../../../../../modules/global/utils/rootNavigations';
import {
	OnboardingNavigatorParamList,
	OnboardingScreensNavigations,
} from '../../../../navigation/onboarding';
import { RouteProp, useRoute } from '@react-navigation/native';

type AddressRouteProps = RouteProp<
	OnboardingNavigatorParamList,
	typeof OnboardingScreensNavigations.addressScreen
>;

const AddressScreen: React.FC = () => {
	const [zipCode, setZipCode] = useState<string>('');
	const [street, setStreet] = useState<string>('');
	const [number, setNumber] = useState<string>('');
	const [neighborhood, setNeighborhood] = useState<string>('');
	const [city, setCity] = useState<string>('');

	const { person } = useRoute<AddressRouteProps>().params;

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
						value={zipCode}
						onChangeText={number => setZipCode(number)}
					/>

					<Input
						description="Rua"
						value={street}
						onChangeText={text => setStreet(text)}
					/>

					<RowContainer>
						<NumberContainer>
							<Input
								description="Número"
								value={number}
								onChangeText={number => setNumber(number)}
							/>
						</NumberContainer>

						<NeighborhoodContainer>
							<Input
								description="Bairro"
								value={neighborhood}
								onChangeText={text => setNeighborhood(text)}
							/>
						</NeighborhoodContainer>
					</RowContainer>

					<Input
						description="Cidade"
						value={city}
						onChangeText={text => setCity(text)}
					/>
				</ScrollContainer>
				<Footer
					textButton="Proximo"
					onPress={() => {
						Navigator.navigate(OnboardingScreensNavigations.password, {
							person,
							address: {
								zipCode,
								street,
								number,
								neighborhood,
								city,
							},
						});
					}}
				/>
			</KeyboardAvoidingView>
		</Container>
	);
};

export default AddressScreen;
