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

export const topBarRoute = [
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
