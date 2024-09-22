import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	padding: 16px;
	background-color: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.View`
	flex: 1;

	padding-top: 54px;
	align-items: center;
`;

export const ContentTexts = styled.View`
	width: 100%;
	align-items: flex-start;
`;

export const ContentBottomLabel = styled.View`
	margin-top: 48px;
	width: 80%;
	align-items: center;
`;

export const Title = styled.Text`
	margin-top: 24px;
	font-family: ${({ theme }) => theme.font.regular};
	font-size: 24px;
	padding: 16px;
	text-align: center;
`;

export const DescriptionTitle = styled.Text`
	font-family: ${({ theme }) => theme.font.bold};
	color: ${({ theme }) => theme.colors.primary};
	margin-top: 24px;
	font-size: 16px;
`;

export const Description = styled.Text`
	font-family: ${({ theme }) => theme.font.regular};
	font-size: 16px;
`;

export const BottomLabel = styled.Text`
	font-family: ${({ theme }) => theme.font.regular};
	font-size: 16px;
	text-align: center;
`;

export const ColorPrimary = styled.Text`
	font-family: ${({ theme }) => theme.font.semiBold};
	color: ${({ theme }) => theme.colors.primary};
`;
