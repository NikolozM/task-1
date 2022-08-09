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
import IconButton from '@material-ui/core/IconButton';

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

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import FormControl from '@material-ui/core/FormControl';
// import TextField from '@material-ui/core/TextField';
// import Grid from '@material-ui/core/Grid';
// import AccountCircle from '@material-ui/icons/AccountCircle';

// const useStyles = makeStyles((theme) => ({
//   margin: {
//     margin: theme.spacing(1),
//   },
// }));

// export default function InputWithIcon() {
//   const classes = useStyles();

//   return (
//     <div>
//       <FormControl className={classes.margin}>
//         <InputLabel htmlFor="input-with-icon-adornment">With a start adornment</InputLabel>
//         <Input
//           id="input-with-icon-adornment"
//           startAdornment={
//             <InputAdornment position="start">
//               <AccountCircle />
//             </InputAdornment>
//           }
//         />
//       </FormControl>
//       <TextField
//         className={classes.margin}
//         id="input-with-icon-textfield"
//         label="TextField"
//         InputProps={{
//           startAdornment: (
//             <InputAdornment position="start">
//               <AccountCircle />
//             </InputAdornment>
//           ),
//         }}
//       />
//       <div className={classes.margin}>
//         <Grid container spacing={1} alignItems="flex-end">
//           <Grid item>
//             <AccountCircle />
//           </Grid>
//           <Grid item>
//             <TextField id="input-with-icon-grid" label="With a grid" />
//           </Grid>
//         </Grid>
//       </div>
//     </div>
//   );
// }
