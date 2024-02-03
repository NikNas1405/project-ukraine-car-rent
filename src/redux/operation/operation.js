import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://650b3186dfd73d1fab09c0ad.mockapi.io';

const defaultParams = {
  limit: 12,
};

export const fetchCars = createAsyncThunk(
  'advert/fetchCars',
  async ({ formData, page }, thunkAPI) => {
    const {
      make,
      price,
    } = formData;

    try {
      const response = await axios.get(`${BASE_URL}/advert`);
      let filteredCars = response.data;

      if (make !== null) {
        filteredCars = filteredCars.filter((car) => car.make === make);
      }

      if (price !== null) {
        filteredCars = filteredCars.filter((car) => {
          const rentalPriceNumeric = parseInt(
            car.rentalPrice.replace(/\D/g, ''),
            10
          );
          return rentalPriceNumeric <= price;
        });
      }

      const startIndex = (page - 1) * defaultParams.limit;
      const endIndex = startIndex + defaultParams.limit;
      const paginatedCars = filteredCars.slice(startIndex, endIndex);

      return paginatedCars;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
