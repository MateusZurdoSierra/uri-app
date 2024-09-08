import { fork } from 'redux-saga/effects';
import onboardingCepSagas from './cep';

export default function* OnboardingSagasRoot() {
	yield fork(onboardingCepSagas);
}
