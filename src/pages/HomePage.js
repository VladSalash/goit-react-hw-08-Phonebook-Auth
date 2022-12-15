import { motion } from 'framer-motion';
import { pageVariants } from '../components/Contact/ContactItem/helpers/settingsAnimation';
import { pageTransition } from '../components/Contact/ContactItem/helpers/settingsAnimation';
import { FaAddressBook } from 'react-icons/fa';

export default function HomePage() {
  return (
    <motion.div
      animate="in"
      initial="initial"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <h1>
        {' '}
        <FaAddressBook />
        Hello this is phoneBook App{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
      <p>Here you can save your contacts</p>
    </motion.div>
  );
}
