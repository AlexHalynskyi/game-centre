import React from 'react';
import { Link } from 'react-router-dom';
import { SIGN_IN_PATH } from '@/router';

const NavBar = () => {
  return (
    <Link to={SIGN_IN_PATH}>Sign In</Link>
  );
};

export default NavBar;