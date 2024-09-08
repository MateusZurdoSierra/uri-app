import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	padding: 16px;
	background-color: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.View`
	flex: 4;

	padding-top: 54px;
	align-items: center;
	justify-content: space-between;
`;

export const Title = styled.Text`
	font-family: ${({ theme }) => theme.font.regular};
	font-size: 24px;
	padding: 16px;
	text-align: center;
`;

export const DescriptionTitle = styled.Text`
	font-family: ${({ theme }) => theme.font.bold};
	color: ${({ theme }) => theme.colors.primary};
	font-size: 16px;
	text-align: center;
`;

export const Description = styled.Text`
	font-family: ${({ theme }) => theme.font.regular};
	font-size: 16px;
	text-align: center;
`;

export const ColorPrimary = styled.Text`
	font-family: ${({ theme }) => theme.font.semiBold};
	color: ${({ theme }) => theme.colors.primary};
`;
