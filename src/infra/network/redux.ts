import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NetInfoState } from '@react-native-community/netinfo';

const initialState: Partial<NetInfoState> = {};

const networkSlice = createSlice({
	name: 'network',
	initialState,
	reducers: {
		setNetworkState: (_, action: PayloadAction<NetInfoState>) => action.payload,
	}
})

export const NetworkActions = networkSlice.actions;
export default networkSlice.reducer;
