import React from 'react';
import {
  Stack,
  Typography,
  TextField,
  Box,
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
          <Grid item xs={6} m='50px'>
            <Link
              to={`/DetailsPage/${item.id}`}
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
