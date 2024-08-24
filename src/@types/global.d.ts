import Reactotron from 'reactotron-react-native';

declare global {
	interface Console {
		tron: typeof Reactotron;
	}
	interface FormData {
		append(name: string, value: any, fileName?: string): void;
	}

	type Nullable<T> = T | null | undefined;
}
