import styled from 'styled-components/native';

type StyleProps = {
	withFlex?: boolean;
};

export const FooterContainer = styled.View<StyleProps>`
	flex: ${({ withFlex }) => (withFlex ? 1 : 'none')};
	padding-bottom: 16px;
	align-items: center;
	justify-content: flex-end;
`;
