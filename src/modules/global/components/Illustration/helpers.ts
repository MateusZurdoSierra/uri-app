import { ReactNode, createElement } from 'react';

import Illustration, { SvgName } from '.';

export const createIllustrationComponent = (
	name: SvgName,
	width = 20,
	height = 20,
	color?: string,
): ReactNode => {
	return createElement(Illustration, { name, width, height, color }, null);
};
