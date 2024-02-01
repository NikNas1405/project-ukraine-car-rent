import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import Loader from '../Loader/Loader';

import { GlobalStyles } from '../../styles/GlobalStyles';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <ToastContainer />
      <Footer />
      <GlobalStyles />
    </>
  );
};

export default SharedLayout;
