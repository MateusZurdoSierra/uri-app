import styled from 'styled-components/native';

export const ContentBanner = styled.View`
	height: auto;
	width: 100%;

	padding: 16px;
	border-radius: 12px;

	background-color: ${({theme}) => theme.colors.white};
	margin-top: 24px;
`;

export const TitleBanner = styled.Text`
	font-family: ${({theme}) => theme.font.semiBold};
	color: ${({theme}) => theme.colors.black};
	font-size: 18px;

	margin-bottom: 8px;
`;

export const MessageBanner = styled.Text`
	font-family: ${({theme}) => theme.font.regular};
	color: ${({theme}) => theme.colors.black};
	font-size: 14px;
`;
