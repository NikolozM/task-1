import React from 'react';
import {
  Stack,
  Typography,
  TextField,
  Box,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const Management = () => {
  const { t } = useTranslation();
  return (
    <div style={{ padding: '100px' }}>
      <Typography fontFamily='Helvetica Neue'>
        {t('management_text')}
      </Typography>
    </div>
  );
};

export default Management;
