import { useDispatch, useSelector } from 'react-redux';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from '../Loader/Loader';
import { DropdownSelect } from './DropdownSelect';
import { Input } from './Input';
import { selectFilterForCars } from '../../redux/selectors';
import { priceOptions } from '../../helpers/helpersFunctions';
import { fetchCars } from '../../redux/operation/operation';
import makesArray from '../../helpers/makes.json';

import {
  StyledForm,
  Button,
  carStyles,
  priceStyles,
} from './FilterForm.styled';

export const FilterForm = () => {
  const dispatch = useDispatch();
  const formData = useSelector(selectFilterForCars);

  const pricesArray = priceOptions.map((item) => item.value);

  const applyFilter = (e) => {
    e.preventDefault();
    // const { make, price, mileageFrom, mileageTo } = formData;

    const { make } = formData;

    dispatch(fetchCars(formData));
  };

  const handleButtonResetClick = () => {
    const resetFilter = {
      make: null,
      price: null,
      mileageFrom: 0,
      mileageTo: 0,
    };

    dispatch(fetchCars(resetFilter));
  };

  return (
    <>
      <StyledForm onSubmit={applyFilter}>
        <DropdownSelect
          title={'Car Brand'}
          placeholder={'Enter the text'}
          options={makesArray}
          filterType={'make'}
          customStyles={carStyles}
        />
        <DropdownSelect
          title={'Price / 1hour'}
          placeholder={'To $'}
          options={pricesArray}
          filterType={'price'}
          customStyles={priceStyles}
        />
        <Input />
        <Button type="submit">Search</Button>
        <Button type="button" onClick={handleButtonResetClick}>
          Reset
        </Button>
      </StyledForm>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
