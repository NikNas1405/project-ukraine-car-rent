export const initialState = {
  isLoading: false,
  isFilter: false,
  filtersAdverts: [],
  error: null,
  adverts: [],
  favorites: [],
  page: 1,
  formData: {
    make: null,
    price: null,
    mileageFrom: 0,
    mileageTo: 0,
  },
};
