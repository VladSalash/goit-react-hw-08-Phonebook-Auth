import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import authSelectors from 'redux/features/contacts/contactSelectors';

import PropTypes from 'prop-types';

const PublicRoute = ({
  children,
  restricted = false,
  redirectTo = '/contacts',
}) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
};

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
  restricted: PropTypes.bool,
  redirectTo: PropTypes.string,
};

export default PublicRoute;
