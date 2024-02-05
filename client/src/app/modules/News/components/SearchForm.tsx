import { type FunctionComponent, useState } from 'react';
import { Moment } from 'moment';
import { GUARDIAN_SECTIONS, NewsGetRequestBody } from '@shared/core';

import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { type SelectChangeEvent } from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import SearchIcon from '@mui/icons-material/Search';

const SearchForm: FunctionComponent<Props> = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const [sections, setSections] = useState<string[]>([]);
  const [fromDate, setFromDate] = useState<Moment | null>(null);

  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  const handleDate = (newDate: Moment | null) => {
    setFromDate(newDate);
  };
  const handleSections = (e: SelectChangeEvent<string[]>) => {
    const value = e.target.value;
    setSections(typeof value === 'string' ? value.split(',') : value);
  };

  const handleSubmit = () => {
    onSubmit({ query, filters: { sections, fromDate: fromDate?.toJSON() } });
  };

  return (
    <Stack component="form" direction="row" spacing={2}>
      <TextField label="Search" value={query} onChange={handleQuery} InputProps={{ endAdornment: <SearchIcon /> }} />

      <FormControl sx={{ width: 300 }}>
        <InputLabel>Sections</InputLabel>
        <Select multiple label="Sections" value={sections} onChange={handleSections}>
          {Object.entries(GUARDIAN_SECTIONS).map(([key, value], index) => (
            <MenuItem key={index} value={value}>
              {key}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DatePicker label="From date" value={fromDate} onChange={handleDate} />
      </LocalizationProvider>

      <Button variant="contained" onClick={handleSubmit} size="large" sx={{ textTransform: 'none' }}>
        Submit
      </Button>
    </Stack>
  );
};

interface Props {
  onSubmit: (data: Omit<NewsGetRequestBody, 'source'>) => void;
}

export default SearchForm;
