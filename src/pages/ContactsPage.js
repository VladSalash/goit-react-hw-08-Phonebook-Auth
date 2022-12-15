import { useSelector } from 'react-redux';

import { motion } from 'framer-motion';
import { pageVariants } from '../components/Contact/ContactItem/helpers/settingsAnimation';
import { pageTransition } from '../components/Contact/ContactItem/helpers/settingsAnimation';

import ContactList from 'components/Contact/ContactList/ContactList';
import ContactForm from 'components/Contact/ContactForm/ContactForm';

import contactSelectors from 'redux/contacts/contactSelectors';

function ContactsPage() {
  const isLoading = useSelector(contactSelectors.getFilter);

  return (
    <>
      <motion.div
        animate="in"
        initial="initial"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <h1>Add new contact</h1>
        <ContactForm />
      </motion.div>
      <div>{isLoading && 'Request in progress...'}</div>
      <motion.div
        animate="in"
        initial="initial"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <h2>Find contact by name</h2>
        {<ContactList />}
      </motion.div>
    </>
  );
}

export default ContactsPage;
