import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Stack,
  Typography,
  TextField,
  Box,
} from '@mui/material';
// import Accordion from './Accordion';

import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import titles from '../topBarContent.json';

const Navbar = () => {
  const [search, setSearch] = useState('');
  const [hamburgerOn, setHamburgerOn] = useState(false);
  const [dropMenu, setDropMenu] = useState();

  function hamburgerIcon() {
    setHamburgerOn(!hamburgerOn);
  }

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const dropDown = (id) => {
    setDropMenu(
      titles.filter((item) => item.id.includes(id))
    );
    console.log(dropMenu);
  };

  return (
    <div>
      <Stack
        direction='row'
        alignItems='center'
        justifyContent='space-between'
        px='20px'
      >
        <Stack
          direction='row'
          gap='20px'
          alignItems='center'
        >
          {hamburgerOn ? (
            <ClearIcon
              onClick={() => hamburgerIcon()}
              fontSize='large'
              style={{ cursor: 'pointer' }}
            />
          ) : (
            <MenuIcon
              onClick={() => hamburgerIcon()}
              fontSize='large'
              style={{ cursor: 'pointer' }}
            />
          )}

          <Typography
            fontWeight={600}
            textAlign='center'
            fontSize='14px'
          >
            <Link
              to='/'
              style={{
                textDecoration: 'none',
                color: '#3A1212',
              }}
            >
              მთავარი
            </Link>
          </Typography>

          <Stack
            style={{
              display:
                hamburgerOn === true ? 'flex' : 'none',
            }}
            direction='row'
            gap='20px'
            alignItems='center'
            className='roll-out'
          >
            {titles.map((text) => {
              return (
                <Typography
                  fontWeight={700}
                  textAlign='center'
                  fontSize='14px'
                  onMouseOver={() => {
                    dropDown(text.id);
                    handleMouseOver();
                  }}
                  onMouseOut={handleMouseOut}
                >
                  <Link
                    to='/'
                    style={{
                      textDecoration: 'none',
                      color: '#3A1212',
                    }}
                  >
                    {text.id}
                  </Link>
                </Typography>
              );
            })}
            {/* <Accordion/> */}
          </Stack>
        </Stack>

        <TextField
          sx={{
            input: {
              fontSize: '10px',
              fontWeight: '300',
              border: 'none',
              borderRadius: '0px',
            },
            width: { lg: '350px', xs: '250px' },
            backgroundColor: '#fff',
            borderRadius: '40px',
          }}
          size='small'
          value={search}
          onChange={(e) =>
            setSearch(e.target.value.toLowerCase())
          }
          placeholder='ძებნა'
          type='text'
        />

        <Box
          width={{
            xl: '250px',
            md: '150px',
            sm: '130px',
            xs: '100px',
          }}
        >
          <img
            src='http://www.procreditbank.ge/sites/default/files/main-logo.png'
            alt='logo'
            style={{ width: '100%' }}
          ></img>
        </Box>
      </Stack>
      <div className='container'>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
