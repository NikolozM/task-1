import React from 'react';
import { news } from '../../routes/news.js';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

const News = () => {
  return (
    <div
      style={{
        borderBottom: '1px solid black',
        paddingBottom: '10px',
        marginBottom: '30px',
      }}
    >
      <Typography
        fontSize='18px'
        fontWeight='600'
        mb='20px'
        pb='10px'
        sx={{ borderBottom: '1px solid black' }}
      >
        სტატიები
      </Typography>
      <img
        src={news[0].img}
        alt=''
        style={{ width: '80%', borderRadius: '20%' }}
      ></img>
      <Typography fontWeight='600' fontSize='12px'>
        {news[0].date}
      </Typography>
      <Typography fontSize='14px' fontWeight='600'>
        {news[0].title}
      </Typography>
      <Typography fontSize='12px'>
        {news[0].text}
      </Typography>
      <Link
        style={{
          textDecoration: 'none',
          fontSize: '12px',
          marginTop: '10px',
          fontWeight: '600',
          color: 'black',
        }}
        to='/News-Page'
        fontSize='12px'
      >
        იხილეთ მეტი
      </Link>
    </div>
  );
};

export default News;
