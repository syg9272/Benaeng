import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

// state type
export interface userSlice {
	isDark: boolean;
	isAlarm: boolean;
	isCycle: boolean;
	isPurchase: boolean;
}

// 초기 상태 정의
const initialState: userSlice = {
	isDark: false,
	isAlarm: true,
	isCycle: true,
	isPurchase: true,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser(state, action) {
			const temp = state;
			temp.isDark = action.payload;
			temp.isAlarm = action.payload;
			temp.isCycle = action.payload;
			temp.isPurchase = action.payload;
		},
		setIsDark(state, action) {
			const temp = state;
			temp.isDark = action.payload;
		},
		setIsAlarm(state, action) {
			const temp = state;
			temp.isAlarm = action.payload;
		},
		setIsCycle(state, action) {
			const temp = state;
			temp.isCycle = action.payload;
		},
		setIsPurchase(state, action) {
			const temp = state;
			temp.isPurchase = action.payload;
		},
	},
});

// 액션 생성함수
export const { setUser, setIsDark, setIsAlarm, setIsCycle, setIsPurchase } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
// 리듀서
export default userSlice.reducer;