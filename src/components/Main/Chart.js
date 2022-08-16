import React, { useState } from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
const Chart = () => {
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
      <Typography m='0px auto' fontSize='12px'>
        ოფიციალური USD,EUR კურსები
      </Typography>
      <Typography m='30px auto 15px auto' fontSize='12px'>
        EUR - 2.7877
      </Typography>
      <Typography m='0px auto' fontSize='12px'>
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
        იხილეთ ისტორია
      </Link>
    </div>
  );
};

export default Chart;
