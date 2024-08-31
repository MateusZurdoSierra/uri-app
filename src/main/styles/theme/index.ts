export interface Theme {
	colors: {
		primary: string;
		secondary: string;
		success: string;
		warning: string;
		danger: string;
		black: string;
		white: string;
		lines: string;
	};
}

const theme: Theme = {
	colors: {
		primary: '#D3075E',
		secondary: '#00155E',
		success: '#149A33',
		warning: '#FFE380',
		danger: '#D64040',
		black: '#000000',
		white: '#FFFFFF',
		lines: '#D8E2E7',
	}
};

export default theme;
