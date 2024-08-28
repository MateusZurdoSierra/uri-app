import React from 'react';

import { ContentBanner, MessageBanner, TitleBanner } from './styles';

const Banner: React.FC = () => {
	return (
		<ContentBanner>
			<TitleBanner>Danilo Camargo</TitleBanner>
			<MessageBanner>
				Suspeito - Homem alto com bluza azul e capuz andando pela Rua Leopoldo
				Arantes por volta das 23:00 horas.
			</MessageBanner>
		</ContentBanner>
	);
};

export default Banner;
