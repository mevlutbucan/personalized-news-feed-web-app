import { type FormEventHandler, forwardRef, type ReactNode } from 'react';

import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput, { type OutlinedInputProps } from '@mui/material/OutlinedInput';

const FormInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { required, onChange, error, errorMessage, ...inputProps } = props;

  return (
    <FormControl fullWidth required={required} onChange={onChange} error={error}>
      <InputLabel htmlFor={inputProps.id}>{props.label}</InputLabel>
      <OutlinedInput {...inputProps} ref={ref} />
      <FormHelperText>{errorMessage}</FormHelperText>
    </FormControl>
  );
});

interface Props extends OutlinedInputProps {
  onChange?: FormEventHandler;
  errorMessage?: ReactNode;
}

export default FormInput;
