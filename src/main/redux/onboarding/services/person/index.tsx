import { apiClient } from '../../../../../infra/api';
import { personFactory } from './person-factory';
import { PersonServiceProtocol, PersonResponse } from './types';

export const PersonServices: PersonServiceProtocol = {
	async fetchStatusPerson({ person }): Promise<PersonResponse> {
		const bodyParams = {
			name: person.name,
			phone: person.phone,
			email: person.email,
			cep: person.zipCode,
		};

		const response = await apiClient.post<PersonResponse>(
			'/api/ambassador',
			bodyParams,
		);

		const responseFactory = personFactory(response.data);

		return responseFactory;
	},
};
