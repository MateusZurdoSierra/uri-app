import { PersonProps } from '../../reducers/person-reducer';

export interface PersonParamsPayload {
	person: PersonProps;
}

export interface FetchPersonResponse {
	name: string;
	phone: string;
	email: string;
	cep: string;
	registered_email: boolean;
	valid_cep: boolean;
	registered_cep: boolean;
}

export interface PersonServiceProtocol {
	fetchStatusPerson(params: PersonParamsPayload): Promise<FetchPersonResponse>;
}
