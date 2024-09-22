import styled from 'styled-components/native';

export const TouchableButton = styled.TouchableOpacity`
	z-index: 99;
`;

export const ContentButtonCapture = styled.View`
	height: 60px;
	width: 60px;
	border-radius: 100px;

	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.white};
`;

export const ButtonCaptureSpace = styled.View`
	height: 54px;
	width: 54px;
	border-radius: 100px;

	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.gray};
`;

export const ButtonCaptureCenter = styled.View`
	height: 50px;
	width: 50px;
	border-radius: 100px;
	background-color: ${({ theme }) => theme.colors.white};
`;
