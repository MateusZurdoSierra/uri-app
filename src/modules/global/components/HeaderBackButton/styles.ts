import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
	height: 120px;
	align-items: flex-end;
	padding: 16px;
	flex-direction: row;
	background-color: ${({ theme }) => theme.colors.white};
`;

export const ContentIcon = styled.View`
	width: 50px;
	height: 50px;
	border-radius: 10px;
	border-width: 1px;
	border-color: ${({ theme }) => theme.colors.fineLine};
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.white};
`;
