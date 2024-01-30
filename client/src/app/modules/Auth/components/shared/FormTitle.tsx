import { type FunctionComponent } from 'react';

import Typography from '@mui/material/Typography';

const FormTitle: FunctionComponent<Props> = ({ text }) => {
  return (
    <Typography component="h1" variant="h4" mb={2} fontSize="1.5rem" fontWeight={700}>
      {text}
    </Typography>
  );
};

interface Props {
  text: string;
}

export default FormTitle;
