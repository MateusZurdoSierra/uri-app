import React, { useState } from 'react';
import TemplateInstructions, {
	TemplateInstructionsProps,
} from '../../../../modules/global/components/Templates/Template.Instructions';
import { Navigator } from '../../../../modules/global/utils/rootNavigations';
import { OnboardingScreensNavigations } from '../../../../main/navigation/onboarding';

const Instructions: React.FC = () => {
	const [step, setStep] = useState(0);

	const nextStep = () => {
		setStep(prev => prev + 1);
	};

	const backStep = () => {
		setStep(prev => prev - 1);
	};

	const navigateFirstAccess = () => {
		Navigator.navigate(OnboardingScreensNavigations.firstAccess);
	};

	const steps: TemplateInstructionsProps[] = [
		{
			stepIndex: 0,
			description:
				'Aplicativo desenvolvido 100% por pessoas que moram fora de condomínios, entendemos os dilemas e necessidades de uma casa na rua.',
			illustration: 'delivery',
			textButton: 'Próximo',
			onPress: nextStep,
		},
		{
			stepIndex: 1,
			description:
				'O Uri App tem a missão de tornar a vida dos bairros e vizinhanças mais seguros por meio do fortalecimento da comunidade e comunicação.',
			illustration: 'social',
			textButton: 'Próximo',
			onPress: nextStep,
		},
		{
			stepIndex: 2,
			description:
				'Nosso propósito é de juntos provarmos que a vida em uma casa de bairro pode ser tão segura quanto em um condomínio, só depende de nós.',
			illustration: 'business',
			textButton: 'Próximo',
			onPress: navigateFirstAccess,
		},
	];

	return (
		<TemplateInstructions {...steps[step]} quantityCircles={steps.length} />
	);
};

export default Instructions;
