import { PersonProps } from '../../reducers/person-reducer';

export interface PersonParamsPayload {
	person: PersonProps;
}

export interface PersonResponse {
	hasAccount: boolean;
	person: PersonProps;
}

export interface PersonServiceProtocol {
	fetchStatusPerson(params: PersonParamsPayload): Promise<PersonResponse>;
}
