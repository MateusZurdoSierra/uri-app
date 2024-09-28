import { DDD_VALIDS_BRAZIL, DDI_VALIDS_BRAZIL } from './validDDDBrazil';
import { onlyNumbers } from '../formatter';

export const isValidCPF = (cpf?: string): boolean => {
	if (!cpf) return false;
	let resultado;
	let digitos_iguais = 1;
	cpf = onlyNumbers(cpf);

	if (!cpf || cpf.length !== 11) return false;
	for (let i = 0; i < cpf.length - 1; i++)
		if (cpf.charAt(i) !== cpf.charAt(i + 1)) {
			digitos_iguais = 0;
			break;
		}

	if (!digitos_iguais) {
		let numeros = cpf.substring(0, 9);
		const digitos = cpf.substring(9);
		let soma = 0;
		for (let i = 10; i > 1; i--) soma += Number(numeros.charAt(10 - i)) * i;

		resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

		if (resultado !== Number(digitos.charAt(0))) return false;
		numeros = cpf.substring(0, 10);
		soma = 0;

		for (let i = 11; i > 1; i--) soma += Number(numeros.charAt(11 - i)) * i;

		resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
		if (resultado !== Number(digitos.charAt(1))) return false;

		return true;
	}

	return false;
};

export const isValidCNPJ = (cnpj?: string): boolean => {
	if (!cnpj) return false;
	cnpj = cnpj.replace(/[^\d]+/g, '');
	if (cnpj === '') return false;
	if (cnpj.length !== 14) return false;
	// Valida DVs
	let tamanho = cnpj.length - 2;
	let numeros = cnpj.substring(0, tamanho);
	const digitos = cnpj.substring(tamanho);
	let soma = 0;
	let pos = tamanho - 7;
	for (let i = tamanho; i >= 1; i--) {
		soma += Number(numeros.charAt(tamanho - i)) * pos--;
		if (pos < 2) pos = 9;
	}
	let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
	if (resultado !== Number(digitos.charAt(0))) return false;
	tamanho = tamanho + 1;
	numeros = cnpj.substring(0, tamanho);
	soma = 0;
	pos = tamanho - 7;
	for (let i = tamanho; i >= 1; i--) {
		soma += Number(numeros.charAt(tamanho - i)) * pos--;
		if (pos < 2) pos = 9;
	}
	resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
	if (resultado !== Number(digitos.charAt(1))) return false;
	return true;
};

export const isValidDocument = (value: string): boolean => {
	const cleanValue = onlyNumbers(value);
	if (cleanValue.length > 11) return isValidCNPJ(cleanValue);
	return isValidCPF(cleanValue);
};

export const isValidEmail = (email: string): boolean => {
	const regexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return regexp.test(email);
};

export const isValidCellPhone = (value: string): boolean => {
	const cellphone = onlyNumbers(value);

	if (!cellphone) return false;

	const cellphoneLengthValid = cellphone.length > 10 && cellphone.length <= 13;

	const containDDIValid =
		DDI_VALIDS_BRAZIL.indexOf(cellphone.substring(0, 2)) !== -1;

	const containDDDValid =
		DDD_VALIDS_BRAZIL.indexOf(cellphone.substring(0, 2)) !== -1;

	const numberPostDddIsValid =
		['6', '7', '8', '9'].indexOf(cellphone.substring(2, 3)) !== -1;

	const numberPostDddWithDDIIsValid =
		['6', '7', '8', '9'].indexOf(cellphone.substring(4, 5)) !== -1;

	if (cellphone === '00000000000') {
		return false;
	}

	if (!cellphoneLengthValid) {
		return false;
	}

	if (!containDDIValid && !containDDDValid) {
		return false;
	}

	if (cellphone.length > 11 && !containDDIValid) return false;

	if (!numberPostDddWithDDIIsValid && !numberPostDddIsValid) {
		return false;
	}

	return true;
};

export const isValidUUID = (text: string) => {
	const regexp = /^([\w]{8})-([\w]{4})-([\w]{4})-([\w]{4})-([\w]{12})$/i;
	return regexp.test(text);
};
