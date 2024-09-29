import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.View`
	flex: 1;
	padding: 16px;
`;

export const ContentTitleAndIllustration = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
	padding: 16px;
`;

export const Title = styled.Text`
	font-family: ${({ theme }) => theme.font.regular};
	text-align: center;
	font-size: 20px;
	margin-bottom: 24px;
`;
