import { createSlice } from '@reduxjs/toolkit';

const dachinformationSlice = createSlice({
  name: 'dachinformation',
  initialState: {
    selectedOption: '',
  },
  reducers: {
    setSelectedOption: (state: any, action: any) => {
      state.selectedOption = action.payload;
    },
  },
});

export const { setSelectedOption } = dachinformationSlice.actions;

export default dachinformationSlice.reducer;
