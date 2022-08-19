import React, { useState } from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const Chart = () => {
  const { t } = useTranslation();

  return (
    <div
      style={{
        height: '200px',
        background: '#ff7322',
        width: '100px',
        borderRadius: '20px',
        display: 'flex',
        color: 'white',
        flexDirection: 'column',
        padding: '20px',
      }}
    >
      <Typography fontSize='15px' m='0 auto'>
        USD,EUR
      </Typography>
      <Typography  fontSize='13px' mb='10px'>
        {t('exchange_rates')}
      </Typography>
      <Typography fontSize='12px'>
        USD - 2.7877
      </Typography>
      <Typography fontSize='12px'>
        EUR - 2.8426
      </Typography>
      <Link
        style={{
          textDecoration: 'none',
          color: 'white',
          fontSize: '12px',
          marginTop: '10px',
        }}
        to='/Currency'
        m='0px auto'
        fontSize='12px'
      >
        {t('view_all')}
      </Link>
    </div>
  );
};

export default Chart;
