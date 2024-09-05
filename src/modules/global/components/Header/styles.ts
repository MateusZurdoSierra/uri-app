import styled from 'styled-components/native';

export const ContentHeader = styled.View`
	height: 54px;
	width: 100%;

	flex-direction: row;
	align-items: center;
`;

export const ContentText = styled.View``;

export const TitleHeader = styled.Text`
	font-family: ${({theme}) => theme.font.regular};
	color: ${({ theme }) => theme.colors.black};
	font-size: 18px;
	font-weight: bold;
	margin-left: 16px;
`;

export const LabelHeader = styled.Text`
	font-family: ${({theme}) => theme.font.regular};
	color: ${({ theme }) => theme.colors.black};
	font-size: 14px;
	margin-left: 16px;
`;
