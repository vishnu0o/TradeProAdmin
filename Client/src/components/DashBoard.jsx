import React from 'react';
import { Box, Container } from '@mui/material';
import Sidebar from './ReusableComponent/Sidebar';
import Header from './ReusableComponent/Header';
import CourseTabs from './ReusableComponent/Tabs';
import CustomerTable from './ReusableComponent/Table';

const Dashboard = () => {
  return (
    <Box display="flex" flexDirection="column">
        <Box flex={1} display="flex" flexDirection="column">
          <Header />
          <CourseTabs />
        {/* <CustomerTable /> */}
      </Box>
    </Box>
  );
    
};

export default Dashboard;
