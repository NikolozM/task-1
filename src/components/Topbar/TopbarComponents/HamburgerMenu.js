import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import { Stack } from '@mui/material';
import TopbarContent from '../TopbarContent';

const HamburgerMenu = () => {
  const [hamburgerOn, setHamburgerOn] = useState(false);

  function hamburgerIcon() {
    setHamburgerOn(!hamburgerOn);
  }

  return (
    <div>
      {' '}
      <Stack direction='row' gap='20px' alignItems='center'>
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
        <Stack
          sx={{
            display: hamburgerOn === true ? 'flex' : 'none',
          }}
          gap='20px'
          alignItems='center'
          direction='column'
        >
          <TopbarContent hamburgerOn={hamburgerOn} />
        </Stack>
      </Stack>
    </div>
  );
};

export default HamburgerMenu;
