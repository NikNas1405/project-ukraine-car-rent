import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../Header/Header';
import Loader from '../Loader/Loader';

import { GlobalStyles, Container } from '../../styles/GlobalStyles';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <GlobalStyles />
      </Container>
    </>
  );
};
