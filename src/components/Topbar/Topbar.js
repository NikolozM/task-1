import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Stack,
  Typography,
  TextField,
  Box,
} from "@mui/material";
import TopbarContent from "./TopbarContent";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import Logo from "../../assets/Logo.png";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [hamburgerOn, setHamburgerOn] = useState(false);

  function hamburgerIcon() {
    setHamburgerOn(!hamburgerOn);
  }

  return (
    <div>
      <Stack
        direction='row'
        alignItems='center'
        justifyContent='space-between'
        p='15px'
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
              style={{ cursor: "pointer" }}
            />
          ) : (
            <MenuIcon
              onClick={() => hamburgerIcon()}
              fontSize='large'
              style={{ cursor: "pointer" }}
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
                textDecoration: "none",
                color: "#3A1212",
              }}
            >
              მთავარი
            </Link>
          </Typography>

          <Stack
            sx={{
              display:
                hamburgerOn === true ? "flex" : "none",
            }}
            gap='20px'
            alignItems='center'
            className='roll-out'
          >
            <TopbarContent />
          </Stack>
        </Stack>

        <Stack direction='row'>
          <TextField
            sx={{
              input: {
                fontSize: "10px",
                fontWeight: "300",
                border: "none",
                borderRadius: "0px",
              },
              width: { lg: "250px", xs: "150px" },
              backgroundColor: "#fff",
              borderRadius: "40px",
              paddingRight: "20px",
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
            <img
              src={Logo}
              alt='logo'
              style={{ width: "100%" }}
            ></img>
          </Box>
        </Stack>
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
