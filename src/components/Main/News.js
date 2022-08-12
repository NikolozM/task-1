import React from 'react';
import {
  Stack,
  Typography,
  TextField,
  Box,
} from '@mui/material';

const News = () => {
  return (
    <div>
      <div>
        <div>DATE</div>
        <div>TITLE</div>
        <div>IMG</div>
        <div>TEXT</div>
      </div>
      <div>
        RECENT NEWS
        <div>
          <img alt=''></img>
          <p>DATE</p>
          <p>TITLE</p>
          <p>TEXT</p>
          <p>Read more</p>
        </div>
      </div>
    </div>
  );
};

export default News;
