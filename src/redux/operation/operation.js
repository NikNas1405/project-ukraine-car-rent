import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://650b3186dfd73d1fab09c0ad.mockapi.io';

const defaultParams = {
  limit: 12,
};

export const fetchCars = createAsyncThunk(
  'advert/fetchCars',
  async ({ formData, page }, thunkAPI) => {
    const { make } = formData;
    const filters = {};
    let options;

    if (make !== null && make) {
      filters.make = make;
      options = new URLSearchParams({
        ...filters,
        ...defaultParams,
      });
    }

    if (make === null) {
      options = new URLSearchParams({
        page,
        ...defaultParams,
      });
    }

    try {
      const response = await axios.get(`${BASE_URL}/advert/?${options}`);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
