import { Helmet } from 'react-helmet';
import { SignUpForm } from 'components/SignUpForm/SignUpForm';

export default function Register() {
  return (
    <>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <SignUpForm />
    </>
  );
}
