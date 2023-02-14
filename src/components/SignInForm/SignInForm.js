import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useSignInUserMutation } from 'services/phoneBookApi';
import useShowPassword from 'hooks/useShowPassword';
import { signIn } from 'redux/auth/authSlice';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { motion } from 'framer-motion';
import { pageVariants } from '../Contact/ContactItem/helpers/settingsAnimation';
import { pageTransition } from '../Contact/ContactItem/helpers/settingsAnimation';
import { FaUserCircle } from 'react-icons/fa';
import { BsEye } from 'react-icons/bs';
import { BsEyeSlash } from 'react-icons/bs';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Form, Label } from './SignInForm.styled';

const schema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export const SignInForm = () => {
  const [type, handlePasswordToggle] = useShowPassword();
  const [signInUser] = useSignInUserMutation();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async ({ email, password }, { resetForm }) => {
      try {
        const { data } = await signInUser({ email, password });
        dispatch(signIn(data));
      } catch (error) {
        console.log(error);
        toast.error('Wrong email or password!');
      }
      resetForm();
    },
    validationSchema: schema,
  });

  const { email, password } = formik.values;

  const handleClick = () => {
    if (email === '' || password === '') {
      return toast.info(`Form fields must be completed`);
    }
  };

  return (
    <motion.div
      animate="in"
      initial="initial"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <FaUserCircle />
      <h2>Welcome</h2>
      <Form onSubmit={formik.handleSubmit} autoComplete="off">
        <Label>
          Email
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="Email"
          />
        </Label>
        <Label>
          Password
          <input
            type={type}
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="Password"
          />
          <span onClick={handlePasswordToggle}>
            {type === 'password' ? <BsEye /> : <BsEyeSlash />}
          </span>
        </Label>
        <button type="submit" onClick={handleClick}>
          Sign in to PhoneBook
        </button>
        <p>
          New to PhoneBook?&nbsp;
          <NavLink to="/signUp">Create an account</NavLink>
        </p>
      </Form>
    </motion.div>
  );
};
