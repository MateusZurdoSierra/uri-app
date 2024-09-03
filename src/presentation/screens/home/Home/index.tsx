import React from 'react';

import Banner from '../../../../modules/global/components/Banner';
import Header from '../../../../modules/global/components/Header';
import { Container } from './styles';

const Home: React.FC = () => {
	return (
		<Container>
			<Header />
			<Banner
				title="Marcos Batochio"
				message="Vi um carro vermelho suspeito a noite na rua Jose leonardo n 5657"
			/>
			<Banner
				title="Danilo de camargo"
				message="Vi um carro vermelho suspeito a noite na rua Jose leonardo n 5657"
			/>
			<Banner
				title="Mateus Zurdo"
				message="Vi um carro vermelho suspeito a noite na rua Jose leonardo n 5657"
			/>
			<Banner
				title="Higor"
				message="Vi um carro vermelho suspeito a noite na rua Jose leonardo n 5657"
			/>
			<Banner
				title="José Viana"
				message="Vi um carro vermelho suspeito a noite na rua Jose leonardo n 5657"
			/>
		</Container>
	);
};

export default Home;
