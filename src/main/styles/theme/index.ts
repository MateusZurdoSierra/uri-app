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
		fineLine: string;
		gray: string;
	};

	font: {
		thin: string;
		extraLight: string;
		light: string;
		regular: string;
		medium: string;
		semiBold: string;
		bold: string;
		extraBold: string;
		black: string;
	};
}

const theme: Theme = {
	colors: {
		primary: '#8133f1',
		secondary: '#00155E',
		success: '#149A33',
		warning: '#FFE380',
		danger: '#D64040',
		black: '#000000',
		white: '#FFFFFF',
		lines: '#CACACA',
		gray: '#595959',
		fineLine: '#F5F5F5',
	},

	font: {
		thin: 'Inter-Thin',
		extraLight: 'Inter-ExtraLight',
		light: 'Inter-Light',
		regular: 'Inter-Regular',
		medium: 'Inter-Medium',
		semiBold: 'Inter-SemiBold',
		bold: 'Inter-Bold',
		extraBold: 'Inter-ExtraBold',
		black: 'Inter-Black',
	},
};

export default theme;
