import * as Typography from '~/modules/global/components/Text';

//@ts-ignore
import styled from 'styled-components/native';
import { ThemeStyledComponent } from '~/main/styles/theme';

export const ContainerSafeArea = styled.SafeAreaView`
	flex: 1;
	background: ${({ theme }: ThemeStyledComponent) => theme.colors.white};
`;

export const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
	margin: 32px;
`;

export const ButtonContainer = styled.View`
	padding: 16px;
`;

export const Title = styled(Typography.Title).attrs(() => ({
	color: 'black',
}))`
	text-align: center;
	margin-top: 42px;
	margin-bottom: 8px;
`;

export const Message = styled(Typography.Body).attrs({
	color: 'black',
	size: 'md',
})`
	text-align: center;
	margin-bottom: 16px;
`;

export const ExtraMessage = styled(Typography.Body).attrs({
	color: 'black',
	size: 'sm',
})`
	text-align: center;
	margin-bottom: 16px;
`;
