import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createStoragePersistor } from './query-persistor';

interface ReactQueryProps {
	key: string;
	storage: {
		set(key: string, value: string): Promise<void>;
		get(key: string): Promise<string>;
		del(key: string): Promise<void>;
	};
}

const DEFAULT_STALE_TIME = 1000 * 60 * 5; // 5 minutes
const DEFAULT_CACHE_TIME = 1000 * 60 * 60 * 24; // 1 day
export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: DEFAULT_STALE_TIME,
			cacheTime: DEFAULT_CACHE_TIME,
			retry: false,
		},
	},
});

export const reactQuery = ({
	key,
	storage,
}: ReactQueryProps): { Provider: React.FC } => {
	if (__DEV__) {
		import('react-query-native-devtools').then(({ addPlugin }) => {
			addPlugin({ queryClient });
		});
	}
	createStoragePersistor({ queryClient, key, storage });

	return {
		Provider: props => <QueryClientProvider client={queryClient} {...props} />,
	};
};
