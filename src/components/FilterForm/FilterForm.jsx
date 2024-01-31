import { useDispatch } from 'react-redux';
import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Select from 'react-select';
import { nanoid } from 'nanoid';

import { setCarsFilter } from '../../redux/slice/carsSlice';

import Loader from '../Loader/Loader';

import {
  formatNumber,
  formattedOptions,
  priceOptions,
} from '../../helpers/helpersFunctions';
import makesArray from '../../helpers/makes.json';

import {
  StyledForm,
  Button,
  carStyles,
  priceStyles,
  Holder,
  Input1,
  Input2,
  InputLabel,
  TitleSelect,
} from './FilterForm.styled';

export const FilterForm = () => {
  const dispatch = useDispatch();

  const [minMileage, setMinMileage] = useState('');
  const [maxMileage, setMaxMileage] = useState('');
  const [selectedMake, setSelectedMake] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);

  const pricesArray = priceOptions.map((item) => item.value);

  const applyFilter = (e) => {
    e.preventDefault();
    const formData = {
      make: selectedMake || null,
      price: selectedPrice || null,
      mileageFrom: minMileage || '',
      mileageTo: maxMileage || '',
    };

    console.log(formData);

    dispatch(setCarsFilter(formData));
  };

  const handleButtonResetClick = () => {
    const resetFilter = {
      make: null,
      price: null,
      mileageFrom: '',
      mileageTo: '',
    };
    dispatch(setCarsFilter(resetFilter));
  };

  const handleMakeChange = (selectedOption) => {
    const value = selectedOption ? selectedOption.value : '';
    setSelectedMake(value);

    const formData = {
      make: value,
      price: selectedPrice || null,
      mileageFrom: minMileage || '',
      mileageTo: maxMileage || '',
    };

    dispatch(setCarsFilter(formData));
  };

  const handlePriceChange = (selectedOption) => {
    const value = selectedOption ? selectedOption.value : '';
    setSelectedPrice(value);

    const formData = {
      make: selectedMake || null,
      price: value,
      mileageFrom: minMileage || '',
      mileageTo: maxMileage || '',
    };

    dispatch(setCarsFilter(formData));
  };

  const handleMileageFromChange = (e) => {
    const value = e.target.value;
    setMinMileage(value);
  };

  const handleMileageToChange = (e) => {
    const value = e.target.value;
    setMaxMileage(value);
  };

  return (
    <>
      <StyledForm onSubmit={applyFilter}>
        <div>
          <TitleSelect>Car Brand</TitleSelect>
          <Select
            placeholder={'Enter the text'}
            id={nanoid()}
            options={formattedOptions(makesArray)}
            value={formattedOptions(makesArray).find(
              (option) => option.value === selectedMake
            )}
            isSearchable={false}
            isMulti={false}
            onChange={handleMakeChange}
            isClearable
            styles={carStyles}
          />
        </div>
        <div>
          <TitleSelect>Price / 1hour</TitleSelect>
          <Select
            placeholder={''}
            id={nanoid()}
            options={formattedOptions(pricesArray)}
            value={formattedOptions(pricesArray).find(
              (option) => option.value === selectedPrice
            )}
            isSearchable={false}
            isMulti={false}
            isClearable
            onChange={handlePriceChange}
            styles={priceStyles}
          />
          <span>To $</span>
        </div>

        <div>
          <InputLabel htmlFor="mileage">Сar mileage / km</InputLabel>
          <Holder>
            <Input1
              name="mileage"
              type="text"
              id="from"
              value={minMileage !== '' ? formatNumber(minMileage) : ''}
              onChange={handleMileageFromChange}
              pattern="[0-9]*"
              maxLength="4"
            />
            <span>From</span>
            <Input2
              name="mileage"
              type="text"
              id="to"
              value={maxMileage !== '' ? formatNumber(maxMileage) : ''}
              onChange={handleMileageToChange}
              pattern="[0-9]*"
              maxLength="4"
            />
            <span>To</span>
          </Holder>
        </div>

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
