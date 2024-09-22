import React from 'react';
import { View } from 'react-native';

import { Container, Content, ContentTexts, Description, Title } from './styles';

interface CustomBannerItemProps {
	title?: string;
	description?: string;
	marginTop?: number;
	marginBottom?: number;
	icon?: React.ReactNode;
}

const CustomBannerItem: React.FC<CustomBannerItemProps> = ({
	title,
	description,
	marginTop,
	marginBottom,
	icon,
}) => {
	return (
		<Container marginTop={marginTop} marginBottom={marginBottom}>
			<Content>
				{icon ? icon : null}

				<ContentTexts>
					<Title>{title}</Title>
					<Description numberOfLines={2}>{description}</Description>
				</ContentTexts>
			</Content>
		</Container>
	);
};

export default CustomBannerItem;
