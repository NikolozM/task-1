import React from 'react';
import MainContent from '../components/Main/MainContent';
import Birthdays from '../components/Main/Birthdays';
import Media from '../components/Main/Media';
import News from '../components/Main/News';
import UsefulInfo from '../components/Main/UsefulInfo';
import content from '../records.json';

const home = () => {
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

export default home;
