import { useContext } from 'react';

import { UserContext } from '../providers/userContext';

const userContextHook = () => {
  const userContext = useContext(UserContext);

  return userContext;
};

export default userContextHook;
