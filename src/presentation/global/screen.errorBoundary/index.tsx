// import {
// 	Container,
// 	Subtitle,
// 	Title,
// } from '~/modules/global/components/ErrorBoundary/styled';

// import { Button } from '~/modules/global/components/Inputs/Button';
// import Illustration from '~/modules/global/components/Illustration';
import RNRestart from 'react-native-restart';
import React from 'react';
// import { StatusBar } from 'react-native';
// import Theme from '~/main/styles/theme';
// import I18n from 'i18n-js';

/*
 *  This screen has the same functionality as the ErrorBoundary component,
 *  but it "catches" (the user is redirected to this screen) errors that occur
 *  outside of the component tree's scope, like redux and saga.
 */

export const ErrorBoundaryScreen: React.FC = () => {
	// const restart = async (): Promise<void> => {
	// 	RNRestart.Restart();
	// };

	return <></>;
	// return (
	// 	<Container>
	// 		<StatusBar
	// 			backgroundColor={Theme.color.white}
	// 			barStyle={'dark-content'}
	// 		/>
	// 		<Illustration name={'error'} />
	// 		<Title>{I18n.t('error_boundary.title')}</Title>
	// 		<Subtitle>{I18n.t('error_boundary.subtitle')}</Subtitle>
	// 		<Button color="primary" onPress={restart}>
	// 			{I18n.t('error_boundary.restart')}
	// 		</Button>
	// 	</Container>
	// );
};

export default ErrorBoundaryScreen;
