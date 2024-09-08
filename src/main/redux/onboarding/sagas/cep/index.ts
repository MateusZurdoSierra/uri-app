import { takeLatest } from 'redux-saga/effects';
import { OnboardingActions } from '../../reducers';
import { FindCepRegisteredPayload } from '../../reducers/cep-reducer';

export function* findCepRegistered({
	payload: { cep },
}: FindCepRegisteredPayload) {
	try {
		
	}catch(error) {
		console.log(error);
	};
}

export default function* cepRoot() {
	yield takeLatest(OnboardingActions.cep.findCepRegistered, findCepRegistered);
}
