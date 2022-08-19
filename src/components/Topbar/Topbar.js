import React, { useState } from 'react';
import {
  Stack,
  TextField,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import TopbarContent from './TopbarContent';
import HamburgerMenu from './TopbarComponents/HamburgerMenu';
import Logo from '../../assets/Logo.png';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import LanguageChanger from '../LanguageChanger';

const Navbar = () => {
  const [search, setSearch] = useState('');
  const theme = useTheme();
  const isMatch = useMediaQuery(
    theme.breakpoints.down('md')
  );

  return (
    <div>
      <Stack
        direction='row'
        alignItems='center'
        justifyContent='space-between'
        p='15px'
      >
        {isMatch ? <HamburgerMenu /> : <TopbarContent />}

        <Box>
          <TextField
            sx={{
              input: {
                fontSize: '12px',
                fontWeight: '300',
                border: 'none',
                borderRadius: '0px',
              },
              width: { lg: '250px', xs: '150px' },
              borderRadius: '40px',
              paddingRight: '20px',
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            variant='standard'
            color='success'
            size='small'
            value={search}
            onChange={(e) =>
              setSearch(e.target.value.toLowerCase())
            }
            type='text'
          />
        </Box>

        <Box
          width={{
            xl: '250px',
            md: '200px',
            sm: '150px',
            xs: '130px',
          }}
        >
          <img
            src={Logo}
            alt='logo'
            style={{ width: '100%' }}
          ></img>
        </Box>
        <Stack>
          <LanguageChanger />
        </Stack>
      </Stack>


      <div className='container'>
        <div className='bar-color'>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
