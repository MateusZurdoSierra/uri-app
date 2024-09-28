import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	padding: 16px;
	background-color: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.View`
	flex: 1;

	padding: 54px 0px;
	align-items: center;
	justify-content: space-between;
`;

export const Description = styled.Text`
	font-family: ${({ theme }) => theme.font.regular};
	font-size: 16px;
	padding: 16px;
	text-align: center;
`;
