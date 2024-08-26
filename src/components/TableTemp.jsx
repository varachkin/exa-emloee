import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(status, name, calories, fat, carbs) {
  return { status, name, calories, fat, carbs };
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
            <TableCell>Name</TableCell>
            <TableCell align="right">Check in</TableCell>
            <TableCell align="right">Check out</TableCell>
            <TableCell align="right">Hours</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                 <TableCell component="th" scope="row">
                {row.status}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}