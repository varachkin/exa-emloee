import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircleIcon from '@mui/icons-material/Circle';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import { Box, CircularProgress, Typography } from '@mui/material';
import { locales } from '../locales';
import { useSelector } from 'react-redux';

function createData(Name, Surname, Info, StateName, code, ID) {
    return { Name, Surname, Info, StateName, code, ID };
}

export const TableEmloyee = ({ data, isLoading, errorMessage }) => {
    const { language } = useSelector(state => state.actionReducer)
    const tableData = data.map(el => (createData(el.Name, el.Surname, el.Info, el.StateName, el.code, el.ID)))
    console.log(tableData)

    return (
        <TableContainer component={Paper} elevation={6} sx={{ maxHeight: 440 }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table" aria-labelledby="tableTitle" stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>{locales[language].EMPLOYEE_TAB.NAME}</TableCell>
                        <TableCell align="right">{locales[language].EMPLOYEE_TAB.INFO}</TableCell>
                        <TableCell align="right">{locales[language].EMPLOYEE_TAB.POSITION}</TableCell>
                        <TableCell align="right">{locales[language].EMPLOYEE_TAB.CODE}</TableCell>

                    </TableRow>
                </TableHead>
                {isLoading ? (
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress />
                    </Box>) :
                    errorMessage ? (
                        <Typography
                            component='h4'
                            variant='h4'
                            padding={2}
                            sx={{
                                flex: 1,
                                textAlign: 'left',
                                width: '100%'
                            }}
                        >
                            {errorMessage}
                        </Typography>) :
                        tableData.length ? (
                            <TableBody>
                                {tableData.map((row) => (
                                    <TableRow
                                        key={row.ID}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {`${row.Name} ${row.Surname}`}
                                        </TableCell>
                                        <TableCell align="right">{row.Info}</TableCell>
                                        <TableCell align="right">{row.StateName}</TableCell>
                                        <TableCell align="right">{row.code}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>) :
                            <Typography
                                component='h4'
                                variant='h4'
                                padding={2}
                                sx={{
                                    flex: 1,
                                    textAlign: 'left',
                                    width: '100%'
                                }}
                            >
                                {locales[language].EMPLOYEE_TAB.NO_DATA}
                            </Typography>}
            </Table>
        </TableContainer>
    )
}