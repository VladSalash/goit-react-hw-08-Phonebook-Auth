import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AppBar from '../AppBar/AppBar';
import { Suspense } from 'react';
import { LoaderBar } from 'components/Loader/Loader';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<LoaderBar />}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
