import styled from 'styled-components/native';

export const ContentBanner = styled.View`
	height: auto;
	width: 100%;

	padding: 16px;
	border-radius: 12px;
	border-width: 1px;
	border-color: ${({ theme }) => theme.colors.fineLine};

	background-color: ${({ theme }) => theme.colors.white};
	margin-bottom: 16px;
`;

export const ContentTitle = styled.View`
	flex: 1;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
`;

export const TitleBanner = styled.Text`
	font-family: ${({ theme }) => theme.font.medium};
	color: ${({ theme }) => theme.colors.black};
	font-size: 18px;

	max-width: 80%;
	margin-bottom: 4px;
`;

export const TitleHour = styled.Text`
	font-family: ${({ theme }) => theme.font.regular};
	color: ${({ theme }) => theme.colors.fineLine};
	font-size: 12px;
	margin-left: 12px;
`;

export const MessageBanner = styled.Text`
	font-family: ${({ theme }) => theme.font.regular};
	color: ${({ theme }) => theme.colors.black};
	font-size: 14px;
	margin-bottom: 8px;
`;

export const ContentLike = styled.TouchableOpacity`
	border-radius: 5px;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	align-self: flex-start;
	padding: 4px 8px;
	background-color: ${({ theme }) => theme.colors.fineLine};
`;

export const NumberLikes = styled.Text`
	font-family: ${({ theme }) => theme.font.regular};
	color: ${({ theme }) => theme.colors.lines};
	font-size: 14px;
	margin-left: 4px;
`;
