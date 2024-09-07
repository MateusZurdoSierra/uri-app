import styled from 'styled-components/native';

interface StyledProps {
	active: boolean;
}

export const Container = styled.View`
	height: 54px;
	align-items: center;
	justify-content: center;

	flex-direction: row;
`;

export const Circle = styled.View<StyledProps>`
	height: 16px;
	width: 16px;

	border-radius: 8px;
	border-width: 1px;
	border-color: ${({ theme }) => theme.colors.primary};

	margin-right: 8px;
	margin-left: 8px;
	background-color: ${({ theme, active }) =>
		active ? theme.colors.primary : theme.colors.white};
`;
