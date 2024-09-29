import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.View`
	flex: 1;
	padding: 16px;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.white};
`;

export const ContentLottie = styled.View`
	align-items: center;
	justify-content: center;
`;

export const ContentIcon = styled.TouchableOpacity`
	width: 50px;
	height: 50px;
	align-items: center;
	justify-content: center;
	position: absolute;
`;

export const Title = styled.Text`
	font-family: ${({ theme }) => theme.font.bold};
	color: ${({ theme }) => theme.colors.danger};
	text-align: center;
	font-size: 20px;
	margin-bottom: 24px;
`;

export const Subtitle = styled.Text`
	font-family: ${({ theme }) => theme.font.regular};
	text-align: center;
	padding: 0px 16px;
	font-size: 16px;
`;
