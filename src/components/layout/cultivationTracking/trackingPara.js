import React from "react";
import { makeStyles } from "@mui/styles";
import { createStyles } from "@material-ui/core";
import { Box, Typography } from "@material-ui/core";
import Background from '../../../assect/images/box.png'
const useStyles = makeStyles(() =>
  createStyles({
    Card: {
      color: "#FDFDFD",
      // backgroundImage: `url(${Background})`,
      // backgroundColor: "green",
      maxWidth: "1500px",
      borderRadius: "16px",
      padding: "1rem",
    },
    CardTitle: {
        fontSize: "42px !important",
        fontWeight:'400 !important'
    },
    CardPara: {
      maxWidth: "1100px",
      fontWeight:'300 !important'
    },
  })
);
export default function TrackingPara() {
  const classes = useStyles();
  return (
    <Box className={classes.Card} sx={{ mt: 2 }} style={{backgroundImage: `url(${Background})`,  backgroundPosition: 'center' }} >
      <Typography variant="h2" className={classes.CardTitle}>
        Cultivation Tracking
      </Typography>
      {/* <img src={Background}/> */}
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
