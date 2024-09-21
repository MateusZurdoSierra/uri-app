import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import asyncStorageAdapter from '../../../infra/storage/async-storage-adapter';
import { StorageServiceProtocol } from '../../../data/protocols/storage';



function useLocalStorage<T = any>(
	key: string,
	initialValue: T,
	storageService: StorageServiceProtocol = asyncStorageAdapter,
): [T, Dispatch<SetStateAction<T>>, any] {
	const [storedValue, setStoredValue] = useState<any>(initialValue);
	const [isFetching, setIsFetching] = useState(true);

	useEffect(() => {
		async function fetch() {
			try {
				const item = await storageService.get(key);
				setStoredValue(item ?? initialValue);
			} catch (error: any) {
				setStoredValue(initialValue);
			} finally {
				setIsFetching(false);
			}
		}
		fetch();
	}, []);

	useEffect(() => {
		if (isFetching) return;
		storageService.set(key, storedValue).catch(() => {});
	}, [isFetching, storedValue]);

	return [storedValue, setStoredValue, { isFetchingLocalStorage: isFetching }];
}

export default useLocalStorage;
