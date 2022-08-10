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

import CarReservation from '../../components/Topbar/TopbarComponents/CarReservation';
import Management from '../../components/Topbar/TopbarComponents/Management';
import Values from '../../components/Topbar/TopbarComponents/Values';
import HabitCode from '../../components/Topbar/TopbarComponents/HabitCode';
import DressCode from '../../components/Topbar/TopbarComponents/DressCode';
import HealthInsurance from '../../components/Topbar/TopbarComponents/HealthInsurance';
import VacancyPolitic from '../../components/Topbar/TopbarComponents/VacancyPolitic';
import VacancyPayment from '../../components/Topbar/TopbarComponents/VacancyPayment';
import ChangingPosition from '../../components/Topbar/TopbarComponents/ChangingPosition';
import ProfDevelopment from '../../components/Topbar/TopbarComponents/ProfDevelopment';
import ProCreditAcademy from '../../components/Topbar/TopbarComponents/ProCreditAcademy';

import { useTranslation } from 'react-i18next';

export default function NavElements(props) {
  const { t } = useTranslation();

  const topBarRoutes = [
    {
      path: '/company',
      title: t('our_company'),
      children: [
        {
          path: '/management',
          title: t('our_management'),
          component: <Management />,
        },
      ],
    },
    {
      path: '/culture',
      title: t('company_culture'),
      children: [
        {
          path: '/values',
          title: t('our_values'),
          component: <Values />,
        },
        {
          path: '/habit-code',
          title: t('our_habit_code'),
          component: <HabitCode />,
        },
        {
          path: '/dress-code',
          title: t('our_dress_code'),
          component: <DressCode />,
        },
      ],
    },
    {
      path: '/general-info',
      title: t('general_info'),
      children: [
        {
          path: '/health-insurance',
          title: t('health_insurance'),
          component: <HealthInsurance />,
        },
        {
          path: '/vacancy-politic',
          title: t('vacancy_politic'),
          component: <VacancyPolitic />,
        },
        {
          path: '/vacancy-payment-politic',
          title: t('vacancy_payment'),
          component: <VacancyPayment />,
        },
      ],
    },
    {
      path: '/our-team',
      title: t('our_team'),
      children: [
        {
          path: '/changing-position',
          title: t('changing_position'),
          component: <ChangingPosition />,
        },
        {
          path: '/professional-development',
          title: t('professional_development'),
          component: <ProfDevelopment />,
        },
        {
          path: '/procredit-academy',
          title: t('procredit_academy'),
          component: <ProCreditAcademy />,
        },
      ],
    },
    {
      path: '/service',
      title: t('our_service'),
      children: [
        {
          path: '/car-reservation',
          title: t('car_reservation'),
          component: <CarReservation />,
        },
      ],
    },
  ];

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
    <Stack direction='row' gap='20px' alignItems='center'>
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
                    {route.title}
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
                                primary={`${child.title}`}
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
                                primary={`${child.title}`}
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
