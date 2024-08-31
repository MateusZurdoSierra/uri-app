import RNAsyncStorage from '@react-native-async-storage/async-storage';
import { StorageServiceProtocol } from '../../../data/protocols/storage';
export { StorageKeys } from './keys';
class AsyncStorageAdapter implements StorageServiceProtocol {
	async set(
		key: string,
		value: string | Date | boolean | Record<string, unknown>,
	): Promise<any> {
		return await RNAsyncStorage.setItem(key, JSON.stringify(value));
	}

	async get(key: string): Promise<any> {
		const value = await RNAsyncStorage.getItem(key);
		if (value) {
			return JSON.parse(value);
		}
		return null;
	}

	async del(key: string): Promise<any> {
		return await RNAsyncStorage.removeItem(key);
	}
}

export default new AsyncStorageAdapter();
