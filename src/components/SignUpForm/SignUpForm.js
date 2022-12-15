import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { motion } from 'framer-motion';
import { pageVariants } from '../Contact/ContactItem/helpers/settingsAnimation';
import { pageTransition } from '../Contact/ContactItem/helpers/settingsAnimation';
import { FaUserCircle } from 'react-icons/fa';
import { BsEye } from 'react-icons/bs';
import { BsEyeSlash } from 'react-icons/bs';

import { useSignUpUserMutation } from 'services/PhoneBook';
import useShowPassword from 'hooks/useShowPassword';
import { signUp } from 'redux/auth/authSlice';

import { FormBox, Label } from './SignUpForm.styled';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export const SignUpForm = () => {
  const dispatch = useDispatch();

  const [type, handlePasswordToggle] = useShowPassword();
  const [signUpUser] = useSignUpUserMutation();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: async ({ name, email, password }, { resetForm }) => {
      try {
        await signUpUser({ name, email, password });
        // dispatch(signUp(data));
      } catch (error) {
        console.log(error);
        toast.error('Try to enter another name or email');
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
      <FormBox onSubmit={formik.handleSubmit} autoComplete="off">
        <Label>
          Username
          <input
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            placeholder="Name"
          />
        </Label>
        <Label>
          Email
          <input
            type="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="Email"
          />
        </Label>
        <Label>
          Password
          <input
            type={type}
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="Password"
          />
          <span onClick={handlePasswordToggle}>
            {type === 'password' ? <BsEye /> : <BsEyeSlash />}
          </span>
        </Label>
        <button type="submit" onClick={handleClick}>
          Register
        </button>

        <p>
          Already register on PhoneBook?&nbsp;
          <NavLink to="/signIn">Sign in</NavLink>
        </p>
      </FormBox>
    </motion.div>
  );
};
