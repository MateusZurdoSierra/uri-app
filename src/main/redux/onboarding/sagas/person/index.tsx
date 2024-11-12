import { call, put, takeLatest } from 'redux-saga/effects';

import { Navigator } from '../../../../../modules/global/utils/rootNavigations';
import { OnboardingScreensNavigations } from '../../../../navigation/onboarding';
import { FetchPersonResponse } from '../../services/person/types';
import { ScreensNameRoot } from '../../../../navigation';
import { PersonServices } from '../../services/person';
import { OnboardingActions } from '../../reducers';

import {
	OnboardingPersonActions,
	PersonPayload,
} from '../../reducers/person-reducer';

export function* statusPerson({ payload: { person } }: PersonPayload) {
	try {
		const response: FetchPersonResponse = yield call(
			PersonServices.fetchStatusPerson,
			{ person },
		);

		const userHasAccount = response.registered_email;

		if (userHasAccount) {
			yield Navigator.navigate(ScreensNameRoot.auth);
			return;
		}

		yield Navigator.navigate(OnboardingScreensNavigations.addressScreen);

		yield put(
			OnboardingPersonActions.statusPersonSuccess({
				person: {
					email: response.email,
					name: response.name,
					phone: response.phone,
					zipCode: response.cep,
				},
			}),
		);
	} catch (error: any) {
		yield put(OnboardingPersonActions.statusPersonFailure(error.message));
	}
}

export default function* personRoot() {
	yield takeLatest(OnboardingActions.person.statusPerson, statusPerson);
}
