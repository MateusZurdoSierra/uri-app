interface PersonDataFactory {
	email_cadastrado: boolean;
	pessoa: {
		nome: string;
		telefone: string;
		email: string;
		cep: string;
	};
}

export function personFactory(data: PersonDataFactory) {
	return {
		hasAccount: data.email_cadastrado,
		person: {
			name: data.pessoa.nome,
			phone: data.pessoa.telefone,
			email: data.pessoa.email,
			zipCode: data.pessoa.cep,
		},
	}
}
