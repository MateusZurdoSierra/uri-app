import React from 'react';

export interface Navigator {
	name: string;
	component: React.FC<any>;
}
export type Navigations = Array<Navigator>;
