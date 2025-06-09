import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import './Table.css'


function createData(name, TrackingId,date,Status) {
  return { name,  TrackingId,date,Status };
}

const rows = [
  createData("Chicken fri",18908424,"2 March 2022","Approved"),
  createData("Big Bang Pizza",18908424,"2 March 2022","Pending"),
  createData("Mouth Fresher",1809345,"2 March 2022","Approved"),
  createData('Cupcake', 1805352,"2 March 2022","Deliverd"),
 
];
 const getStatusStyle = (Status) => {
  if (Status === 'Approved') {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    };
  } else if (Status === 'Pending') {
    return {
      background: '#ffadad8f',
      color: 'red',
    };
  } else {
    return {
      background: '#59bfff',
      color: 'white',
    };
  }
};

export default function BasicTable() {
  return (
    <>
      <div>
        <h3>Recent Order</h3>
      </div>
      
      <TableContainer component={Paper}
      style={{boxShadow:'0px 13px 20px 0px #80808029'}}
      >

        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="left">Tracking Id</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.TrackingId}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">
                    
                 <span className="status" style={getStatusStyle(row.Status)}>
            {row.Status}</span>
                </TableCell>
                <TableCell align="left" className="Detail">Detail</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

