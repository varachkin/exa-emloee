import * as React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from '../features/actions/actionSlice';
import { locales } from '../locales';

export const LanguageSwicher = () => {
    const { language, languagesList } = useSelector(state => state.actionReducer)
    const dispatch = useDispatch();
    const [age, setAge] = React.useState(language);
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        dispatch(changeLanguage(event.target.value));
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    return (
        <FormControl sx={{ m: 1, minWidth: 100, height: '100%' }}>
            <InputLabel size='small' id="demo-controlled-open-select-label">{locales[language].LANGUAGE.LANGUAGE}</InputLabel>
            <Select
                size='small'
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={language}
                label={locales[language].LANGUAGE.LANGUAGE}
                onChange={handleChange}
            >
                {languagesList.map(lang => <MenuItem key={lang} value={lang}>{lang}</MenuItem>)}
            </Select>
        </FormControl>
    )
}