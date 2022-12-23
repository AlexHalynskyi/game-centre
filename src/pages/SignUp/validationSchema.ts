import * as Yup from 'yup';
import { signInSchema } from '@/components/SignInMail';

const signUpSchema = signInSchema.shape({
  repeatPassword: Yup.string()
    .required('Required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

export default signUpSchema
