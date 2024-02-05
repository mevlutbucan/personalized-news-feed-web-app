import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import SignUpForm from '../modules/Auth/components/SignUpForm';

import { useAppSelector } from '../services/redux/hooks';

import { Paths } from '../../core/enums/Paths';

export default function SignUp() {
  const navigate = useNavigate();
  const loggedIn = useAppSelector((state) => state.auth.loggedIn);

  useEffect(() => {
    if (loggedIn) {
      navigate(Paths.Preferences);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn]);

  return (
    <>
      <Helmet title="Sign Up" />

      <Stack component="main" position="relative" minHeight="100vh" direction="row">
        <Box flexGrow={1} bgcolor="primary.main"></Box>
        <SignUpForm title="Create an account" signInPath={Paths.SignIn} />
      </Stack>
    </>
  );
}
