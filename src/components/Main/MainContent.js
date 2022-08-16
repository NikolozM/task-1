import React from 'react';
import { Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const MainContent = ({ content }) => {
  return (
    <Grid
      container
      direction='row'
      padding='20px'
      justifyContent='center'
    >
      {content.map((item) => {
        return (
          <Grid
            key={item.id}
            item
            xl={3}
            md={6}
            sm={8}
            xs={12}
            m={{
              xl: '0px 20px 100px 20px',
              md: '0px 20px 100px 20px',
              sm: '0px 0px 50px 0px',
              xs: '0px 0px 30px 0px',
            }}
            sx={{
              '&:hover': {
                boxShadow: '1px 1px 2px 2px #a0a8a1',
                transform: 'scale(1.02)',
                borderRadius: '10px',
                transition: '0.5s',
              },
            }}
          >
            <Link
              to={item.path}
              style={{
                textDecoration: 'none',
                color: '#3A1212',
              }}
            >
              <Typography align='center'>
                {item.id}
              </Typography>
              <img
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                src={item.img}
                alt=''
              ></img>
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default MainContent;
