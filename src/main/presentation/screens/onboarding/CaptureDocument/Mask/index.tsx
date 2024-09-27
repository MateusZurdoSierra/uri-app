import React from 'react';

import {
	Container,
	Content,
	MaskContainer,
	MaskContent,
	MaskBackgroundFrame,
	MaskFrame,
	BackgroundMask,
} from './styles';

const Mask = () => (
	<Container>
		<Content>
			<MaskContainer>
				<MaskContent id="mask">
					<MaskBackgroundFrame />
					<MaskFrame />
				</MaskContent>
			</MaskContainer>
			<BackgroundMask mask="url(#mask)" />
		</Content>
	</Container>
);

export default Mask;
