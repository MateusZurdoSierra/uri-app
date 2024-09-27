export interface PersonParamsPayload {
	name: string;
}

export interface PersonResponse {
	status: string;
}

export interface PersonServiceProtocol {
	fetchStatusPerson(params: PersonParamsPayload): Promise<PersonResponse>;
}
