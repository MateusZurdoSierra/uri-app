export interface StorageServiceProtocol {
	set(key: string, value: string | Record<string, unknown>): Promise<void>;
	get<T = any>(key: string): Promise<T>;
	del(key: string): Promise<void>;
}
