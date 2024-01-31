import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import {
  selectIsLoading,
  selectCars,
  selectTotalCarsInArr,
} from '../../redux/selectors';
import Loader from '../../components/Loader/Loader';
import { CarList } from '../../components/CarList/CarList';
import { FilterForm } from '../../components/FilterForm/FilterForm';

import { fetchCars } from '../../redux/operation/operation';

const CatalogPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const adverts = useSelector(selectCars);
  const totalCarsInArray = useSelector(selectTotalCarsInArr);

  console.log(totalCarsInArray);

  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [showLoadMoreButton, setShowLoadMoreButton] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const formData = {
          make: null,
          price: null,
          mileageFrom: 0,
          mileageTo: 0,
        };
        await dispatch(fetchCars({ formData, page }));
      } catch (error) {
        toast.error('Sorry, something went wrong, please try again');
      }
    };

    fetchData();
  }, [dispatch, page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (totalCarsInArray < 12 && totalCarsInArray !== 0) {
      setShowLoadMoreButton(false);
    } else {
      setShowLoadMoreButton(true);
    }
  }, [totalCarsInArray]);

  return (
    <>
      {isLoading && <Loader />}
      {/* {error && (
        <Error>
          Sorry. Something went wrong. Please reload the page to try again.
        </Error>
      )} */}

      <FilterForm />
      <CarList
        adverts={adverts}
        showLoadMoreButton={showLoadMoreButton}
        handleLoadMore={handleLoadMore}
      />
    </>
  );
};

export default CatalogPage;
