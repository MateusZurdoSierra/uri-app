import {
	NavigationContainerRef,
	NavigationState,
	PartialState,
	Route,
	StackActions,
} from '@react-navigation/native';

import React from 'react';

type PartialNavigationState = PartialState<NavigationState>;
type NavigatorStateChangeType =
	| NavigationState
	| PartialNavigationState
	| undefined;

export const isMountedRef = React.createRef();
export const navigationRef = React.createRef<NavigationContainerRef<any>>();

export function navigate(name: string, params?: any, key?: string) {
	navigationRef.current?.navigate({ name, key, params });
}

export function push(name: string, params?: any) {
	const pushAction = StackActions.push(name, params);
	navigationRef.current?.dispatch(pushAction);
}

export function reset(name: string, params?: any) {
	navigationRef.current?.reset({
		index: 0,
		routes: [{ name, params }],
	});
}

export function replace(name: string, params?: any) {
	navigationRef.current?.dispatch(StackActions.replace(name, params));
}

export function replaceForDeepLink(name: string, params?: any, index?: number) {
	navigationRef.current?.dispatch(StackActions.pop(index ? index : 1));
	navigate(name, params);
}

export function pop(count = 1) {
	navigationRef.current?.dispatch(StackActions.pop(count));
}

export function getCurrentRoute(): // eslint-disable-next-line @typescript-eslint/ban-types
Route<string, object | undefined> | undefined {
	return navigationRef.current?.getCurrentRoute();
}

export function getCurrentRouteName(): string | undefined {
	return getCurrentRoute()?.name;
}

export const navigationAnalytics = (() => {
	const state = navigationRef.current?.getRootState();
	const routeNameRef = {
		current: getActiveRouteName(state),
	};

	function getActiveRouteName(state: NavigatorStateChangeType): string {
		if (!state) return '';

		const route = state.routes[state.index || 0];

		if (route.state) {
			return getActiveRouteName(route.state);
		}
		return route.name;
	}

	const onNavigatorStateChange = (state: NavigatorStateChangeType) => {
		const currentRouteName = getActiveRouteName(state);
		routeNameRef.current = currentRouteName;
	};

	return {
		onNavigatorStateChange,
	};
})();

export const Navigator = {
	navigationAnalytics,
	navigate,
	getCurrentRouteName,
	getCurrentRoute,
	pop,
	push,
	replace,
	reset,
};
