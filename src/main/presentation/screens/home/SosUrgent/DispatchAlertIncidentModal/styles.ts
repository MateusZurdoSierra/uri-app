import { Modal } from 'react-native';
import styled from 'styled-components/native';

export const ModalContainer = styled(Modal)`
	flex: 1;
`;

export const ModalContent = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

export const ContentLottie = styled.View`
	align-items: center;
	justify-content: center;
`;

export const Description = styled.Text`
	font-family: ${({ theme }) => theme.font.regular};
	color: ${({ theme }) => theme.colors.white};
	text-align: center;
	padding: 0px 16px;
	font-size: 16px;
`;

export const ContentIcon = styled.View`
	width: 50px;
	height: 50px;
	align-items: center;
	justify-content: center;
	position: absolute;
`;

export const ContentButtons = styled.View`
	padding: 16px 16px 32px 16px;
`;
