import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { topBarRoute } from '../../routes/topBarRoute';

const Accordion = styled((props) => (
  <MuiAccordion
    disableGutters
    elevation={0}
    square
    {...props}
  />
))(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon
        sx={{ fontSize: '0.9rem' }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  flexDirection: 'row',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(0),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(
  ({ theme }) => ({
    padding: theme.spacing(0),
    position: 'absolute',
    display: 'block',
    width: '250px',
    backgroundColor: 'rgb(252,254,254,0.9)',
  })
);

export default function NavElements(props) {
  const [expanded, setExpanded] = React.useState();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div style={{ display: 'flex' }}>
      {topBarRoute.map((route) => {
        if (route.children) {
          return (
            <Box key={route.path}>
              <Accordion
                expanded={expanded === `${route.path}`}
                onChange={handleChange(`${route.path}`)}
              >
                <AccordionSummary
                  aria-controls={`${route.path}`}
                  id='panel1d-header'
                >
                  <Typography
                    fontWeight={700}
                    textAlign='center'
                    fontSize='14px'
                  >
                    {route.title}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails>
                  {route.children.map((child) => {
                    return (
                      <Link
                        key={child.path}
                        to={`${route.path}${child.path}`}
                        style={{
                          textDecoration: 'none',
                          color: '#3A1212',
                        }}
                      >
                        <ListItem
                          component='div'
                          disablePadding
                        >
                          <ListItemButton>
                            <ListItemText
                              primary={`${child.title}`}
                            />
                          </ListItemButton>
                        </ListItem>
                      </Link>
                    );
                  })}
                </AccordionDetails>
              </Accordion>
            </Box>
          );
        } else {
          return (
            <Link
              key={route.path}
              to={route.path}
              style={{
                textDecoration: 'none',
                color: '#3A1212',
              }}
            >
              <ListItem
                disablePadding
                sx={{ display: 'block' }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    px: 2.5,
                  }}
                >
                  {route.id}
                  <ListItemText />
                </ListItemButton>
              </ListItem>
            </Link>
          );
        }
      })}
    </div>
  );
}
