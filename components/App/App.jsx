import { useEffect, lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

import { useAuthRefreshQuery } from 'redux/servicesApi/PhoneBookApi';

import PrivateRoute from '../Routes/PrivateRoute';
import RestrictedRoute from '../Routes/RestrictedRoute';

import { refreshToken } from 'redux/features/contacts/contactSlice';
import authSelectors from 'redux/features/contacts/contactSelectors';

import { Layout } from '../Layout/Layout';
import Container from 'components/Container/Container';
import ErrorPage from 'pages/ErrorPage';
// import { LoaderBar } from 'components/Loader/Loader';

const HomePage = lazy(() => import('pages/HomePage'));
const SignUpPage = lazy(() => import('pages/SignUpPage'));
const SignInPage = lazy(() => import('pages/SignInPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

 const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const token = useSelector(authSelectors.getToken);
  const { data, isLoading } = useAuthRefreshQuery(token, {
    skip: token === null,
  });

  useEffect(() => {
    if (data) {
      dispatch(refreshToken(data));
    }
  }, [data, dispatch]);

  return (
    !isLoading && (
      <Container>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Layout />}>
              <Route
                path="/"
                element={
                  <RestrictedRoute>
                    <HomePage />
                  </RestrictedRoute>
                }
              />

              <Route
                path="/contacts"
                element={
                  <PrivateRoute>
                    <ContactsPage />
                  </PrivateRoute>
                }
              />

              <Route
                path="/signUp"
                element={
                  <RestrictedRoute redirectTo="/contacts" restricted>
                    <SignUpPage />
                  </RestrictedRoute>
                }
              />

              <Route
                path="/signIn"
                element={
                  <RestrictedRoute redirectTo="/contacts" restricted>
                    <SignInPage />
                  </RestrictedRoute>
                }
              />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </AnimatePresence>
      </Container>
    )
  );
};

export default App;
