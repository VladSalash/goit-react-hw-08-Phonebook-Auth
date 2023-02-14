import { useSelector } from 'react-redux';
import authSelectors from 'redux/features/contacts/contactSelectors';

import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';

import { List, Item, Link } from './Navigation.styled';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>
      <List>
        <Item>
          <Link to="/">Home</Link>
          {isLoggedIn && <Link to="/contacts">Contacts</Link>}
        </Item>
        {isLoggedIn && (
          <Item>
            <Link to="/contacts">Contacts</Link>
          </Item>
        )}
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </List>
    </nav>
  );
};

export default Navigation;
