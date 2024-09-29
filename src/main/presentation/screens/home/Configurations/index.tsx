import React from 'react';
import HeaderBackButton from '../../../../../modules/global/components/HeaderBackButton';
import { Container, Content, Title } from './styles';
import { Navigator } from '../../../../../modules/global/utils/rootNavigations';
import { HomeScreensNavigations } from '../../../../navigation/home';

const Configurations: React.FC = () => {
	return (
		<Container>
			<HeaderBackButton
				onPress={() => Navigator.navigate(HomeScreensNavigations.home)}
			/>
			<Content>
				<Title>Configurações</Title>
			</Content>
		</Container>
	);
};

export default Configurations;
