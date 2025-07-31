import React, { useState } from 'react';
import { TextField, Button, IconButton } from '@mui/material';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function SearchForm() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState(null);

  const swapLocations = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="w-full bg-white p-6 rounded-xl shadow-md flex flex-wrap gap-8justify-center items-center">
        {/* From Input */}
        <TextField
          label="From"
          variant="outlined"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          inputProps={{ list: 'cities' }}
          className="flex-1 min-w-[200px]"
        />

        {/* Swap Button */}
        <IconButton
          onClick={swapLocations}
          color="primary"
          className="text-blue-600"
        >
          <SwapHorizIcon />
        </IconButton>

        {/* To Input */}
        <TextField
          label="To"
          variant="outlined"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          inputProps={{ list: 'cities' }}
          className="flex-1 min-w-[200px]"
        />

        {/* Date Picker */}
        <DatePicker
          label="Travel Date"
          value={date}
          onChange={(newDate) => setDate(newDate)}
          renderInput={(params) => (
            <TextField {...params} className="flex-1 min-w-[200px]" />
          )}
        />

        {/* Search Button */}
        <Button
          variant="contained"
          color="error"
          className="w-full sm:w-auto mt-2 sm:mt-0"
        >
          Search
        </Button>

        {/* Datalist for autocomplete */}
        <datalist id="cities">
          <option value="Delhi" />
          <option value="Mumbai" />
          <option value="Bangalore" />
          <option value="Chennai" />
          <option value="Kolkata" />
          <option value="Hyderabad" />
        </datalist>
      </div>
    </LocalizationProvider>
  );
}
