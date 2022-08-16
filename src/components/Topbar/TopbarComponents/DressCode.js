import React from 'react';
import {
  Stack,
  Typography,
  TextField,
  Box,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
const DressCode = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Typography>{t('our_dress_code_text')}</Typography>

      <a
        style={{ textDecoration: 'none', color: 'green' }}
        href='https://intranet.procreditbank.ge/intranet_new/admin/files/CoC_web_202006.pdf'
      >
        ჩაცმის კოდექსი
      </a>
    </div>
  );
};

export default DressCode;
