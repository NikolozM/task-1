import React from 'react';
import {
  Stack,
  Typography,
  TextField,
  Box,
} from '@mui/material';
const HabitCode = () => {
  return (
    <div>
      <Typography>
        ჩვენი ქცევის ნორმებს განსაზღვრავს პროკრედიტ ბანკის
        ქცევის კოდექსი, რომელიც საერთოა პროკრედიტ ჯგუფშ
        შემავალი ყველა ბანკისთვის და რომლის შესრულებაც
        სავალდებულოა ყველა თანამშრომლისთვის:
      </Typography>

      <a
        style={{ textDecoration: 'none', color: 'green' }}
        href='https://intranet.procreditbank.ge/intranet_new/admin/files/CoC_web_202006.pdf'
      >
        ქცევის კოდექსი
      </a>
    </div>
  );
};

export default HabitCode;
