import React from 'react';
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
import Chart from './components/Chart';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import CarReservation from './components/Topbar/TopbarComponents/CarReservation';
import Management from './components/Topbar/TopbarComponents/Management';
import Values from './components/Topbar/TopbarComponents/Values';
import HabitCode from './components/Topbar/TopbarComponents/HabitCode';
import DressCode from './components/Topbar/TopbarComponents/DressCode';
import HealthInsurance from './components/Topbar/TopbarComponents/HealthInsurance';
import VacancyPolitic from './components/Topbar/TopbarComponents/VacancyPolitic';
import VacancyPayment from './components/Topbar/TopbarComponents/VacancyPayment';
import ChangingPosition from './components/Topbar/TopbarComponents/ChangingPosition';
import ProfDevelopment from './components/Topbar/TopbarComponents/ProfDevelopment';
import ProCreditAcademy from './components/Topbar/TopbarComponents/ProCreditAcademy';

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
    react: { useSuspense: false },
  });

const App = () => {
  const topBarRoutes = [
    {
      path: '/company',
      title: 'ჩვენი კომპანია',
      children: [
        {
          path: '/management',
          title: 'ჩვენი მენეჯმენტი',
          component: <Management />,
        },
      ],
    },
    {
      path: '/culture',
      title: 'კომპანიის კულტურა',
      children: [
        {
          path: '/values',
          title: 'ჩვენი ღირებულებები',
          component: <Values />,
        },
        {
          path: '/habit-code',
          title: 'ჩვენი ქცევის კოდექსი',
          component: <HabitCode />,
        },
        {
          path: '/dress-code',
          title: 'ჩვენი ჩაცმის კოდექსი',
          component: <DressCode />,
        },
      ],
    },
    {
      path: '/general-info',
      title: 'ზოგადი ინფორმაცია',
      children: [
        {
          path: '/health-insurance',
          title: 'ჯანმრთელობის დაზღვევის პირობები',
          component: <HealthInsurance />,
        },
        {
          path: '/vacancy-politic',
          title: 'შვებულების პოლიტიკა',
          component: <VacancyPolitic />,
        },
        {
          path: '/vacancy-payment-politic',
          title: 'დეკრეტული შვებულების ანაზღაურება',
          component: <VacancyPayment />,
        },
      ],
    },
    {
      path: '/our-team',
      title: 'ჩვენი გუნდი',
      children: [
        {
          path: '/changing-position',
          title: 'პოზიციის ცვლილება და შერჩევა',
          component: <ChangingPosition />,
        },
        {
          path: '/professional-development',
          title: 'პროფესიული განვითარება',
          component: <ProfDevelopment />,
        },
        {
          path: '/procredit-academy',
          title: 'პროკრედიტ აკადემია',
          component: <ProCreditAcademy />,
        },
      ],
    },
    {
      path: '/service',
      title: 'ჩვენი მომსახურება',
      children: [
        {
          path: '/car-reservation',
          title: 'ავტომობილის დარეზერვება',
          component: <CarReservation />,
        },
      ],
    },
  ];

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
      <Chart />
      <div style={{ marginTop: 'auto' }}>
        <Footer />
      </div>
    </Box>
  );
};

export default App;
