import React from 'react';
import { useCookies } from 'react-cookie';
import {
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { signInSchema } from '@/components/SignInMail';
import { HOME_PATH } from '@/router';
import { setUser } from '@/store/slices/userSlice';
import { useAppDispatch } from '@/hooks/redux-hooks';

const SignInMail = () => {
  const dispatch = useAppDispatch();
  const [, setCookie] = useCookies<string>([]);
  const auth  = getAuth();
  const navigate = useNavigate();

  const signIn = async (email: string, password: string) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      const token = await user.getIdToken();
      dispatch(setUser({
        email: user.email,
        id: user.uid,
        token,
      }));
      setCookie('accessToken', token);
      navigate(HOME_PATH);
    } catch (e: unknown) {
      console.log(e);
    }
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={signInSchema}
      onSubmit={({ email, password }) => signIn(email, password)}
    >
      <Form>
        <div>
          <div>E-mail</div>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </div>
        <div>
          <div>Password</div>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
        </div>
        <button type="submit" >
          Sign in
        </button>
      </Form>
    </Formik>
  );
};

export default SignInMail;
