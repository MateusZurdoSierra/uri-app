import { View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

type StyleProps = {
	removeBorder: boolean;
};

export const SelectButtonContainer = styled(TouchableOpacity)`
	height: 54px;
	justify-content: center;
	border-width: 2px;
	border-color: ${({ theme }) => theme.colors.lines};
	border-radius: 5px;
	color: ${({ theme }) => theme.colors.lines};
	font-size: 14px;
`;

export const DescriptionSelectButton = styled.Text`
	font-family: ${({ theme }) => theme.font.semiBold};
	color: ${({ theme }) => theme.colors.black};
	font-size: 14px;

	margin-bottom: 8px;
`;

export const ContentTextAndIcon = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 0px 16px;
`;

export const TextSelected = styled.Text`
	font-family: ${({ theme }) => theme.font.regular};
	color: ${({ theme }) => theme.colors.gray};
	font-size: 14px;
`;

export const ModalContainer = styled(View)`
	flex: 1;
	justify-content: flex-end;
	background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled(View)`
	background-color: ${({ theme }) => theme.colors.white};
	padding: 16px;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	height: 50%;
`;

export const ModalItem = styled.View<StyleProps>`
	padding: 16px;
	border-bottom-width: ${({ removeBorder }) => (removeBorder ? 0 : 1)}px;
	border-bottom-color: ${({ theme }) => theme.colors.fineLine};
`;

export const ModalItemText = styled.Text`
	font-family: ${({ theme }) => theme.font.regular};
	color: ${({ theme }) => theme.colors.black};
	font-size: 16px;
`;
