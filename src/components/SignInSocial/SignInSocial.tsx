import React, { useContext } from 'react';
import firebase from 'firebase/compat/app';
import { Context } from '@/auth';

const authProviders = {
  'Google': firebase.auth.GoogleAuthProvider,
  'GitHub': firebase.auth.GithubAuthProvider,
};

const availableMethods = ['Google', 'GitHub'];

const SignInSocial = () => {
  const { auth } = useContext(Context);

  const signIn = async (method: string) => {
    const provider = new authProviders[method as keyof typeof authProviders];
    const { user } = await auth.signInWithPopup(provider);
    console.log(user);
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