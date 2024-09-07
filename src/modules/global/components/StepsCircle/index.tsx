import React from 'react';
import { Circle, Container } from './styles';

interface StepsCircleProps {
	quantityCircles?: number;
	stepIndex?: number;
}

const StepsCircle: React.FC<StepsCircleProps> = ({
	quantityCircles,
	stepIndex,
}) => {
	return (
		<Container>
			{[...Array(quantityCircles)].map((_, index) => (
				<Circle key={index} active={index === stepIndex} />
			))}
		</Container>
	);
};

export default StepsCircle;
