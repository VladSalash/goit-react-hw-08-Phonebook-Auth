import { Link } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <>
      <li>
        <Link to="/signIn">Sign In</Link>
      </li>
      <li>
        <Link to="/signUp">Sign Up</Link>
      </li>
    </>
  );
};
export default AuthNav;
