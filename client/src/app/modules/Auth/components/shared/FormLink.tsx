import { type FunctionComponent } from 'react';
import { Link as RouterLink, type To } from 'react-router-dom';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const FormLink: FunctionComponent<Props> = ({ to, reason, text }) => {
  return (
    <Stack direction="row" spacing={0.5}>
      <Typography variant="body2">{reason}</Typography>
      <Link component={RouterLink} to={to} variant="body2" fontWeight={600}>
        {text}
      </Link>
    </Stack>
  );
};

interface Props {
  to: To;
  reason: string;
  text: string;
}

export default FormLink;
