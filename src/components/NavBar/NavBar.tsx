import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { SIGN_IN_PATH } from '@/router';
import { Context } from '@/auth';

const NavBar = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  return (
    user
    ? <button onClick={() => auth.signOut()}>Sign Out</button>
    : <Link to={SIGN_IN_PATH}>Sign In</Link>
  );
};

export default NavBar;