import { call, takeLatest } from 'redux-saga/effects';
import { OnboardingActions } from '../../reducers';
import { PersonPayload } from '../../reducers/person-reducer';
import { PersonServices } from '../../services/person';

export function* statusPerson({ payload: { person } }: PersonPayload) {
	try {
		yield call(PersonServices.fetchStatusPerson, person);
	} catch (error) {
		console.log(error);
	}
}

export default function* personRoot() {
	yield takeLatest(OnboardingActions.person.statusPerson, statusPerson);
}
