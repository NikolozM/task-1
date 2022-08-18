import React, { useState, useEffect } from 'react';
import { news } from '../../routes/news.js';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

const News = () => {
  const [num, setNum] = useState(0);
  const index = num;

  useEffect(() => {
    if (num < news.length - 1) {
      setTimeout(() => setNum(num + 1), 8000);
    } else {
      setTimeout(() => setNum(0), 8000);
    }
  }, [num]);

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
      <div key={news[index].id} className='slide'>
        <img
          src={news[index].img}
          alt=''
          style={{ width: '80%', borderRadius: '20%' }}
        ></img>
        <Typography fontWeight='600' fontSize='12px'>
          {news[index].date}
        </Typography>
        <Typography fontSize='14px' fontWeight='600'>
          {news[index].title}
        </Typography>
        <Typography fontSize='12px'>
          {news[index].text}
        </Typography>
        <Link
          style={{
            textDecoration: 'none',
            fontSize: '12px',
            marginTop: '10px',
            fontWeight: '600',
            color: 'black',
          }}
          to={`/News-Page/${news[index].id}`}
          fontSize='12px'
        >
          იხილეთ მეტი
        </Link>
      </div>
    </div>
  );
};

export default News;
