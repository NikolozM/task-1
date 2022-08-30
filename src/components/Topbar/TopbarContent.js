import React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import {
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
  Stack,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { topBarRoutes } from '../../routes/topBarRoute';
import { useTranslation } from 'react-i18next';

export default function NavElements(props) {
  const { t } = useTranslation();

  const [expanded, setExpanded] = React.useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(
    theme.breakpoints.down('md')
  );

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
    <MuiAccordionSummary {...props} />
  ))(({ theme }) => ({
    flexDirection: 'row',
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(0),
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(
    ({ theme }) => ({
      padding: theme.spacing(0),
      display: 'block',
      position: 'absolute',
      width: `250px`,
      backgroundColor: 'rgb(252,254,254,0.9)',
    })
  );

  const AccordionDetail = styled(MuiAccordionDetails)(
    ({ theme }) => ({
      padding: theme.spacing(0),
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'rgb(252,254,254,0.9)',
    })
  );

  const handleChange = (panel) => {
    setExpanded(panel);
  };
  return (
    <Stack direction='row' width='50%' gap='20px' alignItems='center'>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <Typography
          fontWeight={600}
          fontSize='14px'
          pl='20px'
          sx={{
            color: '#3A1212',
            '&:hover': { color: 'green' },
          }}
        >
          {t('main')}
        </Typography>
      </Link>

      <div
        onMouseLeave={() => {
          handleChange('');
        }}
        className={
          isMatch
            ? 'small-top-bar-list-items'
            : 'large-top-bar-list-items'
        }
      >
        {topBarRoutes.map((route) => {
          return (
            <Stack key={route.path}>
              <Accordion
                expanded={expanded === `${route.path}`}
                onMouseOver={() =>
                  handleChange(`${route.path}`)
                }
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
                    {t(route.title)}
                  </Typography>
                </AccordionSummary>

                {isMatch ? (
                  <AccordionDetail>
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
                                primary={t(child.title)}
                              />
                            </ListItemButton>
                          </ListItem>
                        </Link>
                      );
                    })}
                  </AccordionDetail>
                ) : (
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
                                primary={t(child.title)}
                              />
                            </ListItemButton>
                          </ListItem>
                        </Link>
                      );
                    })}
                  </AccordionDetails>
                )}
              </Accordion>
            </Stack>
          );
        })}
      </div>
    </Stack>
  );
}
