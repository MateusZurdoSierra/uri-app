import React from 'react';

import { ContentBanner, MessageBanner, TitleBanner } from './styles';

interface BannerProps {
	title: string;
	message: string;
}

const Banner: React.FC<BannerProps> = ({ title, message }) => {
	return (
		<ContentBanner>
			<TitleBanner>{title}</TitleBanner>
			<MessageBanner>{message}</MessageBanner>
		</ContentBanner>
	);
};

export default Banner;
