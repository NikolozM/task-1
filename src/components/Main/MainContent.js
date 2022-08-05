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
    <Grid container>
      {content.map((item) => {
        return (
          <Grid item xs={4} p='50px'>
            <Link
              to={`/DetailsPage/${item.id}`}
              style={{
                textDecoration: 'none',
                color: '#3A1212',
              }}
            >
              <Typography>{item.id}</Typography>
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default MainContent;
