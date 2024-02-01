import { useDispatch } from 'react-redux';
import { Suspense, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Select from 'react-select';
import { nanoid } from 'nanoid';

import { setCarsFilter } from '../../redux/slice/carsSlice';

import makesArray from '../../helpers/makes.json';
import Loader from '../Loader/Loader';

import {
  formatNumber,
  formattedOptions,
  priceOptions,
} from '../../helpers/helpersFunctions';

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

  const initialSelectedMake = localStorage.getItem('selectedMake') || null;
  const initialSelectedPrice = localStorage.getItem('selectedPrice') || null;

  const [minMileage, setMinMileage] = useState('');
  const [maxMileage, setMaxMileage] = useState('');
  const [selectedMake, setSelectedMake] = useState(initialSelectedMake);
  const [selectedPrice, setSelectedPrice] = useState(initialSelectedPrice);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const pricesArray = priceOptions.map((item) => item.value);

  useEffect(() => {
    localStorage.setItem('selectedMake', selectedMake);
    localStorage.setItem('selectedPrice', selectedPrice);
  }, [selectedMake, selectedPrice]);

  const applyFilter = (e) => {
    e.preventDefault();

    const formData = {
      make: selectedMake,
      price: selectedPrice,
      mileageFrom: minMileage,
      mileageTo: maxMileage,
    };

    dispatch(setCarsFilter(formData));
    setIsButtonDisabled(true);
  };

  const handleButtonResetClick = () => {
    const resetFilter = {
      make: null,
      price: null,
      mileageFrom: '',
      mileageTo: '',
    };

    setSelectedMake(null);
    setSelectedPrice(null);
    setMinMileage('');
    setMaxMileage('');

    dispatch(setCarsFilter(resetFilter));
    setIsButtonDisabled(true);
  };

  const handleMakeChange = (selectedOption) => {
    const value = selectedOption ? selectedOption.value : null;
    setSelectedMake(value);
    setIsButtonDisabled(false);
  };

  const handlePriceChange = (selectedOption) => {
    const value = selectedOption ? selectedOption.value : null;
    setSelectedPrice(value);
    setIsButtonDisabled(false);
  };

  const handleMileageFromChange = (e) => {
    const value = e.target.value;
    setMinMileage(value);
    setIsButtonDisabled(false);
  };

  const handleMileageToChange = (e) => {
    const value = e.target.value;
    setMaxMileage(value);
    setIsButtonDisabled(false);
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
            onChange={handlePriceChange}
            styles={priceStyles}
          />
          <span>To$</span>
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

        <Button
          type="submit"
          disabled={isButtonDisabled}
          className={!isButtonDisabled ? 'disabled' : ''}
        >
          Search
        </Button>
        <Button
          disabled={isButtonDisabled}
          className={!isButtonDisabled ? 'disabled' : ''}
          type="button"
          onClick={handleButtonResetClick}
        >
          Reset
        </Button>
      </StyledForm>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
