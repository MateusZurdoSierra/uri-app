import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.white};
`;

export const Image = styled.Image``;

export const TextWelcome = styled.Text`
	font-family: ${({ theme }) => theme.font.bold};
	color: ${({ theme }) => theme.colors.black};
	font-size: 24px;
	font-weight: bold;
`;

export const LabelWelcome = styled.Text`
	font-family: ${({ theme }) => theme.font.regular};
	color: ${({ theme }) => theme.colors.black};
	font-size: 18px;
`;

export const Content = styled.View`
	flex: 1;
	padding: 16px;
`;

export const ContentTexts = styled.View`
	align-items: center;
`;

export const ContentFooter = styled.View`
	flex: 1;
	justify-content: flex-end;
	padding: 16px;
`;
