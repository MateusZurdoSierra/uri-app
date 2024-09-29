import React from 'react';

import HeaderBackButton from '../../../../../../modules/global/components/HeaderBackButton';
import { Container, Content, Subtitle, Title } from './styles';
import { Navigator } from '../../../../../../modules/global/utils/rootNavigations';
import { HomeScreensNavigations } from '../../../../../navigation/home';

const NewIncident: React.FC = () => {
	return (
		<Container>
			<HeaderBackButton onPress={() => Navigator.navigate(HomeScreensNavigations.home)} />
			
			<Content>
				<Title>Novo incidente</Title>
				<Subtitle>O que aconteceu?</Subtitle>
			</Content>
		
		</Container>
	);
};

export default NewIncident;
