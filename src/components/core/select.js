import React from "react";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";
import { makeStyles } from "@mui/styles";
import {
  Box,
  createStyles,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { MenuItem, FormControl, Select } from "@mui/material";
const useStyles = makeStyles(() =>
  createStyles({
    Para: {
      color: "#809FB8",
      letterSpacing: "0.26px",
      textAlign: "left",
    },
    Select: {
      borderRadius: "8px !important",
    },
  })
);
export default function Selects(props) {
  const { item, label } = props;
  const classes = useStyles();
  const [year, setYear] = React.useState("");
  const handleChange = (event) => {
    setYear(event.target.value);
  };
  return (
    <div>
      <div className={classes.Para}>{label}</div>
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
        >
          <MenuItem value="">
            <span style={{ color: "#809FB8" }}>{item}</span>
          </MenuItem>
          <MenuItem style={{ color: "#809FB8" }} value={2020}>
            {item}
          </MenuItem>
          <MenuItem style={{ color: "#809FB8" }} value={2019}>
            {item}
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
