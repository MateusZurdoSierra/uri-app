import { Dimensions } from 'react-native';

import Svg, { Defs, Rect, Mask } from 'react-native-svg';
import styled from 'styled-components/native';

const { height, width } = Dimensions.get('window');

const viewBox = `0 0 ${width} ${height}`;

export const Container = styled.View`
	flex: 1;
`;

export const Content = styled(Svg).attrs({
	height,
	ContainerBox: viewBox,
})``;

export const MaskContainer = styled(Defs)``;

export const MaskContent = styled(Mask)``;

export const MaskBackgroundFrame = styled(Rect).attrs({
	height,
	width,
})`
	fill: ${({ theme }) => theme.colors.white};
`;

export const MaskFrame = styled(Rect).attrs({
	x: 20,
	y: 320,
	width: width - 40,
	height: height - 600,
})`
	fill: ${({ theme }) => theme.colors.black};
`;

export const BackgroundMask = styled(Rect).attrs({
	height,
	width,
	fill: '#0009',
})``;
