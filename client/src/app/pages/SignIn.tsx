import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import SignInForm from '../modules/Auth/components/SignInForm';

import { Paths } from '../../core/enums/Paths';

export default function SignIn() {
  return (
    <>
      <Helmet title="Sign In" />

      <Stack component="main" position="relative" minHeight="100vh" direction="row">
        <Box flexGrow={1} bgcolor="primary.main"></Box>
        <SignInForm title="Sign in to the application" signUpPath={Paths.SignUp} />
      </Stack>
    </>
  );
}
