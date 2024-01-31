import { useSelector } from 'react-redux';

import Loader from '../../components/Loader/Loader';
import { CarList } from '../../components/CarList/CarList';

import car from '../../assets/car.jpg';

import { Nothing, StyledDiv, ButtonLink } from './FavoritesPage.styled';
import { selectFavorites, selectIsLoading } from '../../redux/selectors';

const FavoritesPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const favorites = useSelector(selectFavorites);

  return (
    <StyledDiv>
      {isLoading && <Loader />}

      {favorites.length > 0 ? (
        <>
          <CarList adverts={favorites} showLoadMoreButton={false} />
        </>
      ) : (
        <Nothing>
          <p>
            It appears that you have not added any adverts to your favorites
            yet. To get started, you can add adverts that you like to your
            favorites for easier access in the future.
          </p>
          <div>
            <img src={car} alt="car" />
          </div>
          <ButtonLink to="/catalog">Choose a car</ButtonLink>
        </Nothing>
      )}
    </StyledDiv>
  );
};

export default FavoritesPage;
