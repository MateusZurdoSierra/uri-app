import { call, takeLatest } from 'redux-saga/effects';
import { OnboardingActions } from '../../reducers';
import { PersonPayload } from '../../reducers/person-reducer';
import { PersonServices } from '../../services/person';
import { PersonResponse } from '../../services/person/types';
import { Navigator } from '../../../../../modules/global/utils/rootNavigations';
import { ScreensNameRoot } from '../../../../navigation';

export function* statusPerson({ payload: { person } }: PersonPayload) {
	try {
		const response: PersonResponse = yield call(
			PersonServices.fetchStatusPerson,
			{ person },
		);

		if (response.hasAccount) {
			yield Navigator.navigate(ScreensNameRoot.auth);
		}
	} catch (error) {
		console.log(error);
	}
}

export default function* personRoot() {
	yield takeLatest(OnboardingActions.person.statusPerson, statusPerson);
}
