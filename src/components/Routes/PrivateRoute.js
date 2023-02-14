import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/features/contacts/contactSelectors';
import PropTypes from 'prop-types';

const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const token = useSelector(authSelectors.getToken);

  return token ? children : <Navigate to={redirectTo} />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
  redirectTo: PropTypes.string,
};

export default PrivateRoute;
