import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider
} from 'firebase/auth';
import { HOME_PATH } from '@/router';

const authProviders = {
  'Google': GoogleAuthProvider,
  'GitHub': GithubAuthProvider,
};

const availableMethods = ['Google', 'GitHub'];

const SignInSocial = () => {
  const auth  = getAuth();
  const navigate = useNavigate();

  const signIn = async (method: string) => {
    const provider = new authProviders[method as keyof typeof authProviders];
    await signInWithPopup(auth, provider);
    navigate(HOME_PATH);
  };

  return (
    <div>
      {availableMethods.map(method =>
        <button key={method} onClick={() => signIn(method)}>Sign in with {method}</button>
      )}
    </div>
  );
};

export default SignInSocial;
