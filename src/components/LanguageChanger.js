import React, { useState, useEffect } from 'react';
import i18next from 'i18next';
import Button from '@mui/material/Button';

const LanguageChanger = () => {
  const [language, setLanguage] = useState('en');

  function changeCode() {
    language === 'ge'
      ? setLanguage('en')
      : setLanguage('ge');
  }

  useEffect(() => {
    setLanguage(
      JSON.parse(localStorage.getItem('language'))
    );
    console.log(language);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'language',
      JSON.stringify(language)
    );
    console.log(language);
  }, [language]);

  return (
    <div>
      <Button
        onClick={() => {
          i18next.changeLanguage(language);
          changeCode();
        }}
        variant='contained'
        color='success'
        sx={{
          position: 'absolute',
          top: -'8',
          right: '7%',
          height: '40px',
          borderRadius: '12px',
        }}
      >
        {language}
      </Button>
    </div>
  );
};

export default LanguageChanger;
