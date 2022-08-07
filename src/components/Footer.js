import React from "react";
import {
  Typography,
  TextField,
  Box,
  Container,
  Grid,
} from "@mui/material";
import Link from "@mui/material/Link";

const Footer = () => {
  return (
    <Box
      px={{ xs: 3, sm: 10 }}
      py={{ xs: 5, sm: 10 }}
      bgcolor='text.secondary'
      color='white'
    >
      <Container maxWidth='lg'>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>Help</Box>
            <Box>
              <Link href='/' color='inherit'>
                Contact
              </Link>
            </Box>
            <Box>
              <Link href='/' color='inherit'>
                Support
              </Link>
            </Box>
            <Box>
              <Link href='/' color='inherit'>
                Privacy Policy
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>Account</Box>
            <Box>
              <Link href='/' color='inherit'>
                Login
              </Link>
            </Box>
            <Box>
              <Link href='/' color='inherit'>
                Register
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>Messages</Box>
            <Box>
              <Link href='/' color='inherit'>
                Backup
              </Link>
            </Box>
            <Box>
              <Link href='/' color='inherit'>
                History
              </Link>
            </Box>
            <Box>
              <Link href='/' color='inherit'>
                Roll
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
