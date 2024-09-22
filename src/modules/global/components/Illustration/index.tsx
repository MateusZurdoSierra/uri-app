import React from 'react';
import { Dimensions, ViewStyle, StyleProp } from 'react-native';

import * as Svgs from './styles';

export type SvgName =
	| 'logo'
	| 'business'
	| 'delivery'
	| 'social'
	| 'notifications'
	| 'send_data';

type IllustrationsType = Record<SvgName, any>;

const illustrations: IllustrationsType = {
	logo: Svgs.Logo,
	business: Svgs.Business,
	delivery: Svgs.Delivery,
	social: Svgs.Social,
	notifications: Svgs.Notifications,
	send_data: Svgs.SendData,
};

export interface PropsImageSvg extends PropsSvg {
	name: SvgName;
}

interface PropsSvg {
	style?: StyleProp<ViewStyle>;
	color?: string;
	width?: number;
	height?: number;
}

const { width: SCREEN_WIDTH } = Dimensions.get('screen');

const Illustration: React.FC<PropsImageSvg> = ({
	name,
	color,
	style,
	width,
	height,
}) => {
	const props: PropsSvg = {
		style: style ?? {},
		color: color ?? '#000000',
		width: width ?? SCREEN_WIDTH * 0.4,
	};

	if (height) props.height = height;

	const renderSvg = () => {
		if (name in illustrations) {
			const IllustrationComponent = illustrations[name];
			return (
				<IllustrationComponent testID={`illustration-${name}`} {...props} />
			);
		}

		return <></>;
	};

	return <Svgs.Container>{renderSvg()}</Svgs.Container>;
};

export default Illustration;
