import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	padding: 16px;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.View`
	align-items: center;
`;

export const Title = styled.Text`
	font-family: ${({ theme }) => theme.font.semiBold};
	margin-top: 32px;
	margin-bottom: 16px;
	font-size: 16px;
	text-align: center;
`;

export const Description = styled.Text`
	font-family: ${({ theme }) => theme.font.regular};
	font-size: 16px;
	text-align: center;
	margin-bottom: 48px;
`;
