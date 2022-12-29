import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie';
import { getAuth } from 'firebase/auth';
import { SIGN_IN_PATH } from '@/router';
import { removeUser } from '@/store/slices/userSlice';
import { useAuth } from '@/hooks/useAuth';

const NavBar = () => {
  const dispatch = useDispatch();
  const [, , removeCookie] = useCookies();
  const auth = getAuth();
  const { isAuth } = useAuth();

  const handleSignOut = () => {
    auth.signOut();
    dispatch(removeUser());
    removeCookie('accessToken');
  };

  return (
    isAuth
    ? <button onClick={handleSignOut}>Sign Out</button>
    : <Link to={SIGN_IN_PATH}>Sign In</Link>
  );
};

export default NavBar;
