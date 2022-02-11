import * as React from "react";
import { makeStyles } from "@mui/styles";
import {
  createStyles,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
const useStyles = makeStyles(() =>
  createStyles({
    Dialog: {
      padding: "3rem",
    },
    ColDiv: {
      border: "2px solid #d9e1e7",
      background: "#F2F2F2 0% 0% no-repeat padding-box",
      borderRadius: "16px",
      width: "132px",
      height: " 52px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    Para: {
      color: "#809FB8",
      letterSpacing: "0.26px",
    },
    LotStart: {
      display: "flex",
    },
  })
);

export default function NewLotCreation(props) {
  const classes = useStyles();

  // const { handleClose } = props;
  return (
    <div className={classes.Dialog}>
      <DialogTitle>{"New Lot Creation"}</DialogTitle>
      <DialogContent  className={classes.DialogContent}> 
        <DialogContentText id="alert-dialog-slide-description">
          <div className={classes.LotStart}>
            <div>
              <div className={classes.Para}>Lot Id</div>
              <div className={classes.ColDiv}>#131942</div>
            </div>
            <div>
              <div className={classes.Para}>Lot Id</div>
              <div className={classes.ColDiv}>#131942</div>
            </div>
            <div>
              <div className={classes.Para}>Lot Id</div>
              <div className={classes.ColDiv}>#131942</div>
            </div>
            <div>
              <div className={classes.Para}>Lot Id</div>
              <div className={classes.ColDiv}>#131942</div>
            </div>
            <div>
              <div className={classes.Para}>Lot Id</div>
              <div className={classes.ColDiv}>#131942</div>
            </div>
            <div>
              <div className={classes.Para}>Lot Id</div>
              <div className={classes.ColDiv}>#131942</div>
            </div>
          </div>
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
    </div>
  );
}
