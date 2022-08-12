import CarReservation from '../components/Topbar/TopbarComponents/CarReservation';
import Management from '../components/Topbar/TopbarComponents/Management';
import Values from '../components/Topbar/TopbarComponents/Values';
import HabitCode from '../components/Topbar/TopbarComponents/HabitCode';
import DressCode from '../components/Topbar/TopbarComponents/DressCode';
import HealthInsurance from '../components/Topbar/TopbarComponents/HealthInsurance';
import VacancyPolitic from '../components/Topbar/TopbarComponents/VacancyPolitic';
import VacancyPayment from '../components/Topbar/TopbarComponents/VacancyPayment';
import ChangingPosition from '../components/Topbar/TopbarComponents/ChangingPosition';
import ProfDevelopment from '../components/Topbar/TopbarComponents/ProfDevelopment';
import ProCreditAcademy from '../components/Topbar/TopbarComponents/ProCreditAcademy';

export const topBarRoutes = [
  {
    path: '/company',
    title: 'our_company',
    children: [
      {
        path: '/management',
        title: 'our_management',
        component: <Management />,
      },
    ],
  },
  {
    path: '/culture',
    title: 'company_culture',
    children: [
      {
        path: '/values',
        title: 'our_values',
        component: <Values />,
      },
      {
        path: '/habit-code',
        title: 'our_habit_code',
        component: <HabitCode />,
      },
      {
        path: '/dress-code',
        title: 'our_dress_code',
        component: <DressCode />,
      },
    ],
  },
  {
    path: '/general-info',
    title: 'general_info',
    children: [
      {
        path: '/health-insurance',
        title: 'health_insurance',
        component: <HealthInsurance />,
      },
      {
        path: '/vacancy-politic',
        title: 'vacancy_politic',
        component: <VacancyPolitic />,
      },
      {
        path: '/vacancy-payment-politic',
        title: 'vacancy_payment',
        component: <VacancyPayment />,
      },
    ],
  },
  {
    path: '/our-team',
    title: 'our_team',
    children: [
      {
        path: '/changing-position',
        title: 'changing_position',
        component: <ChangingPosition />,
      },
      {
        path: '/professional-development',
        title: 'professional_development',
        component: <ProfDevelopment />,
      },
      {
        path: '/procredit-academy',
        title: 'procredit_academy',
        component: <ProCreditAcademy />,
      },
    ],
  },
  {
    path: '/service',
    title: 'our_service',
    children: [
      {
        path: '/car-reservation',
        title: 'car_reservation',
        component: <CarReservation />,
      },
    ],
  },
];
