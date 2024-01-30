import * as yup from 'yup';

const PASSWORD_REGEX = /^(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])(?=\D*\d)[A-Za-z0-9]{1,}$/;

export const SignInSchema = yup.object({
  email: yup.string().required('Email is required.').email('Please enter a valid email address.'),
  password: yup
    .string()
    .required('Password is required.')
    .min(8, 'Password must contain at least eight characters!')
    .test({
      test: (value) => {
        return PASSWORD_REGEX.test(value);
      },
      message: 'Password must contain at least one number, one lower and one uppercase letters!',
    }),
});
