import styled from 'styled-components/native';

const DEFAULT_HEIGHT_KEYBOARD = 16;

export const Container = styled.View`
	flex: 1;
	padding: 16px;
	background-color: ${({ theme }) => theme.colors.white};
`;

export const ScrollContainer = styled.ScrollView.attrs({
	showsVerticalScrollIndicator: false,
})``;

export const ContentText = styled.View`
	margin-top: 70px;
`;

export const Title = styled.Text`
	font-family: ${({ theme }) => theme.font.bold};
	margin-bottom: 8px;
	font-size: 24px;
`;

export const Subtitle = styled.Text`
	font-size: 14px;
`;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView.attrs({
	enabled: true,
	behavior: 'padding',
	keyboardVerticalOffset: DEFAULT_HEIGHT_KEYBOARD,
})`
	flex: 1;
	justify-content: center;
`;
