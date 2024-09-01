import React from 'react';

import Banner from '../../../../modules/global/components/Banner';
import Header from '../../../../modules/global/components/Header';
import { Container } from './styles';

const Home: React.FC = () => {
	return (
		<Container>
			<Header />
			<Banner />
			<Banner />
			<Banner />
			<Banner />
			<Banner />
		</Container>
	);
};

export default Home;
