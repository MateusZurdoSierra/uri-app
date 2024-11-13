export const useValidatePassword = () => {
	const handleValidatePassword = (password: string) => {
		const validations = {
			minLength: password.length >= 8,
			hasLowerCase: /[a-z]/.test(password),
			hasUpperCase: /[A-Z]/.test(password),
			hasNumber: /\d/.test(password),
			hasSpecialChar: /[\W_]/.test(password),
		};

		const isValid = Object.values(validations).every(Boolean);

		return { isValid, ...validations };
	};

	const validateColorLabel = (isValid: boolean, password: string) => {
		if (password === '' || password === 'Digite a sua senha') return 'black';

		if (isValid) {
			return 'green';
		}
		return 'red';
	};

	return {
		handleValidatePassword,
		validateColorLabel,
	};
};
