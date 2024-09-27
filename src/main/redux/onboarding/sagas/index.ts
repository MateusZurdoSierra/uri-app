import { fork } from 'redux-saga/effects';
import onboardingCepSagas from './cep';
import onboardingPersonSagas from './person';

export default function* OnboardingSagasRoot() {
	yield fork(onboardingCepSagas);
	yield fork(onboardingPersonSagas);
}
