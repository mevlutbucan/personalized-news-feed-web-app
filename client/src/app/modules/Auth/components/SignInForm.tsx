import { type FunctionComponent, useState } from 'react';

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import IconVisibility from '@mui/icons-material/Visibility';
import IconVisibilityOff from '@mui/icons-material/VisibilityOff';

import FormTitle from './shared/FormTitle';
import FormLink from './shared/FormLink';
import FormInput from './shared/FormInput';

const SignInForm: FunctionComponent<Props> = ({ title, signUpPath }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShowPassword((show) => !show);
  };

  return (
    <Box display="flex" width={480} px="64px" alignItems="center">
      <Stack my={5} flexGrow={1}>
        <FormTitle text={title} />
        <FormLink to={signUpPath} reason="Are you new?" text="Create an account" />

        <Stack component="form" mt={5} spacing={2}>
          <Alert severity="info" sx={{ alignItems: 'center' }}>
            <Stack>
              <span>
                <span style={{ display: 'inline-block', minWidth: '9ch' }}>Email:</span>
                <strong>demo@email.com</strong>
              </span>
              <span>
                <span style={{ display: 'inline-block', minWidth: '9ch' }}>Password:</span>
                <strong>Demo1234</strong>
              </span>
            </Stack>
          </Alert>

          <FormInput required id="email" name="email" label="Email Address" autoComplete="email" autoFocus />
          <FormInput
            type={showPassword ? 'text' : 'password'}
            required
            id="password"
            name="password"
            label="Password"
            autoComplete="password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" onClick={handleShowPassword} edge="end">
                  {showPassword ? <IconVisibility /> : <IconVisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />

          <Typography component="div" variant="body2" textAlign="end">
            <Link>Forgot password?</Link>
          </Typography>

          <Button type="submit" variant="contained" size="large" fullWidth>
            Sign in
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

interface Props {
  title: string;
  signUpPath: string;
}

export default SignInForm;
