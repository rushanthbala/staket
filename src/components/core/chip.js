import React from "react";
import { makeStyles } from "@mui/styles";
import { createStyles } from "@material-ui/core";
import Chip from "@mui/material/Chip";
const useStyles = makeStyles((prop) =>
  createStyles({
    Chip: {
      color: "#1AD598 !important",
      backgroundColor: "#1AD59866 !important",
    },
  })
);
export default function Chips({ data, prop }) {
  const classes = useStyles(prop);

  return (
    <Chip
      label={data}
      className={classes.Chi}
      classes={{ root: classes.Chip, colorPrimary: classes.Chip }}
    />
  );
}
