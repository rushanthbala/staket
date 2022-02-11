import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";
import { createStyles } from "@material-ui/core";
import { Box, MenuItem } from "@material-ui/core";
import Button from "@mui/material/Button";
import Chips from "../../core/chip";
import AddIcon from "@mui/icons-material/Add";
import { FormControl, Select } from "@mui/material";
import NewLotCreation from "./newLotCreation";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
const useStyles = makeStyles(() =>
  createStyles({
    CurrentHead: {
      fontSize: "26px",
      color: "#06152B",
      margin: "0 !important",
      padding: "10px",
      fontWeight: 500,
    },
    CurrentRed: {
      color: "#F00000",
      maxWidth: "324px",
      fontSize: "12px",
      paddingLeft: "20px",
    },
    HeadRowRoot: {
      "& .MuiTableCell-head": {
        color: "#809FB8",
      },
    },
    BodyRowRoot: {
      "& .MuiTableCell-body": {
        color: "#06152B !important",
      },
    },
    More: {
      backgroundColor: "#CECDD3",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "0px 10px",
      width: "94px",
      height: "52px",
      borderRadius: "16px",
    },
    DialogRoot: {
      maxWidth: "1500px !important",
      margin: "0 auto !important",
    },
  })
);
function createData(
  lotNo,
  StrainName,
  exitDate,
  Amount,
  Grower,
  BatchId,
  Status,
  options
) {
  return {
    lotNo,
    StrainName,
    exitDate,
    Amount,
    Grower,
    BatchId,
    Status,
    options,
  };
}
const rows = [
  createData(
    "#214314",
    "Pink Kush",
    "01/10/2022",
    "55kg",
    "Heather K.",
    "003145",
    "DRYING"
  ),
  createData(
    "#215613",
    "Meat Breathe ",
    "01/21/2020 ",
    "35kg",
    "Christian W.",
    "003145",
    "DRYING"
  ),
  createData(
    "#214314",
    "Tropic Runtz",
    "01/29/2022",
    "42kg",
    " Erika D.",
    "004100",
    "DRYING"
  ),
  createData(
    "#214314",
    "Pink Kush",
    "01/10/2022",
    "55kg",
    "Heather K.",
    "003145",
    "DRYING"
  ),
  createData(
    "#215613",
    "Meat Breathe ",
    "01/21/2020 ",
    "35kg",
    "Christian W.",
    "003145",
    "DRYING"
  ),
  createData(
    "#214314",
    "Tropic Runtz",
    "01/29/2022",
    "42kg",
    " Erika D.",
    "004100",
    "DRYINGDRYING"
  ),
];
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function PreviousCultivationTable() {
  const classes = useStyles();
  const [year, setYear] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setYear(event.target.value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <TableContainer
      component={Paper}
      sx={{ marginTop: "2rem", padding: "1rem" }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <p className={classes.CurrentHead}>Previous Cultivation</p>
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-start" }}>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            fullScreen
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
            sx={{ maxWidth: "1600px" }}
            classes={{ root: classes.DialogRoot }}
          >
            <NewLotCreation />
          </Dialog>

          <Button
            variant="contained"
            sx={{ height: "52px !important", borderRadius: "16px" ,backgroundColor: "#3A36DB" }}
            startIcon={<AddIcon />}
            onClick={handleClickOpen}
          >
            Start New Lot
          </Button>

          <div className={classes.More}>More</div>
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
                <span>Newest</span>
              </MenuItem>
              {/* <MenuItem value={2020}>2020</MenuItem>
              <MenuItem value={2019}>2019</MenuItem> */}
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Table
        size="small"
        aria-label="a dense table"
        sx={{
          [`& .${tableCellClasses.root}`]: {
            borderBottom: "none",
          },
        }}
      >
        <TableHead>
          <TableRow classes={{ root: classes.HeadRowRoot }}>
            <TableCell>Lot No.</TableCell>
            <TableCell align="center">Strain Name</TableCell>
            <TableCell align="center">Exit Date</TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="center">Grower</TableCell>
            <TableCell align="center">Batch ID</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Options</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              classes={{ root: classes.BodyRowRoot }}
              key={row.lotNo}
              sx={{ border: 0 }}
            >
              <TableCell component="th" scope="row">
                {row.lotNo}
              </TableCell>
              <TableCell align="left">{row.StrainName}</TableCell>
              <TableCell align="center">{row.exitDate}</TableCell>
              <TableCell align="center">{row.Amount}</TableCell>
              <TableCell align="center">{row.Grower}</TableCell>
              <TableCell align="center">{row.BatchId}</TableCell>
              <TableCell align="center">
                <Chips data={row.Status} />
              </TableCell>
              <TableCell align="center">
                <Button
                  variant="outlined"
                  sx={{
                    color: "#D9E1E7",
                    border: "2px solid #D9E1E7",
                    borderRadius: "10px",
                  }}
                >
                  Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
