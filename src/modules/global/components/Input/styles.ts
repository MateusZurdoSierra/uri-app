import styled from 'styled-components/native';

interface StyleProps {
	selected?: boolean;
}

export const InputContainer = styled.View`
	margin-top: 16px;
	width: 100%;
`;

export const InputComponent = styled.TextInput<StyleProps>`
	height: 54px;

	border-width: 2px;
	border-color: ${({ theme, selected }) =>
		selected ? theme.colors.primary : theme.colors.lines};
	border-radius: 5px;
	padding: 0px 16px;
	color: ${({ theme }) => theme.colors.lines};
	font-size: 14px;
`;

export const DescriptionInput = styled.Text`
	font-family: ${({ theme }) => theme.font.semiBold};
	color: ${({ theme }) => theme.colors.black};
	font-size: 14px;
	font-weight: bold;

	margin-bottom: 8px;
`;
