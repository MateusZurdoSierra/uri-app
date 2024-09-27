import { PersonServiceProtocol, PersonResponse } from './types';

export const PersonServices: PersonServiceProtocol = {
  async fetchStatusPerson({
    name
	}): Promise<PersonResponse> {
    const bodyParams = {
      pessoa: name,
    };

    // const response = await apiClient.post<PersonResponse>('/pessoa/status', bodyParams);

    return {status: ''};
  }
}
