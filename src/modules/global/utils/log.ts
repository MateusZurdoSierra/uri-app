export default (
	event: string,
	error: Error | string | Record<string, unknown> | unknown,
): void => {
	if (error && typeof error !== 'object') {
		error = { error };
	}

	if (__DEV__) {
		return console.error?.(event, error);
	}
};
