import { Box } from './Container.styled';

// PropTypes
import PropTypes from 'prop-types';

const Container = ({ children }) => {
  return <Box>{children}</Box>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
