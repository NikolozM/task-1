import React, { useState } from 'react';
import i18next from 'i18next';
import Button from '@mui/material/Button';

const LanguageChanger = () => {
  const [code, setCode] = useState('en');

  function changeCode() {
    code === 'ge' ? setCode('en') : setCode('ge');
  }

  return (
    <div>
      <Button
        onClick={() => {
          i18next.changeLanguage(code);
          changeCode();
        }}
        variant='contained'
        color='success'
        sx={{
          position:'absolute',
          top:-'8',
          right:'7%',
          height:'40px',
          borderRadius:'12px'
        }}
      >
        {code}
      </Button>
    </div>
  );
};

export default LanguageChanger;
