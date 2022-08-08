import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Topbar from './components/Topbar/Topbar';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import { topBarRoute } from './routes/topBarRoute.js';
import EmployeesContactPage from './pages/EmployeesContactPage';
import EmployeesPage from './pages/EmployeesPage';
import MyPage from './pages/MyPage';
import MarketingPage from './pages/MarketingPage';
import TrainingsAndDevelopmentPage from './pages/TrainingsAndDevelopmentPage';
import EnvironmentalManagementPage from './pages/EnvironmentalManagementPage';

const App = () => {
  return (
    <Box className='body'>
      <Topbar />
      <Routes>
        <Route path='/' element={<MainPage />} />
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
        <Route
          path='/Employees-Contact'
          element={<EmployeesContactPage />}
        />
        <Route
          path='/Employees'
          element={<EmployeesPage />}
        />
        <Route path='/My-page' element={<MyPage />} />
        <Route
          path='/Marketing'
          element={<MarketingPage />}
        />
        <Route
          path='/Trainings-Development'
          element={<TrainingsAndDevelopmentPage />}
        />
        <Route
          path='/Environmental-Management'
          element={<EnvironmentalManagementPage />}
        />
      </Routes>
      <div style={{ marginTop: 'auto' }}>
        <Footer />
      </div>
    </Box>
  );
};

export default App;
