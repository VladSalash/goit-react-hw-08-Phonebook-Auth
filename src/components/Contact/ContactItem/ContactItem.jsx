import { useDeleteContactMutation } from 'redux/contacts/contactsAPI';
import PropTypes from 'prop-types';

import useVisibleItem from 'hooks/useVisibleItem';

import { motion, AnimatePresence } from 'framer-motion';
import settingsAnimation from './helpers/settingsAnimation';
import { Button } from './ContactItem.styled';

const ContactItem = ({ id, name, number }) => {
  const [deleteContact] = useDeleteContactMutation();
  const [isVisible, handleVisible] = useVisibleItem();

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.li
          variants={settingsAnimation}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={handleVisible}
          key={id}
        >
          <b>{name}</b>: {number}
          <Button type="button" onClick={() => deleteContact(id)}>
            Delete
          </Button>
        </motion.li>
      )}
    </AnimatePresence>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
