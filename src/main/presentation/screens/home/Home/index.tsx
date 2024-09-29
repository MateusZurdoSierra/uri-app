import React from 'react';

import Banner from '../../../../../modules/global/components/Banner';

import { FlatList } from 'react-native';
import { IncidentBannerMock } from './mockBanner';
import { Container } from './styles';

const Home: React.FC = () => {
	return (
		<Container>
			<FlatList
				data={IncidentBannerMock}
				renderItem={({ item }) => (
					<Banner
						title={item.person.name}
						message={item.incident.description}
						incidentType={item.incident.type}
						hour={item.incident.createDate}
						numberLikes={254}
						handleLike={() => {
							console.log('like');
						}}
					/>
				)}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{
					flexGrow: 1,
					padding: 16,
					paddingBottom: 86,
					backgroundColor: '#fff',
				}}
			/>
		</Container>
	);
};

export default Home;
