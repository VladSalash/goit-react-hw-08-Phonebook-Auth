import { useSelector, useDispatch } from 'react-redux';

import contactSelectors from 'redux/features/contacts/contactSelectors';
import { useSignOutUserMutation } from 'redux/servicesApi/PhoneBookApi';
import { signOut } from 'redux/features/contacts/contactSlice';

import { FiUser } from 'react-icons/fi';
import { GoSignOut } from 'react-icons/go';

import { Wrapper, Username } from './UserMenu.styled';

const UserMenu = () => {
  const email = useSelector(contactSelectors.getUserEmail);
  const dispatch = useDispatch();
  const [signOutUser] = useSignOutUserMutation();

  const handleSignOut = async () => {
    try {
      signOutUser();
      dispatch(signOut());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <FiUser />
      <Username>Welcome, {email}</Username>
      <p>{email}</p>
      <button type="button" onClick={handleSignOut}>
        <GoSignOut />
      </button>
    </Wrapper>
  );
};

export default UserMenu;
