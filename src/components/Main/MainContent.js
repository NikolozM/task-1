import React from 'react';
import {
  Typography,
  Grid,
} from '@mui/material';
import { Link } from 'react-router-dom';

const MainContent = ({ content }) => {
  return (
    <Grid
      container
      direction='row'
      padding='100px'
      justifyContent='center'
    >
      {content.map((item) => {
        return (
          <Grid
            item
            xs={{ xl: '4', md: '6', sm: '8', xs: '12' }}
            m={{
              xl: '10px 30px 80px 30px',
              md: '10px 0px 80px 0px',
              sm: '10px 0px 50px 0px',
              xs: '10px 0px 30px 0px',
            }}
            sx={{
              '&:hover': {
                boxShadow: '1px 1px 1px rgb(212, 241, 215)',
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
                  objectFit: 'contain',
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
