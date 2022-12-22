import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import { SIGN_IN_PATH } from '@/router';

const NavBar = () => {
  const auth = getAuth();
  const [user] = useAuthState(auth);

  return (
    user
    ? <button onClick={() => auth.signOut()}>Sign Out</button>
    : <Link to={SIGN_IN_PATH}>Sign In</Link>
  );
};

export default NavBar;
