import styled from 'styled-components/native';
import { TypeButton } from '.';

interface StyleProps {
	typeButton?: TypeButton;
	isWhiteButton?: boolean;
	marginBottom?: number;
}

export const Container = styled.TouchableOpacity<StyleProps>`
	height: 54px;
	width: 100%;
	margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : 0)}px;

	border-radius: 30px;
	border-width: 1px;
	border-color: ${({ theme, isWhiteButton }) =>
		isWhiteButton ? theme.colors.white : theme.colors.primary};
	background-color: ${({ theme, isWhiteButton, typeButton }) =>
		typeButton === TypeButton.OUTLINE
			? 'transparent'
			: isWhiteButton
			? theme.colors.white
			: theme.colors.primary};
	align-items: center;
	justify-content: center;
`;

export const LabelButton = styled.Text<StyleProps>`
	font-family: ${({ theme }) => theme.font.regular};
	color: ${({ theme, isWhiteButton, typeButton }) =>
		isWhiteButton && typeButton === TypeButton.OUTLINE
			? theme.colors.white
			: typeButton === TypeButton.OUTLINE
			? theme.colors.primary
			: isWhiteButton
			? theme.colors.danger
			: theme.colors.white};
	font-size: 16px;
`;
