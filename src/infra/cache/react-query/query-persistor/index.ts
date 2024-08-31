import { createAsyncStoragePersistor } from 'react-query/createAsyncStoragePersistor-experimental';
import { persistQueryClient } from 'react-query/persistQueryClient-experimental';

export function createStoragePersistor({
	queryClient,
	key,
	storage,
}: any): void {
	const storagePersistor = createAsyncStoragePersistor({
		key,
		storage: {
			getItem: storage.get,
			removeItem: storage.del,
			setItem: storage.set,
		},
	});

	persistQueryClient({
		queryClient,
		persistor: storagePersistor,
	});
}
