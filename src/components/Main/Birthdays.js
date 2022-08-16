import * as React from 'react';
import { birthdays } from '../../routes/birthdays.js';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { Link } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';
let newDate = new Date();
let date = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();
let separator = '/';

let currentDate = `${
  month < 10 ? `0${month}` : `${month}`
}${separator}${
  month < 10 ? `${date}` : `${date}`
}${separator}${year}`;

console.log(currentDate);

const Birthdays = () => {
  return (
    <Stack direction='column'>
      <Typography
        fontSize='18px'
        fontWeight='600'
        mb='20px'
        pb='10px'
        sx={{ borderBottom: '1px solid black' }}
      >
        დაბადების დღეები
      </Typography>
      {birthdays.map((person) => {
        if (person.birthday === currentDate) {
          return (
            <div
              style={{
                borderBottom: '1px solid black',
                paddingBottom: '10px',
                marginBottom: '30px',
              }}
            >
              <img
                src={person.img}
                alt=''
                style={{
                  width: '80%',
                  borderRadius: '20%',
                }}
              ></img>
              <Typography fontWeight='600' fontSize='12px'>
                {person.birthday}
              </Typography>
              <Typography fontSize='14px' fontWeight='600'>
                {person.name}
              </Typography>
              <Typography fontSize='12px'>
                {person.text}
              </Typography>
            </div>
          );
        }
      })}
    </Stack>
  );
};

export default Birthdays;
