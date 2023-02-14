import { useMemo } from 'react';

import {
  useFetchContactsQuery,
  useAddContactMutation,
} from 'services/phoneBookApi';

import { Loader } from 'components/Loader/Loader';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Wrapper, Input, Label, Span, Button } from './ContactForm.styled';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .required('This field is Required')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number is not valid'
    ),
});

function ContactForm() {
  const { data: contacts } = useFetchContactsQuery();
  const [addContact, { isLoading }] = useAddContactMutation();

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    onSubmit: async ({ name, number }, { resetForm }) => {
      resetForm();
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
    },
    validationSchema: schema,
  });

  const { name } = formik.values;

  const alreadyInContacts = useMemo(() => {
    return contacts?.find(contact => contact.name === name);
  }, [contacts, name]);

  return (
    <Wrapper onSubmit={formik.handleSubmit}>
      <Label>
        <Span>First Name</Span>
        <Input
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Name"
        />
      </Label>
      <Label>
        <Span>Phone Number</Span>
        <Input
          name="number"
          onChange={formik.handleChange}
          value={formik.values.number}
          type="tel"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Number"
        />
      </Label>

      <Button type="submit"> {isLoading ? <Loader /> : 'Add contact'} </Button>
    </Wrapper>
  );
}

export default ContactForm;
