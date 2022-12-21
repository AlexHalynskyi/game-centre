import React from 'react';
import { Link } from 'react-router-dom';
import { SIGN_UP_PATH } from '@/router';
import { SignInSocial } from '@/components';

const SignIn = () => {
  return (
    <div>
      <SignInSocial />
      <div>
        <span>Don`t have an account? </span>
        <Link to={SIGN_UP_PATH}>Sign Up</Link>
      </div>
    </div>
  );
};

export default SignIn;
