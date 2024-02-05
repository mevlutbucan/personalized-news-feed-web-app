import { type FunctionComponent, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignUpFieldValues, SignUpSchema } from '@shared/core';

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import FormHelperText from '@mui/material/FormHelperText';
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

import { useAppDispatch, useAppSelector } from '../../../services/redux/hooks';
import { resetAuthError, signUp } from '../../../services/redux/auth/actions';

const SignUpForm: FunctionComponent<Props> = ({ title, signInPath }) => {
  const dispatch = useAppDispatch();

  const { register, handleSubmit, formState } = useForm<SignUpFieldValues>({
    resolver: yupResolver(SignUpSchema),
  });

  const { onChange: onFirstNameChange, ref: firstNameRef } = register('firstName');
  const { onChange: onLastNameChange, ref: lastNameRef } = register('lastName');
  const { onChange: onEmailChange, ref: emailRef } = register('email');
  const { onChange: onPasswordChange, ref: passwordRef } = register('password');

  const onFormSubmit = handleSubmit((data) => {
    dispatch(signUp(data));
  });

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShowPassword((show) => !show);
  };

  const authError = useAppSelector((state) => state.auth.error);
  useEffect(() => {
    if (authError) {
      setTimeout(() => dispatch(resetAuthError()), 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authError]);

  return (
    <Box display="flex" width={480} px="64px" alignItems="center">
      <Stack my={5} flexGrow={1}>
        <FormTitle text={title} />
        <FormLink to={signInPath} reason="Do you have an account?" text="Sign in" />
        <Stack component="form" mt={5} spacing={2} onSubmit={onFormSubmit}>
          <Stack direction="row" spacing={2}>
            <FormInput
              required
              id="firstName"
              name="firstName"
              label="First Name"
              autoComplete="firstName"
              autoFocus
              onChange={onFirstNameChange}
              error={formState.isDirty && Boolean(formState.errors.firstName)}
              errorMessage={formState.isDirty && formState.errors.firstName?.message}
              ref={firstNameRef}
            />
            <FormInput
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              autoComplete="lastName"
              onChange={onLastNameChange}
              error={formState.isDirty && Boolean(formState.errors.lastName)}
              errorMessage={formState.isDirty && formState.errors.lastName?.message}
              ref={lastNameRef}
            />
          </Stack>

          <FormInput
            required
            id="email"
            name="email"
            label="Email Address"
            autoComplete="email"
            onChange={onEmailChange}
            error={formState.isDirty && Boolean(formState.errors.email)}
            errorMessage={formState.isDirty && formState.errors.email?.message}
            ref={emailRef}
          />

          <FormInput
            type={showPassword ? 'text' : 'password'}
            required
            id="password"
            name="password"
            label="Password"
            autoComplete="password"
            onChange={onPasswordChange}
            error={formState.isDirty && Boolean(formState.errors.password)}
            errorMessage={formState.isDirty && formState.errors.password?.message}
            ref={passwordRef}
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

          <Stack>
            <Button type="submit" variant="contained" size="large" fullWidth>
              Register
            </Button>
            <FormHelperText error sx={{ mt: 0, mb: -2, py: 1, height: '2rem', textAlign: 'center' }}>
              {authError}
            </FormHelperText>
          </Stack>

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
