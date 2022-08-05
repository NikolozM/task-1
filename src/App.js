import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Topbar from './components/Topbar/Topbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import content from './records.json';
import { topBarRoute } from './routes/topBarRoute.js';

const App = () => {
  return (
    <Box>
      <Topbar />
      <Routes>
        <Route
          path='/'
          element={<Home content={content} />}
        />
        {topBarRoute.map((route) => {
          const result = [];
          if (route.children) {
            result.push(
              ...route.children.map((child) => (
                <Route
                  key={child.path}
                  path={`${route.path}${child.path}`}
                  element={child.component}
                />
              ))
            );
          }
          result.push(
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
            />
          );
          return result;
        })}
        <Route />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
