import React from 'react';
import {
  Typography,
  Box,
  Container,
  Grid,
} from '@mui/material';
import Link from '@mui/material/Link';

const Footer = () => {
  return (
    <Box
      px={{ xs: 3, sm: 10 }}
      py={{ xs: 5, sm: 10 }}
      bgcolor='#333333'
    >
      <Container maxWidth='lg'>
        <Grid container spacing={30}>
          <Grid item xs={12} sm={4}>
            <Box mb='30px' color='#fff' fontSize='18px'>
              დამატებითი ბმულები
            </Box>
            <Link
              style={{ textDecoration: 'none' }}
              href='http://www.procreditbank.ge/ge/node/178?mid=698'
            >
              <Typography
                color='#666'
                sx={{
                  '&:hover': { color: '#d42427' },
                }}
                fontWeight='700'
              >
                ტენდერები
              </Typography>
            </Link>

            <Link
              style={{ textDecoration: 'none' }}
              href='http://www.procreditbank.ge/ge/%E1%83%AC%E1%83%9A%E1%83%98%E1%83%A3%E1%83%A0%E1%83%98-%E1%83%90%E1%83%9C%E1%83%92%E1%83%90%E1%83%A0%E1%83%98%E1%83%A8%E1%83%98-0?mid=1100'
            >
              <Typography
                color='#666'
                sx={{
                  '&:hover': { color: '#d42427' },
                }}
                fontWeight='700'
              >
                წლიური ანგარიში
              </Typography>
            </Link>

            <Link
              style={{ textDecoration: 'none' }}
              href='https://nbg.gov.ge/index.php?m=2&mid=946&lng=geo&mid=946'
            >
              <Typography
                color='#666'
                sx={{
                  '&:hover': { color: '#d42427' },
                }}
                fontWeight='700'
              >
                ეროვნული ბანკის რეფინანსირების განაკვეთი
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box mb='30px' color='#fff' fontSize='18px'>
              საჭირო ბმულები
            </Box>

            <Link
              style={{ textDecoration: 'none' }}
              href='http://www.procreditbank.ge/ge/%E1%83%A1%E1%83%90%E1%83%91%E1%83%90%E1%83%9C%E1%83%99%E1%83%9D-%E1%83%9B%E1%83%9D%E1%83%9B%E1%83%A1%E1%83%90%E1%83%AE%E1%83%A3%E1%83%A0%E1%83%94%E1%83%91%E1%83%98%E1%83%A1-%E1%83%9E%E1%83%98%E1%83%A0%E1%83%9D%E1%83%91%E1%83%94%E1%83%91%E1%83%98-1?mid=838'
              color='inherit'
            >
              <Typography
                color='#666'
                sx={{
                  '&:hover': { color: '#d42427' },
                }}
                fontWeight='700'
              >
                საბანკო მომსახურების პირობები
              </Typography>
            </Link>

            <Link
              style={{ textDecoration: 'none' }}
              href='http://www.procreditbank.ge/ge/%E1%83%98%E1%83%A3%E1%83%A0%E1%83%98%E1%83%93%E1%83%98%E1%83%A3%E1%83%9A%E1%83%98-%E1%83%A1%E1%83%90%E1%83%99%E1%83%98%E1%83%97%E1%83%AE%E1%83%94%E1%83%91%E1%83%98?mid=703'
              color='inherit'
            >
              <Typography
                color='#666'
                sx={{
                  '&:hover': { color: '#d42427' },
                }}
                fontWeight='700'
              >
                იურიდიული საკითხები
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box mb='30px' color='#fff' fontSize='18px'>
              შემოგვიერთდით
            </Box>

            <Link
              style={{ textDecoration: 'none' }}
              href='http://www.procreditbank.ge/ge/%E1%83%9B%E1%83%9D%E1%83%AE%E1%83%9B%E1%83%90%E1%83%A0%E1%83%94%E1%83%91%E1%83%98%E1%83%A1-%E1%83%AC%E1%83%94%E1%83%A1%E1%83%94%E1%83%91%E1%83%98?mid=845'
              color='inherit'
            >
              <Typography
                color='#666'
                sx={{
                  '&:hover': { color: '#d42427' },
                }}
                fontWeight='700'
              >
                მოხმარების წესები
              </Typography>
            </Link>

            <Link
              style={{ textDecoration: 'none' }}
              href='/'
              color='inherit'
            >
              <Typography
                color='#666'
                sx={{
                  '&:hover': { color: '#d42427' },
                }}
                fontWeight='700'
              >
                მომხმარებლის დაცვა
              </Typography>
            </Link>

            <Link
              style={{ textDecoration: 'none' }}
              href='/'
              color='inherit'
            >
              <Typography
                color='#666'
                sx={{
                  '&:hover': { color: '#d42427' },
                }}
                fontWeight='700'
              >
                კონტაქტი
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
