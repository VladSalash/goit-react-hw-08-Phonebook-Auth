import { Helmet } from 'react-helmet';
import { SignInForm } from 'components/SignInForm/SignInForm';

export default function LoginPage() {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <SignInForm />
    </div>
  );
}
