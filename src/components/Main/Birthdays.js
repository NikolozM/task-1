import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import dog from '../../assets/dog.png';
import {
  Stack,
  TextField,
  Box,
  Container,
} from '@mui/material';
import { birthdays } from '../../routes/birthdays.js';

import { ScrollMenu } from 'react-horizontal-scrolling-menu';

let newDate = new Date();
let date = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();
let separator = '/';

let currentDate = `${
  month < 10 ? `0${month}` : `${month}`
}${separator}${
  month < 10 ? `0${date}` : `${date}`
}${separator}${year}`;

console.log(currentDate);

const Birthdays = () => {
  return (
    <ScrollMenu>
      <Stack direction='row'>
        {birthdays.map((person) => {
          if (person.birthday === currentDate) {
            return (
              <Card
                sx={{ width: 245, padding: '50px' }}
                key={person.id}
              >
                <CardActionArea>
                  <CardMedia
                    component='img'
                    height='140'
                    image={person.img}
                    alt='green iguana'
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant='h5'
                      component='div'
                    >
                      {person.name}
                    </Typography>
                    <Typography
                      variant='body2'
                      color='text.secondary'
                    >
                      {person.text}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            );
          }
        })}
      </Stack>
    </ScrollMenu>
  );
};

export default Birthdays;
