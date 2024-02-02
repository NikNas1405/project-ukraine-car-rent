import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import Loader from '../../components/Loader/Loader';
import { CarList } from '../../components/CarList/CarList';
import { FilterForm } from '../../components/FilterForm/FilterForm';

import { Container } from '../../styles/GlobalStyles';
import { Nothing } from '../FavoritesPage/FavoritesPage.styled';

import { fetchCars } from '../../redux/operation/operation';
import {
  selectIsLoading,
  selectCars,
  selectFilterForCars,
  selectIsFilter,
  selectFilterCars,
} from '../../redux/selectors';

const CatalogPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const adverts = useSelector(selectCars);
  const filtersAdverts = useSelector(selectFilterCars);
  const isFilter = useSelector(selectIsFilter);
  const formData = useSelector(selectFilterForCars);

  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [showLoadMoreButton, setShowLoadMoreButton] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchCars({ formData, page }));
      } catch (error) {
        toast.error('Sorry, something went wrong, please try again');
      }
    };

    fetchData();
  }, [dispatch, page, formData]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (3 <= page || isFilter) {
      setShowLoadMoreButton(false);
    } else {
      setShowLoadMoreButton(true);
    }
  }, [page, isFilter]);

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <FilterForm
            setShowLoadMoreButton={setShowLoadMoreButton}
            setPage={setPage}
          />

          {isFilter ? (
            filtersAdverts.length > 0 ? (
              <CarList
                adverts={filtersAdverts}
                showLoadMoreButton={showLoadMoreButton}
                handleLoadMore={handleLoadMore}
              />
            ) : (
              <Nothing>
                <p>
                  It appears like there are no offers matching your request,
                  please try again with different parameters.
                </p>
              </Nothing>
            )
          ) : adverts.length > 0 ? (
            <CarList
              adverts={adverts}
              showLoadMoreButton={showLoadMoreButton}
              handleLoadMore={handleLoadMore}
            />
          ) : (
            <Nothing>
              <p>
                It appears like there are no offers matching your request,
                please try again with different parameters.
              </p>
            </Nothing>
          )}
        </>
      )}
    </Container>
  );
};

export default CatalogPage;
