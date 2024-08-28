import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TableHistory from './TableHistory';
import DatePickerCustom from './DatePickerCustom';
import { CurrentInfo } from './CurrentInfo';
import { Paper } from '@mui/material';
import { HistoryInfo } from './HistoryInfo';
import { EmployeeInfo } from './EmployeeInfo';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export function TabPanelCustom() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const tabcConfig = {
        tabTitles: []
    }

    const tabs = ['zameldowanie / wymeldowanie', 'Historia', 'Zarządzaj pracownikiem'];

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <Box sx={{ bgcolor: 'background.paper', width: '90%', margin: '1vh auto', padding: '1vh' }}>

            <AppBar position="static">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    {tabs.map((el, index) => (
                        <Tab label={el} {...a11yProps(index)} key={el} />
                    ))}
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
                component={Paper}
                
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <CurrentInfo title={tabs[0]?.toUpperCase()}/>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                   <HistoryInfo title={tabs[1]?.toUpperCase()}/>
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                   <EmployeeInfo title={tabs[2]?.toUpperCase()}/>
                </TabPanel>
            </SwipeableViews>
        </Box>
    );
}