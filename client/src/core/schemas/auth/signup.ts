import * as yup from 'yup';

import { SignInSchema } from './signin';

export const SignUpSchema = SignInSchema.shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
});
