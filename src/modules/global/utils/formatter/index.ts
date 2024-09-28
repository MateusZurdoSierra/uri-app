export function onlyNumbers(
	text: string | null = '',
	withDecimal = false,
): string {
	if (!text) return '';

	if (withDecimal) {
		return text.replace(/\./g, '').replace(',', '.');
	}

	return text.replace(/[^\d]/g, '');
}
