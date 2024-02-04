import { type FunctionComponent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GUARDIAN_SECTIONS } from '@shared/core';

import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import { useAppDispatch, useAppSelector } from '../../../services/redux/hooks';
import { updatePreferences } from '../../../services/redux/user/actions';

import { Paths } from '../../../../core/enums/Paths';

const PreferenceForm: FunctionComponent<Props> = ({ title }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const accessToken = useAppSelector((state) => state.auth.accessToken)!;
  const preferences = useAppSelector((state) => state.user.preferences);

  const [source, setSource] = useState(preferences?.source || 'GUARDIAN');
  const handleSourceChange = (_event: React.MouseEvent<HTMLElement>, newSource: string | null) => {
    if (newSource) {
      setSource(newSource);
    }
  };

  const sectionArray: [string, boolean][] = preferences?.sections.map((section) => [section, true]) || [];
  const [sections, setSections] = useState(Object.fromEntries(sectionArray));
  const handleSectionChange = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    setSections({
      ...sections,
      [event.target.name]: checked,
    });
  };

  const handleSubmit = () => {
    dispatch(
      updatePreferences({
        accessToken,
        preferences: {
          source,
          sections: Object.entries(sections)
            .filter((value) => value[1])
            .map((value) => value[0]),
        },
      })
    ).then((action) => {
      if (action.meta.requestStatus === 'fulfilled') {
        navigate(Paths.News);
      }
    });
  };

  return (
    <Stack my={5} width={560} borderRadius={2} alignItems="center" bgcolor="white">
      <Stack p={8}>
        <Typography component="h1" variant="h4" mb={3} fontSize="1.75rem" fontWeight={700}>
          {title}
        </Typography>

        <FormControl variant="standard" sx={{ mb: 3 }}>
          <FormLabel sx={{ mb: 1, fontWeight: 700 }}>Source of News</FormLabel>
          <ToggleButtonGroup exclusive value={source} onChange={handleSourceChange} fullWidth color="primary">
            <ToggleButton value="GUARDIAN">The Guardian</ToggleButton>
            <ToggleButton value="NY_TIMES" disabled>
              New York Times
            </ToggleButton>
            <ToggleButton value="BBC" disabled>
              BBC News
            </ToggleButton>
          </ToggleButtonGroup>
        </FormControl>

        <FormControl component="fieldset" variant="standard" sx={{ mb: 3 }}>
          <FormLabel component="legend" sx={{ mb: 1, fontWeight: 700 }}>
            Sections
          </FormLabel>
          <FormGroup row sx={{ flexWrap: 'wrap' }}>
            {Object.entries(GUARDIAN_SECTIONS).map(([key, value], index) => (
              <FormControlLabel
                key={index}
                control={<Checkbox checked={!!sections[value]} name={value} onChange={handleSectionChange} />}
                label={key}
                sx={{ flexGrow: 1, flexBasis: 200 }}
              />
            ))}
          </FormGroup>
          <FormHelperText></FormHelperText>
        </FormControl>

        <Button
          variant="contained"
          onClick={handleSubmit}
          size="large"
          fullWidth
          sx={{ textTransform: 'none' }}
          endIcon={<NavigateNextIcon />}
        >
          Save and continue
        </Button>
      </Stack>
    </Stack>
  );
};

interface Props {
  title: string;
}

export default PreferenceForm;
