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

import { ScrollMenu } from 'react-horizontal-scrolling-menu';

const Birthdays = () => {
  return (
    <ScrollMenu>
      <Stack direction='row'>
        <Card sx={{ width: 245, padding: '50px' }}>
          <CardActionArea>
            <CardMedia
              component='img'
              height='140'
              image={dog}
              alt='green iguana'
            />
            <CardContent>
              <Typography
                gutterBottom
                variant='h5'
                component='div'
              >
                ცუგა
              </Typography>
              <Typography
                variant='body2'
                color='text.secondary'
              >
                კომპანია ცუგას ულოცავს დაბადების დღეს
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ width: 245, padding: '50px' }}>
          <CardActionArea>
            <CardMedia
              component='img'
              height='140'
              image={dog}
              alt='green iguana'
            />
            <CardContent>
              <Typography
                gutterBottom
                variant='h5'
                component='div'
              >
                ცუგა
              </Typography>
              <Typography
                variant='body2'
                color='text.secondary'
              >
                კომპანია ცუგას ულოცავს დაბადების დღეს
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ width: 245, padding: '50px' }}>
          <CardActionArea>
            <CardMedia
              component='img'
              height='140'
              image={dog}
              alt='green iguana'
            />
            <CardContent>
              <Typography
                gutterBottom
                variant='h5'
                component='div'
              >
                ცუგა
              </Typography>
              <Typography
                variant='body2'
                color='text.secondary'
              >
                კომპანია ცუგას ულოცავს დაბადების დღეს
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ width: 245, padding: '50px' }}>
          <CardActionArea>
            <CardMedia
              component='img'
              height='140'
              image={dog}
              alt='green iguana'
            />
            <CardContent>
              <Typography
                gutterBottom
                variant='h5'
                component='div'
              >
                ცუგა
              </Typography>
              <Typography
                variant='body2'
                color='text.secondary'
              >
                კომპანია ცუგას ულოცავს დაბადების დღეს
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ width: 245, padding: '50px' }}>
          <CardActionArea>
            <CardMedia
              component='img'
              height='140'
              image={dog}
              alt='green iguana'
            />
            <CardContent>
              <Typography
                gutterBottom
                variant='h5'
                component='div'
              >
                ცუგა
              </Typography>
              <Typography
                variant='body2'
                color='text.secondary'
              >
                კომპანია ცუგას ულოცავს დაბადების დღეს
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Stack>
    </ScrollMenu>
  );
};

export default Birthdays;
