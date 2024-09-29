import React, { useState } from 'react';

import HeaderBackButton from '../../../../../../modules/global/components/HeaderBackButton';
import SelectButton from '../../../../../../modules/global/components/SelectButton';
import LocationItem from '../../../../../../modules/global/components/LocationItem';
import { Navigator } from '../../../../../../modules/global/utils/rootNavigations';
import { HomeScreensNavigations } from '../../../../../navigation/home';
import Input from '../../../../../../modules/global/components/Input';

import { Container, Content, Subtitle, Title } from './styles';
import { useLocation } from '../../../../../../modules/global/hooks/useLocation';
import Footer from '../../../../../../modules/global/components/Footer';

const NewIncident: React.FC = () => {
	const [typeIncident, setTypeIncident] = useState('');
	const [description, setDescription] = useState('Descreva o incidente');
	const [selected, setSelected] = useState(false);

	const { currentAddress } = useLocation();

	return (
		<Container>
			<HeaderBackButton
				onPress={() => Navigator.navigate(HomeScreensNavigations.home)}
			/>

			<Content>
				<Title>Novo incidente</Title>
				<Subtitle>O que aconteceu?</Subtitle>

				<SelectButton
					value="Selecione o tipo do incidente"
					description="Tipo do incidente"
					onSelectedItem={item => setTypeIncident(item)}
				/>

				<Input
					description="Descreva o incidente"
					value={description}
					selected={selected}
					onFocus={() => {
						setDescription('');
						setSelected(true);
					}}
					onBlur={() => setSelected(false)}
					onChangeText={text => {
						setDescription(text);
					}}
				/>

				<LocationItem location={currentAddress} />

				<Footer withFlex textButton="Registrar incidente" onPress={() => {}} />
			</Content>
		</Container>
	);
};

export default NewIncident;
