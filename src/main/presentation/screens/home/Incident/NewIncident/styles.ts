import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.View`
	flex: 1;
	padding: 0px 16px;
`;

export const Title = styled.Text`
	font-family: ${({ theme }) => theme.font.bold};
	font-size: 24px;
`;
export const Subtitle = styled.Text`
	font-family: ${({ theme }) => theme.font.regular};
	font-size: 18px;
`;
