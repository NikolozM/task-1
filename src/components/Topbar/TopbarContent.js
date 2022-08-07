import React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import {
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { topBarRoute } from "../../routes/topBarRoute";

export default function NavElements(props) {
  const [expanded, setExpanded] = React.useState();

  const Accordion = styled((props) => (
    <MuiAccordion
      disableGutters
      elevation={0}
      square
      {...props}
    />
  ))(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    "&:before": {
      display: "none",
    },
  }));

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary {...props} />

    // expandIcon={
    //   <ArrowForwardIosSharpIcon
    //   sx={{ fontSize: "0.9rem" }}
    // />
    // }

    // "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    //   transform: "rotate(90deg)",
    // },
  ))(({ theme }) => ({
    flexDirection: "row",
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(0),
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(
    ({ theme }) => ({
      padding: theme.spacing(0),
      position: "absolute",
      display: "block",
      width: `250px`,
      backgroundColor: "rgb(252,254,254,0.9)",
    })
  );

  const handleChange = (panel) => {
    setExpanded(panel);
  };
  return (
    <div
      onMouseLeave={() => {
        handleChange("");
      }}
      style={{ display: "flex", flexDirection: "row" }}
    >
      {topBarRoute.map((route) => {
        return (
          <Box key={route.path}>
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

              <AccordionDetails>
                {route.children.map((child) => {
                  return (
                    <Link
                      key={child.path}
                      to={`${route.path}${child.path}`}
                      style={{
                        textDecoration: "none",
                        color: "#3A1212",
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
      })}
    </div>
  );
}
