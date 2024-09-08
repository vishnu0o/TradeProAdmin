import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const data = [
  { token: 4125, name: 'John Doe', phone: '+91 7089888455', email: 'johndoe23@gmail.com', joinedDate: '23 May 2023, 09:38 AM', course: 'Basic', referralCount: 12, status: 'Active' },
  // Add more rows as necessary
];

const CustomerTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Token</TableCell>
            <TableCell>Customer Name</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Joined Date</TableCell>
            <TableCell>Course</TableCell>
            <TableCell>Referral Count</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.token}>
              <TableCell>{row.token}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.joinedDate}</TableCell>
              <TableCell>{row.course}</TableCell>
              <TableCell>{row.referralCount}</TableCell>
              <TableCell>
                <Chip label={row.status} color={row.status === 'Active' ? 'success' : 'default'} />
              </TableCell>
              <TableCell>
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomerTable;
