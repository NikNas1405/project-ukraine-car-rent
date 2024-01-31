export const selectCars = (state) => state.adverts;

export const selectFilterCars = (state) => state.filtersAdverts;

export const selectIsLoading = (state) => state.isLoading;

export const selectError = (state) => state.error;

export const selectTotalCarsInArr = (state) => state.adverts.length;

export const selectFavorites = (state) => state.favorites;

export const selectFilterForCars = (state) => state.formData;

export const selectIsFilter = (state) => state.isFilter;
