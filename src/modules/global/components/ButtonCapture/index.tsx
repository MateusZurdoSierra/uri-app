import React from 'react';

import {
	ButtonCaptureCenter,
	ButtonCaptureSpace,
	TouchableButton,
	ContentButtonCapture,
} from './styles';

interface ButtonCaptureProps {
	onPress: () => void;
}

const ButtonCapture: React.FC<ButtonCaptureProps> = ({onPress}) => {
	return (
		<TouchableButton onPress={() => onPress}>
			<ContentButtonCapture>
				<ButtonCaptureSpace>
					<ButtonCaptureCenter />
				</ButtonCaptureSpace>
			</ContentButtonCapture>
		</TouchableButton>
	);
};

export default ButtonCapture;
