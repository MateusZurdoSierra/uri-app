import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

import { Container, Content, Description, Title } from './styles';
import Illustration from '../../../../modules/global/components/Illustration';
import Footer from '../../../../modules/global/components/Footer';
import CustomBannerItem from '../../../../modules/global/components/CustomBannerItem';

const ConfirmData: React.FC = () => {
	return (
		<Container>
			<Content>
				<Illustration name={'send_data'} width={250} height={0} />

				<Title>Confirme seus dados</Title>
				<Description>
					Por favor, envie os documentos solicitados abaixo para verificarmos
					sua identidade.
				</Description>

				<CustomBannerItem
					title={'Verificação de Identidade'}
					description={
						'Por favor, forneça uma foto de alta qualidade do seu RG ou CNH.'
					}
					icon={<FontAwesome name="vcard" size={30} color="gray" />}
					marginBottom={16}
				/>
				<CustomBannerItem
					title={'Confirmar localização'}
					description={
						'Por favor, compartilhe sua localização atual e o comprovante de endereço.'
					}
					icon={<FontAwesome6 name="location-dot" size={30} color="gray" />}
				/>
			</Content>

			<Footer textButton={'Começar'} onPress={() => {}} />
		</Container>
	);
};

export default ConfirmData;
