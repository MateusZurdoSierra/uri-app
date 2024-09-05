import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	justify-content: flex-end;
	background-color: ${({ theme }) => theme.colors.primary};
`;

export const Content = styled.View`
	height: 70%;

	border-top-left-radius: 30px;
	border-top-right-radius: 30px;

	padding: 16px;
	background-color: ${({ theme }) => theme.colors.white};
`;

export const Access = styled.Text`
	font-family: ${({ theme }) => theme.font.semibold};
	font-size: 32px;

	margin-top: 30px;
`;

export const ViewText = styled.View`
	padding: 8px 0px;
	align-items: flex-end;
`;

export const ForgotMyPassword = styled.Text`
	font-family: ${({ theme }) => theme.font.regular};
	color: ${({ theme }) => theme.colors.primary};
`;

export const Footer = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
`;

export const DividerContent = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin-top: 30px;
	margin-bottom: 30px;
	width: 100%;
`;

export const Line = styled.View`
	width: 40%;
	height: 1px;
	border: 1px solid ${({ theme }) => theme.colors.lines};
`;

export const DividerText = styled.Text`
	font-family: ${({ theme }) => theme.font.regular};
	color: ${({ theme }) => theme.colors.lines};
`;
