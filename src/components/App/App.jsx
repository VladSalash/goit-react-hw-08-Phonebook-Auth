import ContactForm from '../Contact/ContactForm/ContactForm';
import ContactList from '../Contact/ContactList/ContactList';

import { Container } from './ContactApp.styled';

const App = () => {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <ContactList />
    </Container>
  );
};

export default App;
