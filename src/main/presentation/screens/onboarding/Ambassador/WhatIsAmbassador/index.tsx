import React from 'react';

import {
	BottomLabel,
	ColorPrimary,
	Container,
	Content,
	ContentBottomLabel,
	ContentTexts,
	Description,
	DescriptionTitle,
	Title,
} from './styles';
import Illustration from '../../../../../../modules/global/components/Illustration';

const WhatIsAmbassador: React.FC = ({}) => {
	return (
		<Container>
			<Content>
				<Illustration name="logo" />

				<Title>Afinal, o que é um embaixador Uri?</Title>

				<ContentTexts>
					<DescriptionTitle>Conecte o app com sua vizinhança:</DescriptionTitle>
					<Description>
						Ajude a criar uma rede local de segurança e inspire seus vizinhos a
						se unirem por uma comunidade mais protegida.
					</Description>
				</ContentTexts>

				<ContentTexts>
					<DescriptionTitle>Atue como líder local:</DescriptionTitle>
					<Description>
						Comunique-se diretamente com nossa equipe, reportando atividades
						suspeitas e sugerindo melhorias.
					</Description>
				</ContentTexts>

				<ContentTexts>
					<DescriptionTitle>Badge de embaixador no perfil:</DescriptionTitle>
					<Description>
						Destaque seu papel de liderança e inspire confiança na sua
						comunidade.
					</Description>
				</ContentTexts>

				<ContentBottomLabel>
					<BottomLabel>
						Em breve, entraremos em contato para iniciar essa jornada{' '}
						<ColorPrimary>juntos!</ColorPrimary>
					</BottomLabel>
				</ContentBottomLabel>
			</Content>
		</Container>
	);
};

export default WhatIsAmbassador;
