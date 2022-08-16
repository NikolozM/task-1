import React from 'react';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Values = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Typography>{t('our_values_text')}</Typography>
    </div>
  );
};

export default Values;
