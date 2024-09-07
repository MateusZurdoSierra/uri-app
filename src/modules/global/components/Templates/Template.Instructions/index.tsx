import React from 'react';

import { Container, Content, Description } from './styles';
import Illustration, { SvgName } from '../../Illustration';
import Footer from '../../Footer';
import StepsCircle from '../../StepsCircle';

export interface TemplateInstructionsProps {
	illustration: SvgName;
	description: string;
	textButton: string;
	quantityCircles?: number;
	stepIndex?: number;
	onPress: () => void;
}

const TemplateInstructions: React.FC<TemplateInstructionsProps> = ({
	illustration,
	description,
	textButton,
	quantityCircles,
	stepIndex,
	onPress,
}) => {
	return (
		<Container>
			<Content>
				<Illustration name="logo" />

				<Illustration name={illustration} width={250} height={0} />
				<Description>{description}</Description>
				<StepsCircle quantityCircles={quantityCircles} stepIndex={stepIndex} />
			</Content>

			<Footer textButton={textButton} onPress={() => onPress()} />
		</Container>
	);
};

export default TemplateInstructions;
