import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider
} from 'firebase/auth';
import { HOME_PATH } from '@/router';
import { setUser } from '@/store/slices/userSlice';
import { useAppDispatch } from '@/hooks/redux-hooks';

const authProviders = {
  'Google': GoogleAuthProvider,
  'GitHub': GithubAuthProvider,
};

const availableMethods = ['Google', 'GitHub'];

const SignInSocial = () => {
  const dispatch = useAppDispatch();
  const [, setCookie] = useCookies<string>([]);
  const auth  = getAuth();
  const navigate = useNavigate();

  const signIn = async (method: string) => {
    const provider = new authProviders[method as keyof typeof authProviders];
    const { user } = await signInWithPopup(auth, provider);
    const token = await user.getIdToken();
    dispatch(setUser({
      email: user.email,
      id: user.uid,
      token,
    }));
    setCookie('accessToken', token);
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
