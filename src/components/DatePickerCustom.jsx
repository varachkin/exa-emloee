import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DatePickerCustom({label, getValue = (e)=> console.log(e), views}) {

  
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']} sx={{justifyContent: 'center', p: 2}}>
        <DatePicker label={label} onChange={(value => getValue(value))} views={views}/>
      </DemoContainer>
    </LocalizationProvider>
  );
}