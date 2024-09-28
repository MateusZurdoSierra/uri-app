import { personFactory } from './person-factory';
import { PersonServiceProtocol, PersonResponse } from './types';

const mockReturnPersonStatus = {
	status: 200,
	data: {
		email_cadastrado: true,
		pessoa: {
			nome: 'Mateus Zurdo Sierra',
			telefone: '14998219848',
			email: 'mateuszurdo@gmail.com',
			cep: '18860-000',
		},
	},
};

export const PersonServices: PersonServiceProtocol = {
	async fetchStatusPerson({ person }): Promise<PersonResponse> {
		const bodyParams = {
			pessoa: person,
		};

		// const response = await apiClient.post<PersonResponse>('/pessoa/status', bodyParams);

		const responseFactory = personFactory(mockReturnPersonStatus.data)

		return responseFactory;
	},
};
