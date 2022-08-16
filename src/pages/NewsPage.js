import React, { useState } from 'react';
import { news } from '.././routes/news';
import { Grid, Typography } from '@mui/material';
const NewsPage = () => {
  return (
    <Grid
      container
      direction='row'
      justifyContent='center'
      width='1280px'
      m='70px auto'
    >
      <Grid
        item
        xs={8}
        sx={{
          borderRight: '2px solid #000',
          paddingRight: '50px',
        }}
      >
        <Typography>{news[0].date}</Typography>
        <Typography
          fontSize='67px'
          fontWeight='500'
          height='auto'
        >
          {news[0].title}
        </Typography>
        <img
          src={news[0].img}
          alt=''
          style={{
            width: '100%',
            height: '320px',
            objectFit: 'cover',
          }}
        ></img>
        <Typography
          fontSize='19px'
          m='30px 55px'
          lineHeight='30px'
          letterSpacing='2px'
        >
          {news[0].text}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <div
          className='scrollBar'
          style={{ paddingLeft: '50px' }}
        >
          <Typography
            fontSize='18px'
            fontWeight='700'
            pb='15px'
            mb='20px'
            sx={{ borderBottom: '2px solid black' }}
          >
            უახლესი სტატიები
          </Typography>
          {news.map((item) => {
            return (
              <div
                style={{
                  borderBottom: '2px solid black',
                  marginBottom: '20px',
                  paddingBottom: '30px',
                }}
              >
                <img
                  src={item.img}
                  alt=''
                  style={{
                    width: '100px',
                    borderRadius: '50%',
                  }}
                ></img>
                <Typography fontWeight='500'>
                  {item.date}
                </Typography>
                <Typography
                  fontSize='24px'
                  fontWeight='600'
                >
                  {item.title}
                </Typography>
                <Typography pb='10px'>
                  {item.text.substring(0, 100)}...
                </Typography>
                <Typography
                  fontWeight='600'
                  sx={{ cursor: 'pointer' }}
                >
                  წაიკითხე სრულად
                </Typography>
              </div>
            );
          })}
        </div>
      </Grid>
    </Grid>
  );
};
export default NewsPage;
