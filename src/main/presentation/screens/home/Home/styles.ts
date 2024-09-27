import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	background-color: ${({theme}) => theme.colors.white};
	padding: 16px;
	align-items: center;
	justify-content: center;
`;