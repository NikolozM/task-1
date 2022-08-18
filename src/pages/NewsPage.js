import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { news } from '.././routes/news';
import { Grid, Typography } from '@mui/material';

const NewsPage = () => {
  const { id } = useParams();
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
        {news.map((item) => {
          if (item.id.toString() === id.toString()) {
            return (
              <div>
                <Typography>{item.date}</Typography>
                <Typography
                  fontSize='67px'
                  fontWeight='500'
                  height='auto'
                >
                  {item.title}
                </Typography>
                <img
                  src={item.img}
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
                  {item.text}
                </Typography>
              </div>
            );
          } else {
            return null;
          }
        })}
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
            if (item.id.toString() !== id.toString()) {
              console.log(item.id);
              console.log(id);
              return (
                <div
                  key={item.id}
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

                  <Link
                    style={{
                      textDecoration: 'none',
                      fontSize: '12px',
                      marginTop: '10px',
                      fontWeight: '600',
                      color: 'black',
                    }}
                    to={`/News-Page/${item.id}`}
                    fontSize='12px'
                  >
                    წაიკითხე სრულად
                  </Link>
                </div>
              );
            }
          })}
        </div>
      </Grid>
    </Grid>
  );
};
export default NewsPage;
