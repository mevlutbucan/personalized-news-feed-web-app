import type { InferType } from 'yup';

import { SignInSchema } from '../schemas/auth/signin';
import { SignUpSchema } from '../schemas/auth/signup';

export type SignInFieldValues = InferType<typeof SignInSchema>;
export type SignUpFieldValues = InferType<typeof SignUpSchema>;
