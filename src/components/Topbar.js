import React , {useState} from "react";
import { Link } from "react-router-dom";
import { Stack, Typography,TextField } from "@mui/material";

const Navbar = () => {


  const [search, setSearch] = useState("");


  return (
    <Stack
      direction='row'
      justifyContent='space-around'
      alignItems="center"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px='20px'
    >
      <Link to='/'>
        <img
          src="http://www.procreditbank.ge/sites/default/files/main-logo.png"
          alt='logo'
          style={{width:"250px"}}
        ></img>
      </Link>

      <Stack
        direction='row'
        gap='40px'
        fontSize='24px'
        alignItems='flex-end'
      >
                <Typography         
        fontWeight={700}
        sx={{
          fontSize: {
            lg: "14px",
            mb: "10px",
            textAlign: "center",
          },
        }}>
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
        <Typography         
        fontWeight={700}
        sx={{
          fontSize: {
            lg: "14px",
            mb: "10px",
            textAlign: "center",
          },
        }}>
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
        sx={{
          fontSize: {
            lg: "14px",
            mb: "10px",
            textAlign: "center",
          },
        }}>
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
        sx={{
          fontSize: {
            lg: "14px",
            mb: "10px",
            textAlign: "center",
          },
        }}>
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
        sx={{
          fontSize: {
            lg: "14px",
            mb: "10px",
            textAlign: "center",
          },
        }}>
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
        sx={{
          fontSize: {
            lg: "14px",
            mb: "10px",
            textAlign: "center",
          },
        }}>
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
              fontSize:"10px",
              fontWeight: "300",
              border: "none",
              borderRadius: "0px",
            },
            width: { lg: "300px", xs: "250px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          size="small"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value.toLowerCase())
          }
          placeholder='ძებნა'
          type='text'
        />
    </Stack>
  );
};

export default Navbar;
