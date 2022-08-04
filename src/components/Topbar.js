import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Stack,
  Typography,
  TextField,
  Box,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [search, setSearch] = useState("");

  const [hamburgerOn, setHamburgerOn] = useState(false);

  function menusIcon() {
    setHamburgerOn(!hamburgerOn);
  }

  return (
    <Stack
      direction='row'
      alignItems='center'
      justifyContent='space-between'
      px='20px'
    >
      <Stack direction='row' gap='20px' alignItems='center'>
        <MenuIcon
          onClick={() => menusIcon()}
          fontSize='large'
          style={{ cursor: "pointer" }}
        />

        <Typography
          fontWeight={700}
          textAlign='center'
          fontSize='12px'
        >
          <Link
            to='/'
            style={{
              textDecoration: "none",
              color: "#3A1212",
            }}
          >
            მთავარი
          </Link>
        </Typography>
      </Stack>
      <Stack
        direction='row'
        gap='20px'
        style={{
          display: hamburgerOn === true ? "flex" : "none",
        }}
        alignItems='center'
      >
        <Typography
          fontWeight={700}
          textAlign='center'
          fontSize='12px'
        >
          <Link
            to='/'
            style={{
              textDecoration: "none",
              color: "#3A1212",
            }}
          >
            კომპანიის კულტურა
          </Link>
        </Typography>
        <Typography
          fontWeight={700}
          textAlign='center'
          fontSize='12px'
        >
          <Link
            to='/'
            style={{
              textDecoration: "none",
              color: "#3A1212",
            }}
          >
            კომპანიის შესახებ
          </Link>
        </Typography>
        <Typography
          fontWeight={700}
          textAlign='center'
          fontSize='12px'
        >
          <Link
            to='/'
            style={{
              textDecoration: "none",
              color: "#3A1212",
            }}
          >
            ზოგადი ინფორმაცია
          </Link>
        </Typography>
        <Typography
          fontWeight={700}
          textAlign='center'
          fontSize='12px'
        >
          <Link
            to='/'
            style={{
              textDecoration: "none",
              color: "#3A1212",
            }}
          >
            თანამშრომელთა გუნდი
          </Link>
        </Typography>
        <Typography
          fontWeight={700}
          textAlign='center'
          fontSize='12px'
        >
          <Link
            to='/'
            style={{
              textDecoration: "none",
              color: "#3A1212",
            }}
          >
            მომსახურება
          </Link>
        </Typography>
      </Stack>

      <TextField
        sx={{
          input: {
            fontSize: "10px",
            fontWeight: "300",
            border: "none",
            borderRadius: "0px",
          },
          width: { lg: "350px", xs: "250px" },
          backgroundColor: "#fff",
          borderRadius: "40px",
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
          xl: "250px",
          md: "150px",
          sm: "130px",
          xs: "100px",
        }}
      >
        <Link to='/'>
          <img
            src='http://www.procreditbank.ge/sites/default/files/main-logo.png'
            alt='logo'
            style={{ width: "100%" }}
          ></img>
        </Link>
      </Box>
    </Stack>
  );
};

export default Navbar;
