import React from "react";
import { makeStyles } from "@mui/styles";
import { createStyles } from "@material-ui/core";
import { Box, Typography } from "@material-ui/core";
const useStyles = makeStyles(() =>
  createStyles({
    Card: {
      color: "#FDFDFD",
      backgroundColor: "green",
      maxWidth: "1500px",
      borderRadius: "16px",
      padding: "1rem",
    },
    CardTitle: {
        fontSize: "52px !important",
        fontWeight:'700px !important'
    },
    CardPara: {
      maxWidth: "1100px",
    },
  })
);
export default function TrackingPara() {
  const classes = useStyles();
  return (
    <Box className={classes.Card} sx={{ mt: 2 }}>
      <Typography variant="h2" className={classes.CardTitle}>
        Cultivation Tracking
      </Typography>
      <Typography variant="subtitle2" className={classes.CardPara}>
        Check your ending inventory and record capture all of your SOP’s here.
        You can edit and manage everything through the detail button on the
        Current Cultivation list, and you can see all documentation and
        processes for previous Lot’s in the bottom section. Use the Start New
        Lot button to create a new grow.
      </Typography>
    </Box>
  );
}
