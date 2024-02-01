import * as yup from 'yup';

import { SignInSchema } from './signin';

export const SignUpSchema = SignInSchema.shape({
  firstName: yup.string().required('First name is required.'),
  lastName: yup.string().required('Last name is required.'),
});
