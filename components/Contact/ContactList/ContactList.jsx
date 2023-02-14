import { useMemo } from 'react';

import useContacts from 'hooks/useContacts.js';

import Filter from '../Filter';
import ContactItem from '../ContactItem/ContactItem';
import Loader from '../Loader/Loader';
import { List } from './ContactList.style';

const ContactList = () => {
  const { filteredContacts, isLoading, isSuccess } = useContacts();

  const contactsSum = filteredContacts?.length;

  const sortContactsById = useMemo(() => {
    return [...filteredContacts].sort((a, b) => b.id - a.id);
  }, [filteredContacts]);

  return (
    <>
      <Filter />

      {!contactsSum ? (
        <p>Phonebook is empty.</p>
      ) : (
        <p>Contacts: {contactsSum}</p>
      )}

      {isLoading && <Loader />}

      {isSuccess && (
        <List>
          {sortContactsById.map(({ id, name, number }) => (
            <ContactItem key={id} id={id} name={name} number={number} />
          ))}
        </List>
      )}
    </>
  );
};

export default ContactList;
