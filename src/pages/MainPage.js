import React from 'react';
import MainContent from '../components/Main/MainContent';
import Birthdays from '../components/Main/Birthdays';
import Media from '../components/Main/Media';
import News from '../components/Main/News';
import UsefulInfo from '../components/Main/UsefulInfo';

import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  const content = [
    {
      id: t('employees_page'),
      img: 'https://hr.procredit-group.com/images/en/tile-2_2_1604934241.jpg',
      path: '/Employees',
    },
    {
      id: t('my_page'),
      img: 'https://hr.procredit-group.com/images/en/tile-3_1604934295.jpg',
      path: '/My-Page',
    },
    {
      id: t('marketing'),
      img: 'https://hr.procredit-group.com/images/en/pch_teaser_apply_1476777926.jpg',
      path: '/Marketing',
    },
    {
      id: t('environmental_management'),
      img: 'https://hr.procredit-group.com/images/en/tile-2_2_1604934241.jpg',
      path: '/Environmental-Management',
    },
    {
      id: t('trainings_and_development'),
      img: 'https://hr.procredit-group.com/images/en/tile-1_1604934169.jpg',
      path: '/Trainings-Development',
    },
    {
      id: t('employees_contact'),
      img: 'https://hr.procredit-group.com/images/en/pch_teaser_apply_1476777926.jpg',
      path: '/Employees-Contact',
    },
  ];
  return (
    <div>
      <News />
      <MainContent content={content} />
      <Birthdays />
      <Media />
      <UsefulInfo />
    </div>
  );
};

export default Home;
