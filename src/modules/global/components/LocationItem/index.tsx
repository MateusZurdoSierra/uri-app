import React from 'react';
import Entypo from '@expo/vector-icons/Entypo';

import {
	CircleIcon,
	Container,
	Content,
	ContentValues,
	DescriptionLocation,
	DescriptionMyLocation,
	ValueLocation,
} from './styles';

interface LocationItemProps {
	location: string|null;
}

const LocationItem: React.FC<LocationItemProps> = ({ location }) => {
	return (
		<Container>
			<DescriptionLocation>Local do incidente</DescriptionLocation>
			<Content>
				<CircleIcon>
					<Entypo name="location" size={20} color="white" />
				</CircleIcon>

				<ContentValues>
					<DescriptionMyLocation numberOfLines={1}>Minha localização atual</DescriptionMyLocation>
					<ValueLocation numberOfLines={1}>{location}</ValueLocation>
				</ContentValues>
			</Content>
		</Container>
	);
};

export default LocationItem;
