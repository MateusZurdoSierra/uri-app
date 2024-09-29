import React, { useState } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import {
	ContentBanner,
	ContentLike,
	ContentTitle,
	MessageBanner,
	NumberLikes,
	TitleBanner,
	TitleHour,
} from './styles';

interface BannerProps {
	title: string;
	message: string;
	incidentType: string;
	hour: string;
	numberLikes: number;
	handleLike: () => void;
}

const Banner: React.FC<BannerProps> = ({
	title,
	message,
	incidentType,
	hour,
	numberLikes,
	handleLike,
}) => {
	const [like, setLike] = useState(false);

	return (
		<ContentBanner>
			<ContentTitle>
				<TitleBanner numberOfLines={1}>{title}</TitleBanner>
				<TitleHour numberOfLines={1}>{hour}</TitleHour>
			</ContentTitle>
			<MessageBanner>{`${incidentType} - ${message}`}</MessageBanner>

			<ContentLike
				onPress={() => {
					setLike(p => !p);
				}}>
				{like ? (
					<FontAwesome name="heart" size={16} color={'#8133f1'} />
				) : (
					<FontAwesome name="heart-o" size={16} color={'#8133f1'} />
				)}

				<NumberLikes>{numberLikes}</NumberLikes>
			</ContentLike>
		</ContentBanner>
	);
};

export default Banner;
