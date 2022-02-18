import * as React from "react";
import { makeStyles } from "@mui/styles";
import {
  createStyles,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";
import Week1 from "./newLotCreation/week1";
import Week2 from "./newLotCreation/week2";
import Germination from "./newLotCreation/germination";
import Vegitative from "./newLotCreation/vegitative";

const useStyles = makeStyles(() =>
  createStyles({
    Dialog: {
      // padding: "3rem",
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
      textAlign: "left",
    },
    LotStart: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "4rem",
    },
    MainDiv: {
      // display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      margin: "10px",
    },
    DialogContent: {
      padding: "3rem",
      margin: "0rem 5rem",
    },
    TableCol: {
      display: "flex",
      // flexDirection: "Column",
      margin: "0 auto",
      justifyContent: "space-between",
    },
    Status: {
      color: "#000000 !important",
      // padding: "20px",
      letterSpacing: "0.26px",
      textAlign: "center",
    },
    StatusDiv: {
      width: "66px",
      height: "28px",
      background: "#C7D51A66 0% 0% no-repeat padding-box",
      borderRadius: "16px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "10px",
      COLOR: "#1AD598",
    },

    Close: {
      // margin: "10px",
      width: "96px",
      height: "94px",
      // border: "3px solid red",
      borderRadius: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "12px",
      background: "#ffffff",
      cursor: "pointer",
    },
    CloseDiv: {
      display: "flex",
      justifyContent: "flex-end",
    },
    Select: {
      borderRadius: "8px !important",
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
  })
);

export default function NewLotCreation(props) {
  const { handleClose } = props;
  const classes = useStyles();
  // const [year, setYear] = React.useState("");
  // const handleChange = (event) => {
  //   setYear(event.target.value);
  // };
  return (
    <div className={classes.Dialog}>
      <div className={classes.CloseDiv}>
        <div className={classes.Close} onClick={handleClose}>
          <CloseIcon />
        </div>
      </div>
      <DialogTitle>{"New Lot Creation"}</DialogTitle>
      <DialogContent className={classes.DialogContent}>
        <DialogContentText id="alert-dialog-slide-description">
          {/* <div className={classes.LotStart}>
            <div className={classes.MainDiv}>
              <div className={classes.Para}>Lot Id</div>
              <div className={classes.ColDiv}>#131942</div>
            </div>
            <div className={classes.MainDiv}>
              <div className={classes.Para}>Strain</div>
              <div className={classes.ColDiv}>Pink Kush</div>
            </div>
            <div className={classes.MainDiv}>
              <div className={classes.Para}>Exit Date</div>
              <div className={classes.ColDiv}>01/10/2022</div>
            </div>
            <div className={classes.MainDiv}>
              <div className={classes.Para}>Expected Weight</div>
              <div className={classes.ColDiv}>55kg</div>
            </div>
            <div className={classes.MainDiv}>
              <div className={classes.Para}>Grower</div>
              <div className={classes.ColDiv}>Heather K</div>
            </div>
            <div className={classes.MainDiv}>
              <div className={classes.Para}>Batch Number</div>
              <div className={classes.ColDiv}>#131942</div>
            </div>
            <div className={classes.MainDiv}>
              <div className={classes.Status}>Status</div>
              <div className={classes.StatusDiv}>SOLD</div>
            </div>
          </div> */}
          <Germination />
          <br />
          {/* <Week1 /> */}
          <br />
          <Vegitative />
          <br />
          <Week2 />
          <br />
          <Week2 />
          <br />
          <Week2 />
          <br />
          <Week2 />
        </DialogContentText>
      </DialogContent>
    </div>
  );
}
