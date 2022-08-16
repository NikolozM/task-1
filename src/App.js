import React, { Suspense } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Topbar from './components/Topbar/Topbar';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import EmployeesContactPage from './pages/EmployeesContactPage';
import EmployeesPage from './pages/EmployeesPage';
import MyPage from './pages/MyPage';
import MarketingPage from './pages/MarketingPage';
import TrainingsAndDevelopmentPage from './pages/TrainingsAndDevelopmentPage';
import EnvironmentalManagementPage from './pages/EnvironmentalManagementPage';
import ChartPage from './pages/ChartPage';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { topBarRoutes } from './routes/topBarRoute';
import News from './components/Main/News';
import NewsPage from './pages/NewsPage';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'ge'],
    fallbackLng: 'ge',
    detection: {
      order: [
        'cookie',
        'htmlTag',
        'localStorage',
        'path',
        'subdomain',
      ],
      caches: ['cookie'],
    },
    backend: {
      loadPath:
        '/assets/languages/{{lng}}/translation.json',
    },
  });

const App = () => {
  return (
    <Box className='body'>
      <Topbar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        {topBarRoutes.map((route) => {
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
        <Route path='/News-Page' element={<NewsPage />} />
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
        <Route path='/Currency' element={<ChartPage />} />
        <Route path='/News' element={<News />} />
      </Routes>
      <div style={{ marginTop: 'auto' }}>
        <Footer />
      </div>
    </Box>
  );
};

export default App;
