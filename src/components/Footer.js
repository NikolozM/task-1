import React from 'react';
import { Typography, TextField, Box } from '@mui/material';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '107px',
        background: '#1a1a1a',
        margin:0,
        padding:0
      }}
    >
      <Stack
        direction='row'
        justifyContent='space-evenly'
        mt='20px'
      >
        <p style={{ color: 'rgba(255,255,255,0.3)' }}>
          ©2022 ProCredit Bank, Georgia
        </p>
        <Stack
          direction='row'
          divider={
            <Divider
              orientation='vertical'
              flexItem
              color='rgba(255,255,255,0.3)'
              width='2px'
            />
          }
          spacing={2}
        >
          <Typography
            color='rgba(255,255,255,0.3)'
            fontSize='24px'
          >
            შემოგვიერთდით
          </Typography>
          <FacebookIcon color='blue' fontSize='large' />
        </Stack>
      </Stack>
    </div>
  );
};

export default Footer;
