import styled from 'styled-components/native';

export const Container = styled.View`
	height: 120px;
	align-items: flex-end;
	padding: 16px;
	flex-direction: row;
	background-color: ${({ theme }) => theme.colors.primary};
`;

export const ContentIcon = styled.View`
	width: 50px;
	height: 50px;
	border-radius: 10px;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.white};
`;

export const ContentText = styled.View`
	flex: 1;
`;

export const TitleHeader = styled.Text`
	width: 90%;
	font-family: ${({ theme }) => theme.font.regular};
	color: ${({ theme }) => theme.colors.white};
	font-size: 18px;
	font-weight: bold;
	margin-left: 16px;
`;

export const LabelHeader = styled.Text`
	width: 85%;
	font-family: ${({ theme }) => theme.font.regular};
	color: ${({ theme }) => theme.colors.white};
	font-size: 14px;
	margin-left: 16px;
`;
