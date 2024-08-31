import { Dimensions, Platform, ScaledSize, PixelRatio } from 'react-native';
import * as DeviceInfo from 'react-native-device-info';

const DEFAULT_HEIGHT = 640;
const DEFAULT_WIDTH = 360;

export const getDimensions = (): ScaledSize => Dimensions.get('window');

const { height: deviceHeight, width: deviceWidth } = getDimensions();

export const scaleHeight = (height: number): number => {
	return (deviceHeight * height) / DEFAULT_HEIGHT;
};

export const scaleWidth = (width: number): number => {
	return (deviceWidth * width) / DEFAULT_WIDTH;
};

export const scaleFont = (size: number): number => {
	const fontScale = Math.max(Math.min(PixelRatio.getFontScale(), 1.2), 1.1); // between 1.1 and 1.2
	return size * fontScale;
};

export const isIos = (): boolean => Platform.OS === 'ios';

export const isAndroid = (): boolean => Platform.OS === 'android';

const getSystemName = (): string => {
	return DeviceInfo.getSystemName();
};

export const getBuildNumber = (): number => {
	return parseInt(DeviceInfo.getBuildNumber(), 10);
};

export const getVersionName = (): string => {
	return DeviceInfo.getVersion();
};

export const getDeviceLabel = async (): Promise<string> => {
	const model = DeviceInfo.getModel();
	const emulator = await DeviceInfo.isEmulator();

	let label = getSystemName() + ' ' + DeviceInfo.getSystemVersion();
	label = model ? label + ' - ' + model : label;
	label = emulator ? label + ' - Emulator' : label;

	return label;
};

export const getAppInfoDescription = (): string => {
	const appInfo = [getVersionName(), getBuildNumber(), Platform.OS].join(';');
	return appInfo;
};
