import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.white};
`;

export const ContentTitle = styled.View`
	position: absolute;
	height: 35%;
	width: 100%;

	align-items: center;
	justify-content: flex-end;
`;

export const ContentDescription = styled.View`
	position: absolute;
	height: 80%;
	width: 100%;

	align-items: center;
	justify-content: flex-end;
	padding: 0px 24px;
`;

export const ContentButtons = styled.SafeAreaView`
	position: absolute;
	height: 100%;
	width: 100%;

	align-items: center;
	justify-content: flex-end;
	padding: 0px 24px;
`;

export const ButtonsRow = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: center;
	padding: 0px 24px;
	width: 100%;
`;

export const ContentRightIcon = styled.View`
	position: absolute;
	padding-left: 250px;
`;

export const Title = styled.Text`
	font-family: ${({ theme }) => theme.font.regular};
	color: ${({ theme }) => theme.colors.white};
	font-size: 24px;
	margin-bottom: 16px;
	text-align: center;
`;

export const DescriptionTitle = styled.Text`
	font-family: ${({ theme }) => theme.font.semiBold};
	color: ${({ theme }) => theme.colors.white};
	font-size: 16px;
	text-align: center;
	margin-bottom: 4px;
`;

export const LabelBottom = styled.Text`
	font-family: ${({ theme }) => theme.font.extraLight};
	color: ${({ theme }) => theme.colors.white};
	font-size: 16px;
	text-align: center;
`;

export const TouchableIcon = styled.TouchableOpacity``;
