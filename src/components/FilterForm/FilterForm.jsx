import { useDispatch } from 'react-redux';
import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Select from 'react-select';
import { nanoid } from 'nanoid';

import { setCarsFilter } from '../../redux/slice/carsSlice';

import Loader from '../Loader/Loader';

import { formattedOptions, priceOptions } from '../../helpers/helpersFunctions';
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

  const [minMileage, setMinMileage] = useState(0);
  const [maxMileage, setMaxMileage] = useState(0);
  const [selectedMake, setSelectedMake] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);

  const pricesArray = priceOptions.map((item) => item.value);

  const applyFilter = (e) => {
    e.preventDefault();
    const formData = {
      make: selectedMake || null,
      price: selectedPrice || null,
      mileageFrom: minMileage || 0,
      mileageTo: maxMileage || 0,
    };

    console.log(formData);

    dispatch(setCarsFilter(formData));
  };

  const handleButtonResetClick = () => {
    const resetFilter = {
      make: null,
      price: null,
      mileageFrom: 0,
      mileageTo: 0,
    };
    dispatch(setCarsFilter(resetFilter));
  };

  const handleMakeChange = (selectedOption) => {
    const value = selectedOption ? selectedOption.value : '';
    setSelectedMake(value);

    const formData = {
      make: value,
      price: selectedPrice || null,
      mileageFrom: minMileage || 0,
      mileageTo: maxMileage || 0,
    };

    dispatch(setCarsFilter(formData));
  };

  const handlePriceChange = (selectedOption) => {
    const value = selectedOption ? selectedOption.value : '';
    setSelectedPrice(value);

    const formData = {
      make: selectedMake || null,
      price: value,
      mileageFrom: minMileage || 0,
      mileageTo: maxMileage || 0,
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
            placeholder={'To $'}
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
        </div>

        <div>
          <InputLabel htmlFor="mileage">Сar mileage / km</InputLabel>
          <Holder>
            <Input1
              name="mileage"
              type="number"
              id="from"
              value={minMileage}
              onChange={handleMileageFromChange}
              min="0"
              max="20000"
            />
            <span>From</span>
            <Input2
              name="mileage"
              type="number"
              id="to"
              value={maxMileage}
              onChange={handleMileageToChange}
              min="0"
              max="20000"
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
