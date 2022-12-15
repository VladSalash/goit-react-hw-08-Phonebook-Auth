import { useState } from 'react';

const useShowPassword = () => {
  const [type, setType] = useState('password');

  const handlePasswordToggle = () => {
    type === 'password' ? setType('text') : setType('password');
  };
  return [type, handlePasswordToggle];
};

export default useShowPassword;
