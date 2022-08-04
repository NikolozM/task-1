import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import Topbar from './components/Topbar';
import Home from './pages/Home';
import DetailsPage from './pages/DetailsPage';
import content from './records.json'


const App = () => {
  return (
    <Box>
      <Topbar />
      <Routes>
        <Route
          path='/'
          element={<Home content={content} />}
        />
        <Route
          path='/DetailsPage/:id'
          element={<DetailsPage content={content} />}
        />
      </Routes>
    </Box>
  );
};

export default App;
