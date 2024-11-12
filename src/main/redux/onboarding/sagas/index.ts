import { fork } from 'redux-saga/effects';
import onboardingPersonSagas from './person';

export default function* OnboardingSagasRoot() {
	yield fork(onboardingPersonSagas);
}
