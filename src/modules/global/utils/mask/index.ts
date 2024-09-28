import { InputType } from './types';
import { onlyNumbers } from '../formatter';
import {
	isValidCPF,
	isValidCNPJ,
	isValidEmail,
	isValidCellPhone,
} from '../valid';

export const maskCPF = (string?: InputType, hidden?: boolean): string => {
	const value = onlyNumbers(string);
	if (!value) return '';

	if (hidden) {
		return value.replace(
			/([\d]{1,3})([\d]{1,3})?([\d]{1,3})?([\d]{1,2})?/,
			(_, __, p2, p3, ___) => {
				return `***.${p2}.${p3}-**`.replace(/.undefined/g, '');
			},
		);
	}
	return value.replace(
		/([\d]{1,3})([\d]{1,3})?([\d]{1,3})?([\d]{1,2})?/,
		(_, p1, p2, p3, p4) => {
			return `${p1}.${p2}.${p3}-${p4}`.replace(/.undefined/g, '');
		},
	);
};

export const maskCNPJ = (string: InputType, hidden?: boolean): string => {
	const value = onlyNumbers(string);
	if (!value) return '';

	if (hidden) {
		return value.replace(
			/([\d]{1,2})([\d]{1,3})([\d]{1,3})([\d]{1,4})?([\d]{1,2})?/,
			(_, p1, _p2, _p3, _p4, p5) => {
				return `${p1}.***.***/****-${p5}`.replace(/.undefined/g, '');
			},
		);
	}
	return value.replace(
		/([\d]{1,2})([\d]{1,3})?([\d]{1,3})?([\d]{1,4})?([\d]{1,2})?/,
		(_, p1, p2, p3, p4, p5) => {
			return `${p1}.${p2}.${p3}/${p4}-${p5}`.replace(/.undefined/g, '');
		},
	);
};

export const maskCellPhone = (string?: InputType, hidden?: boolean): string => {
	let value = onlyNumbers(string);

	if (!value) return '';

	if (value.length >= 12) {
		value = value.replace(/^55/g, '');
	}

	if (hidden) {
		return value.replace(
			/([\d]{1,2})?([\d]{1,5})?([\d]{1,4})?/,
			(_, p1, __, p3) => {
				return `(${p1}) *****-${p3}`.replace(/(\(|\)|-|\) )undefined/g, '');
			},
		);
	}
	return value.replace(
		/([\d]{1,2})?([\d]{1,5})?([\d]{1,4})?/,
		(_, p1, p2, p3) => {
			return `(${p1}) ${p2}-${p3}`.replace(/(\(|\)|-|\) )undefined/g, '');
		},
	);
};

export const maskEmail = (string: InputType, hidden?: boolean): string => {
	if (!string) return '';
	if (!hidden) return string;

	return string.replace(
		/^(.)(.*)(.@.*)$/,
		(_, a, b, c) => a + b.replace(/./g, '*') + c,
	);
};

export const maskHidden = (string?: InputType): string => {
	return mask(string, true);
};

export const maskDocuments = (string: string, hidden?: boolean): string => {
	const value = onlyNumbers(string);
	if (!value) return '';
	if (value.length > 11) return maskCNPJ(value, hidden);
	return maskCPF(value, hidden);
};

export const maskCep = (string: string) => {
  return string.replace(/^(\d{5})(\d{3})$/, '$1-$2');
}

export const mask = (string?: InputType, hidden = false): string => {
	if (!string) {
		return '';
	}
	if (isValidCPF(string)) {
		return maskCPF(string, hidden);
	}
	if (isValidEmail(string)) {
		return maskEmail(string, hidden);
	}
	if (isValidCNPJ(string)) {
		return maskCNPJ(string, hidden);
	}
	if (isValidCellPhone(string)) {
		return maskCellPhone(string, hidden);
	}
	return string;
};
