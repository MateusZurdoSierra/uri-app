module.exports = {
	expo: {
		name: 'uri-app',
		slug: 'uri-app',
		version: '1.0.0',
		orientation: 'portrait',
		icon: './assets/icon.png',
		userInterfaceStyle: 'light',
		splash: {
			image: './assets/splash.png',
			resizeMode: 'contain',
			backgroundColor: '#ffffff',
		},
		ios: {
			supportsTablet: true,
			bundleIdentifier: 'com.uriapp',
			config: {
				googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
			},
		},
		android: {
			adaptiveIcon: {
				foregroundImage: './assets/adaptive-icon.png',
				backgroundColor: '#ffffff',
			},
			package: 'com.uriapp',
			config: {
				googleMaps: {
					apiKey: process.env.GOOGLE_MAPS_API_KEY,
				},
			},
		},
		web: {
			favicon: './assets/favicon.png',
		},
		extra: {
			googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
		},
		plugins: [
			[
				'expo-camera',
				{
					cameraPermission:
						'Uri App precisa de permissão para acessar sua câmera.',
					microphonePermission:
						'Uri App precisa de permissão para acessar seu microfone.',
					recordAudioAndroid: true,
				},
			],
			[
				'expo-location',
				{
					locationAlwaysAndWhenInUsePermission:
						'Uri App precisa acessar a sua localização.',
				},
			],
		],
	},
};
