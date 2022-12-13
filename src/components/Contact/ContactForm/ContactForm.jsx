import { useState, useMemo } from 'react';

import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'redux/contacts/contactsAPI';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Loader from '../Loader/Loader';
import { Wrapper, Input, Label, Span, Button } from './ContactForm.styled';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onNameChange = event => setName(event.target.value);
  const onNumberChange = event => setNumber(event.target.value);

  const { data: contacts } = useGetContactsQuery();
  const [addContact, { isLoading }] = useAddContactMutation();

  const alreadyInContacts = useMemo(() => {
    return contacts?.find(contact => contact.name === name);
  }, [name, contacts]);

  const handleSubmit = async event => {
    event.preventDefault();

    reset();

    try {
      if (alreadyInContacts) {
        return toast.warn(`${name} is already in 📱`);
      } else {
        await addContact({ name, number });
        return toast.success(`${name} added in your 📱`);
      }
    } catch (error) {
      console.log(error);
      return toast.error('Ooops..., something went wrong, try again later');
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Label>
        <Span>First Name</Span>
        <Input
          type="text"
          name="name "
          value={name}
          onChange={onNameChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        <Span>Phone Number</Span>
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={onNumberChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>

      <Button type="submit"> {isLoading ? <Loader /> : 'Add contact'} </Button>
    </Wrapper>
  );
}

export default ContactForm;
