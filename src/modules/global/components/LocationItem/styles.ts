import styled from 'styled-components/native';

export const Container = styled.View`
	margin-top: 16px;
	width: 100%;
`;

export const Content = styled.View`
	flex-direction: row;
	height: 54px;
	align-items: center;
	justify-content: flex-start;
	border-width: 2px;
	border-color: ${({ theme }) => theme.colors.lines};
	border-radius: 5px;
	padding: 0px 16px;
	color: ${({ theme }) => theme.colors.lines};
	font-size: 14px;
`;

export const DescriptionLocation = styled.Text`
	font-family: ${({ theme }) => theme.font.semiBold};
	color: ${({ theme }) => theme.colors.black};
	font-size: 14px;

	margin-bottom: 8px;
`;

export const CircleIcon = styled.View`
	height: 40px;
	width: 40px;
	border-radius: 20px;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.primary};
`;

export const ContentValues = styled.View`
	margin-left: 8px;
	flex: 1;
`;

export const DescriptionMyLocation = styled.Text`
	font-family: ${({ theme }) => theme.font.semiBold};
	color: ${({ theme }) => theme.colors.black};
	font-size: 14px;
`;

export const ValueLocation = styled.Text`
	font-family: ${({ theme }) => theme.font.regular};
	color: ${({ theme }) => theme.colors.gray};
	font-size: 14px;
`;
