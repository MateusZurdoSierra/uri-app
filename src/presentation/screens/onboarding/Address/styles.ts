import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	padding: 16px;
	background-color: ${({ theme }) => theme.colors.white};
`;

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

export const RowContainer = styled.View`
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: 16px;
	gap: 10px;
`;

export const NumberContainer = styled.View`
	width: 40%;
	
`;

export const NeighborhoodContainer = styled.View`
	width: 60%;
	
`;
