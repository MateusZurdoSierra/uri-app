import { Button, ButtonLink } from '~/modules/global/components/Inputs/Button';
import {
	ButtonContainer,
	Container,
	ContainerSafeArea,
	ExtraMessage,
	Message,
	Title,
} from './styles';
import Illustration, { SvgName } from '../../Illustration';

import React from 'react';

export interface CustomStatusProps {
	title: string;
	message: string;
	customButtonsComponent?: React.ReactNode;
	buttonText?: string;
	extraMessage?: string;
	onButtonPress?(): void;
	illustrationName: SvgName;
	secondaryButtonText?: string;
	onSecondaryButtonPress?(): void;
}

const CustomStatusTemplate: React.FC<CustomStatusProps> = ({
	title,
	message,
	buttonText,
	extraMessage,
	customButtonsComponent,
	onButtonPress,
	illustrationName,
	secondaryButtonText,
	onSecondaryButtonPress,
}) => {
	const withPrimaryButton = buttonText && onButtonPress;
	const withSecondaryButton = secondaryButtonText && onSecondaryButtonPress;

	const renderSecondaryButton = (
		<ButtonLink onPress={onSecondaryButtonPress}>
			{secondaryButtonText}
		</ButtonLink>
	);

	const renderPrimaryButton = (
		<Button onPress={onButtonPress}>{buttonText}</Button>
	);

	return (
		<ContainerSafeArea>
			<Container>
				<Illustration name={illustrationName} />

				<Title>{title}</Title>
				<Message>{message}</Message>
				{extraMessage && <ExtraMessage>{extraMessage}</ExtraMessage>}
			</Container>
			<ButtonContainer>
				{customButtonsComponent || (
					<>
						{withSecondaryButton && renderSecondaryButton}
						{withPrimaryButton && renderPrimaryButton}
					</>
				)}
			</ButtonContainer>
		</ContainerSafeArea>
	);
};

export default CustomStatusTemplate;
