import React, { useEffect } from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { Link } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getBirthdays } from '../../redux/ducks/birthdays';
import dog from '../../assets/dog.png';
import { useTranslation } from 'react-i18next';
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

const Birthdays = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  useEffect(() => {
    dispatch(getBirthdays());
  }, [dispatch]);

  const birthdays = useSelector(
    (state) => state.birthdays.birthdays
  );

  return (
    <Stack direction='column'>
      <Typography
        fontSize='18px'
        fontWeight='600'
        mb='20px'
        pb='10px'
        sx={{ borderBottom: '1px solid black' }}
      >
        {t('birthdays')}
      </Typography>
      {birthdays.map((person) => {
        if (person.birthday === currentDate) {
          return (
            <div
              key={person.id}
              style={{
                borderBottom: '1px solid black',
                paddingBottom: '10px',
                marginBottom: '30px',
              }}
            >
              <img
                src='https://images.pexels.com/photos/802112/pexels-photo-802112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
