import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
	height: 54px;
	width: 100%;

	border-radius: 5px;
	background-color: ${({theme}) => theme.colors.primary};
	align-items: center;
	justify-content: center;
`;

export const LabelButton = styled.Text`
	color: #fff;
	font-size: 16px;
`;
