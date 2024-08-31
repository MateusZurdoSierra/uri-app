import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
// import { PersistGate } from 'redux-persist/integration/react';
import {
	navigationAnalytics,
	navigationRef,
} from '../modules/global/utils/rootNavigations';
import App from './App';
// import { persistor } from './config/store';
import theme from './styles/theme';
import ThemeProvider from './styles/theme/ThemeProvider';



const Providers: React.FC = () => {
	// 	const ReactQuery = reactQuery({
	// 		storage: asyncStorageAdapter,
	// 		key: StorageKeys.REACT_QUERY_OFFLINE_CACHE,
	// 	});

	return (
		<ThemeProvider theme={theme}>
			{/* <ReactQuery.Provider> */}
			{/* <Provider store={store}> */}
			<NavigationContainer
				ref={navigationRef}
				onStateChange={navigationAnalytics.onNavigatorStateChange}>
				{/* <PersistGate loading={null} persistor={persistor} /> */}
				{/* <ModalProviders> */}
				{/* <ToastProvider> */}
				<App />
				{/* </ToastProvider> */}
				{/* </ModalProviders> */}
			</NavigationContainer>
			{/* </Provider> */}
			{/* </ReactQuery.Provider> */}
		</ThemeProvider>
	);
};

export default Providers;
