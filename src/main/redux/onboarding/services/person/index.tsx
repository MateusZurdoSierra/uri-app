import { apiClient } from '../../../../../infra/api';
import { PersonServiceProtocol, FetchPersonResponse } from './types';

const mockReturnApi = {
	data: {
		name: 'Marcos Batochio',
		phone: '14998219848',
		email: 'Batochio@teste.com',
		cep: '18860000',
		registered_email: false,
		valid_cep: true,
		registered_cep: true,
	},
};

export const PersonServices: PersonServiceProtocol = {
	async fetchStatusPerson({ person }): Promise<FetchPersonResponse> {
		// const bodyParams = {
		// 	name: person.name,
		// 	phone: person.phone,
		// 	email: person.email,
		// 	cep: person.zipCode,
		// };

		// const response = await apiClient.get<PersonResponse>(
		// 	'/api/neighbor',
		// 	bodyParams,
		// );

		return mockReturnApi.data;
	},
};
