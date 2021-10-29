import {
  doGetProvinceSelectionSystem,
  doGetDistrictSelectionSystem,
} from './../../asyncActions';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ISelection {
  id: number;
  title: string;
}
type TInitialState = {
  isLoading: boolean;
  err: any;
  listProvincesSystem: Array<ISelection>;
  listDistrictsSystem: Array<ISelection>;
};

const initialState: TInitialState = {
  isLoading: false,
  err: {},
  listProvincesSystem: [],
  listDistrictsSystem: [],
};

export const systemSlice = createSlice({
  name: 'system@',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
			doGetProvinceSelectionSystem.pending, 
			(state, action) => {
      	state.isLoading = true;
    	}
		);
    builder.addCase(
      doGetProvinceSelectionSystem.fulfilled,
      (state, action: PayloadAction<IResGetProvinceSelectionSystem>) => {
        state.isLoading = false;
        state.listProvincesSystem = action.payload.content.provinces;
      },
    );
    builder.addCase(
			doGetProvinceSelectionSystem.rejected, 
			(state, action) => {
     	 	state.isLoading = false;
      	state.err = action.error;
    	}
		);
    builder.addCase(doGetDistrictSelectionSystem.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(
      doGetDistrictSelectionSystem.fulfilled,
      (state, action: PayloadAction<IResGetDistrictSelectionSystem>) => {
        state.isLoading = false;
        state.listDistrictsSystem = action.payload.content.districts;
      },
    );
    builder.addCase(doGetDistrictSelectionSystem.rejected, (state, action) => {
      state.isLoading = false;
      state.err = action.error;
    });
  },
});

export default systemSlice.reducer;
