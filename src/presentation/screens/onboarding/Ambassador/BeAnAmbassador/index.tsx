import React from 'react';

import {
	ColorPrimary,
	Container,
	Content,
	Description,
	DescriptionTitle,
	Title,
} from './styles';
import Illustration from '../../../../../modules/global/components/Illustration';
import Footer from '../../../../../modules/global/components/Footer';

const BeAnAmbassador: React.FC = ({}) => {
	return (
		<Container>
			<Content>
				<Illustration name="logo" />

				<Title>
					Ficamos felizes por você se preocupar com a segurança do seu bairro!
				</Title>
				<Illustration name={'notifications'} width={250} height={0} />
				<DescriptionTitle>
					{'Seja o embaixador do Uri no Seu Bairro!'}
				</DescriptionTitle>
				
				<Description>
					Atualmente, seu bairro ainda
					<ColorPrimary> não está disponível </ColorPrimary>no aplicativo. Mas
					não se preocupe! Estamos
					<ColorPrimary> cientes do seu interesse </ColorPrimary>e, em breve,
					entraremos em contato para convidá-lo a ser um
					<ColorPrimary> embaixador do Uri </ColorPrimary>na sua vizinhança.
				</Description>
			</Content>

			<Footer textButton={'Quero ser um embaixador'} onPress={() => {}} />
		</Container>
	);
};

export default BeAnAmbassador;
