import styled from 'styled-components/native';
import { TypeButton } from '.';

interface StyleProps {
	typeButton?: TypeButton;
}

export const Container = styled.TouchableOpacity<StyleProps>`
	height: 54px;
	width: 100%;

	border-radius: 30px;
	border-width: 1px;
	border-color: ${({ theme }) => theme.colors.primary};
	background-color: ${({ theme, typeButton }) =>
		typeButton === TypeButton.OUTLINE
			? theme.colors.white
			: theme.colors.primary};
	align-items: center;
	justify-content: center;
`;

export const LabelButton = styled.Text<StyleProps>`
	font-family: ${({ theme }) => theme.font.regular};
	color: ${({ theme, typeButton }) =>
		typeButton === TypeButton.OUTLINE
			? theme.colors.primary
			: theme.colors.white};
	font-size: 16px;
`;
