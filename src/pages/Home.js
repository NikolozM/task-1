import React from 'react';
import MainContent from '../components/MainContent';
import Accordion from '../components/Accordion';

const home = ({ content }) => {
  return (
    <div>
      <MainContent content={content} />
      <Accordion />
    </div>
  );
};

export default home;
