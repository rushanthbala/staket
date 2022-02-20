import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { makeStyles } from "@mui/styles";
import { createStyles } from "@material-ui/core";
import Week2 from "./week2";
import Week3 from "./week3";
import Week4 from "./week4";
import Week5 from "./week5";
import Week6 from "./week6";

const useStyles = makeStyles(() =>
  createStyles({
    TableCol: {
      display: "flex",
      // flexDirection: "Column",
      margin: "0 auto",
      justifyContent: "space-between",
    },
    StartLotDiv: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    StartLot: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "162px",
      height: "32px",
      background: "#55815C 0% 0% no-repeat padding-box",
      borderRadius: "8px",
      cursor: "pointer",
    },
    AccordionRoot: {
      backgroundColor: "#6CD3A0",
      borderRadius: "16px !important ",
      border: "none !important",
      boxShadow: "none !important",
      position: "inherit !important",
    },
  })
);

export default function Vegitative() {
  const classes = useStyles();

  return (
    <Accordion
      classes={{ root: classes.AccordionRoot }}
      //   defaultExpanded={"true"}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{
          backgroundColor: "#6CD3A0",
          borderRadius: "16px !important ",
        }}
      >
        <Typography>Vegitative</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Week2 />
        <br />
        <Week3 />
        <br />
        <Week4 />
        <br />
        <Week5 />
        <br />
        <Week5 />
        <br />
        <Week6 />
        <br />
      </AccordionDetails>
    </Accordion>
  );
}
