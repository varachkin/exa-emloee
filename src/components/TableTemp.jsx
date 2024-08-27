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

function createData(status, name, checkIn, checkOut, hours) {
  return { status, name, checkIn, checkOut, hours };
}

const rows = [
  createData(false, 'Frozen yoghurt', 159, 6.0, 24),
  createData(false,'Ice cream sandwich', 237, 9.0, 37),
  createData(false,'Eclair', 262, 16.0, 24),
  createData(false,'Cupcake', 305, 3.7, 67),
  createData(false,'Gingerbread', 356, 16.0, 49),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} elevation={6}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" aria-labelledby="tableTitle" stickyHeader>
        <TableHead>
          <TableRow>
          <TableCell>Status</TableCell>
            <TableCell>Imię Nazwisko</TableCell>
            <TableCell align="right">Zameldowałem się <SyncAltIcon color='success' sx={{ fontSize: 'inherit'}}/></TableCell>
            <TableCell align="right">Wymeldować się <SyncAltIcon color='error' sx={{ fontSize: 'inherit'}}/></TableCell>
            <TableCell align="right">Godziny</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                 <TableCell component="th" scope="row">
                {<CircleIcon color={`${row.status ? 'success' : 'error'}`} />}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.checkIn}</TableCell>
              <TableCell align="right">{row.checkOut}</TableCell>
              <TableCell align="right">{row.hours}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}