import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FormControl } from "@mui/material";
import { Box } from "@material-ui/core";
import { makeStyles } from "@mui/styles";
import { createStyles } from "@material-ui/core";
import Week1 from "./week1";
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
      color: "#fff",
    },

    StartLot1: {
      color: "#fff",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "162px",
      height: "32px",
      background: "#55815C96 0% 0% no-repeat padding-box;",
      borderRadius: "8px",
      cursor: "pointer",
      margin: "0 10px 0 0px",
    },

    StartLot2: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "162px",
      height: "32px",
      background: "#68B174 0% 0% no-repeat padding-box",
      borderRadius: "8px",
      color: "#fff",
      cursor: "pointer",
    },
    AccordionRoot: {
      backgroundColor: "#6CD3A0",
      position: "inherit !important",
      borderRadius: "16px !important ",
      border: "none !important",
      boxShadow: "none !important",
    },
  })
);

export default function Germination() {
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
        <Typography>Germination</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Week1 />
      </AccordionDetails>
      <div className={classes.StartLotDiv}>
        <div className={classes.StartLot1}>Add Another Week</div>
        <div className={classes.StartLot2}>Move To Next State</div>
      </div>
    </Accordion>
  );
}
