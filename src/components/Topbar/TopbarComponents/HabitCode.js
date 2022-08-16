import React from 'react';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
const HabitCode = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Typography>{t('our_habit_code_text')}</Typography>

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
