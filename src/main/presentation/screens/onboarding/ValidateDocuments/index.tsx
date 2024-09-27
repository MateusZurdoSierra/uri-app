import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

import { Container, Content, Description, Title } from './styles';
import Illustration from '../../../../../modules/global/components/Illustration';
import CustomBannerItem from '../../../../../modules/global/components/CustomBannerItem';

const ValidateDocuments: React.FC = () => {
	return (
		<Container>
			<Content>
				<Illustration name={'validate_upload'} width={250} height={0} />

				<Title>Verificando sua identidade</Title>
				<Description>
					Estamos validando suas informações e, em breve, você receberá uma
					notificação confirmando que seu cadastro foi liberado. Agradecemos
					pela sua paciência!
				</Description>

				<CustomBannerItem
					title={'Verificação de Identidade'}
					description={
						'Recebemos seus arquivos, aguarde enquanto processamos as informações'
					}
					icon={<FontAwesome name="vcard" size={30} color="#8133f1" />}
					marginBottom={16}
				/>
				<CustomBannerItem
					title={'Confirmar localização'}
					description={
						'Recebemos sua localização. Estamos processando as informações e em breve você receberá uma notificação.'
					}
					icon={<FontAwesome6 name="location-dot" size={30} color="#8133f1" />}
				/>
			</Content>
		</Container>
	);
};

export default ValidateDocuments;
