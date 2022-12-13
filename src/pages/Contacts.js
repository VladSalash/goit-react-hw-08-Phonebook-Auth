import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import ContactList from 'components/Contact/ContactList/ContactList';
import ContactForm from 'components/Contact/ContactForm/ContactForm';
import { contactApi } from 'redux/contacts/contactsAPI';
import { selectLoading } from 'redux/contacts/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(contactApi);
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contact</title>
      </Helmet>
      <ContactForm />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList />
    </>
  );
}
