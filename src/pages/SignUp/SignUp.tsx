import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { signUpSchema } from '@/pages/SignUp';
import { HOME_PATH } from '@/router';
import { setUser } from '@/store/slices/userSlice';
import { useAppDispatch } from '@/hooks/redux-hooks';

const SignUp = () => {
  const dispatch = useAppDispatch();
  const [, setCookie] = useCookies<string>([]);
  const auth = getAuth();
  const navigate = useNavigate();

  const submitHandler = async (email: string, password: string) => {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
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
    <Formik
      initialValues={{ email: '', password: '', repeatPassword: '' }}
      validationSchema={signUpSchema}
      onSubmit={({ email, password }) => submitHandler(email, password)}
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
        <div>
          <div>Repeat password</div>
          <Field type="password" name="repeatPassword" />
          <ErrorMessage name="repeatPassword" component="div" />
        </div>
        <button type="submit" >
          Create an account
        </button>
      </Form>
    </Formik>
  );
};

export default SignUp;
