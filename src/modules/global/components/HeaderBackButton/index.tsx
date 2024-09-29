import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { Container, ContentIcon } from './styles';

interface HeaderBackButtonProps {
	onPress: () => void;
}

const HeaderBackButton: React.FC<HeaderBackButtonProps> = ({ onPress }) => {
	return (
		<Container onPress={onPress}>
			<ContentIcon>
				<FontAwesome name="arrow-left" size={20} color="#595959" />
			</ContentIcon>
		</Container>
	);
};

export default HeaderBackButton;
