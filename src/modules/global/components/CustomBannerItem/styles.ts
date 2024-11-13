import styled from 'styled-components/native';

type StyleProps = {
	marginTop?: number;
	marginBottom?: number;
}

export const Container = styled.View<StyleProps>`
	height: auto;
	width: 100%;
	padding: 16px;

	margin-top: ${({ marginTop }) => marginTop ?? 0}px;
	margin-bottom: ${({marginBottom}) => marginBottom ?? 0}px;

	border-radius: 10px;
	border-width: 1px;
	border-color: ${({ theme }) => theme.colors.lines};

	background-color: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
`;

export const ContentTexts = styled.View`
	max-width: 90%;
	margin-left: 8px;
`;

export const Title = styled.Text`
	font-family: ${({ theme }) => theme.font.medium};
	color: ${({ theme }) => theme.colors.black};
	font-size: 16px;
`;

export const Description = styled.Text`
	font-family: ${({ theme }) => theme.font.regular};
	color: ${({ theme }) => theme.colors.gray};
	font-size: 14px;
`;
