import { InputAdornment, OutlinedInput, MenuItem } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@mui/styles";
import { createStyles } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, FormControl, Select } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Moment from "react-moment";

const useStyles = makeStyles(() =>
  createStyles({
    TrackingTitle: {
      fontWeight: "600 !important",
      color: "#06152B",
      fontSize: "28px",
    },
    TrackingTime: {
      fontWeight: 400,
      color: "#809FB8",
      fontSize: "22px",
    },
    Inputroot: {
      borderRadius: "16px !important",
      color: "#06152B !important",
      height: "60px",
      // border: "2px solid #d9e1e7 !important",
    },
    InputPlaceholder: {
      "&::placeholder": {
        color: "#06152B",
        fontWeight: "400px",
      },
    },
    Select: {
      padding: "9.5px 14px !important",
      minHeight: "36px !important",
      border: "2px solid #d9e1e7 !important",
      background: "#F1F4F9 0% 0% no-repeat padding-box !important",
      display: "flex !important",
      justifyContent: "flex-start",
      alignItems: "center",
      borderRadius: "16px !important",
      // border: "2px solid red !important",
    },
    iconOutlined: {
      color: "#809FB8 !important",
    },
    NotificationsNoneIcon: {
      border: "2px solid #D9E1E7",
      width: "60px",
      height: "60px",
      minWidth: "60px",
      minHeight: "60px",
      borderRadius: "16px",
    },
    root: {
      borderRadius: "16px !important",
      color: "#809FB8",
      // height: "32px",
    },
    Lft: {
      "& > :nth-child(n+1)": {
        margin: "8px",
      },
    },
  })
);

export default function CultivationTracking() {
  const classes = useStyles();
  const [year, setYear] = React.useState("");

  const handleChange = (event) => {
    setYear(event.target.value);
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        //   sx={{
        // }}
      >
        <div>
          <div variant="h6" className={classes.TrackingTitle}>
            Cultivation Tracking
          </div>
          <div variant="subtitle2" className={classes.TrackingTime}>
            <Moment format=" h:mm a">{new Date()}</Moment> at
            <Moment format="  Do MMMM  YYYY">{new Date()}</Moment>
            {/* 12:15 PM at 23rd December 2021 */}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
          className={classes.Lft}
        >
          <div>
            <OutlinedInput
              id="outlined-adornment-weight"
              // onChange={handleChange}
              placeholder="search"
              endAdornment={
                <InputAdornment position="end">
                  <SearchIcon sx={{ color: "#d9e1e7" }} />
                </InputAdornment>
              }
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
              size="small"
              margin="dense"
              style={{ borderRadius: "16px",border: "2px solid #d9e1e7 !important",}}
              classes={{
                root: classes.Inputroot,
                input: classes.InputPlaceholder,
              }}
            />
          </div>
          <FormControl
            sx={{
              m: 1,
              minWidth: 120,
              minHeight: 68,
              margin: 0,
            }}
          >
            <Select
              value={year}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              classes={{
                select: classes.Select,
                iconOutlined: classes.iconOutlined,
              }}
              className={classes.root}
            >
              <MenuItem value="">
                <span>2021</span>
              </MenuItem>
              <MenuItem value={2020}>2020</MenuItem>
              <MenuItem value={2019}>2019</MenuItem>
            </Select>
          </FormControl>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className={classes.NotificationsNoneIcon}
          >
            <NotificationsNoneIcon sx={{ color: "#809FB8" }} />
          </div>
          <Avatar sx={{ bgcolor: "#ccc", width: 60, height: 60 }}>OP</Avatar>
        </div>
      </div>
    </div>
  );
}
