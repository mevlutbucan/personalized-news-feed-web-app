import { type FunctionComponent, useState } from 'react';

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
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

const SignUpForm: FunctionComponent<Props> = ({ title, signInPath }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShowPassword((show) => !show);
  };

  return (
    <Box display="flex" width={480} px="64px" alignItems="center">
      <Stack my={5} flexGrow={1}>
        <FormTitle text={title} />
        <FormLink to={signInPath} reason="Do you have an account?" text="Sign in" />
        <Stack component="form" mt={5} spacing={2}>
          <Stack direction="row" spacing={2}>
            <FormInput required id="firstName" name="firstName" label="First Name" autoComplete="firstName" autoFocus />
            <FormInput required id="lastName" name="lastName" label="Last Name" autoComplete="lastName" />
          </Stack>

          <FormInput required id="email" name="email" label="Email Address" autoComplete="email" />
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

          <Alert severity="info" sx={{ fontSize: '0.75rem', lineHeight: '20px' }}>
            Password must contain at least eight characters, at least one number and both lower and uppercase letters.
          </Alert>

          <Button type="submit" variant="contained" size="large" fullWidth>
            Register
          </Button>

          <Divider />

          <Typography component="div" fontSize="0.75rem" textAlign="center">
            By signing up, I agree to <Link>Terms of Service</Link> and <Link>Privacy Policy</Link>.
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

interface Props {
  title: string;
  signInPath: string;
}

export default SignUpForm;
