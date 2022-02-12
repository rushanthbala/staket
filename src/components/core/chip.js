import React from "react";
import { makeStyles } from "@mui/styles";
import { createStyles } from "@material-ui/core";
const useStyles = makeStyles((prop) =>
  createStyles({
    Chip: {
      color: "#1AD598 !important",
      backgroundColor: "#1AD59866 !important",
      width: "70px",
      borderRadius: "12px",
    },
  })
);
export default function Chips({ data, prop }) {
  const classes = useStyles(prop);

  return <div className={classes.Chip}>{data}</div>;
}