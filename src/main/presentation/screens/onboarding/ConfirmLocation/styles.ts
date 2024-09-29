import styled from 'styled-components/native';
import { View } from 'react-native';

export const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.white};
`;

export const ContentTexts = styled.View`
	padding: 16px;
`;

export const Title = styled.Text`
	font-family: ${({ theme }) => theme.font.semiBold};
	margin-top: 54px;
	font-size: 24px;
`;

export const TitleModal = styled.Text`
	font-family: ${({ theme }) => theme.font.semiBold};
	margin-top: 16px;
	font-size: 24px;
`;

export const Description = styled.Text`
	font-family: ${({ theme }) => theme.font.regular};
	color: ${({ theme }) => theme.colors.gray};
	font-size: 16px;
`;

export const ModalContainer = styled(View)`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
`;

export const ModalContent = styled(View)`
	background-color: ${({ theme }) => theme.colors.white};
	padding: 16px;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	height: 250px;
	width: 100%;
	position: absolute;
	bottom: 0;
`;
