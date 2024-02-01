import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { initialState } from '../initialState';
import { fetchCars } from '../operation/operation';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFetchCarsFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.page = action.payload.page;
  state.adverts = [...state.adverts, ...action.payload];
  state.filtersAdverts = action.payload;
};

const carsSlice = createSlice({
  name: 'adverts',
  initialState: initialState,
  reducers: {
    addToFavorites(state, action) {
      state.favorites.push(action.payload);
    },
    removeFromFavorites(state, action) {
      state.favorites = state.favorites.filter(
        (car) => car.id !== action.payload
      );
    },
    setCarsFilter(state, action) {
      state.formData = { ...state.formData, ...action.payload };
      if (action.payload.make === null) {
        state.isFilter = false;
        state.adverts = [];
        state.filtersAdverts = [];
      } else {
        state.isFilter = true;
      }
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.fulfilled, handleFetchCarsFulfilled)
      .addCase(fetchCars.rejected, handleRejected),
});

const persistConfig = {
  key: 'cars',
  storage,
  whitelist: ['favorites'],
};

export const carsReducer = carsSlice.reducer;

export const persistedCarsReducer = persistReducer(persistConfig, carsReducer);

export const { setCarsFilter, addToFavorites, removeFromFavorites } =
  carsSlice.actions;
