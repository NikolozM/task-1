import React from 'react';
import MainContent from '../components/Main/MainContent';
import Birthdays from '../components/Main/Birthdays';
import Media from '../components/Main/Media';
import News from '../components/Main/News';
import UsefulInfo from '../components/Main/UsefulInfo';

const home = ({ content }) => {
  return (
    <div>
      <MainContent content={content} />
      <Birthdays />
      <Media />
      <News />
      <UsefulInfo />
    </div>
  );
};

export default home;
