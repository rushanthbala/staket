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
import PreviousLotDetails from "./previousLotDetails";
const useStyles = makeStyles(() =>
  createStyles({
    CurrentHead: {
      fontSize: "22px",
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
        fontWeight: "700",
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
      // marginTop:'5rem !important',
      // background:'#7f7f7f !important',
      // height: '70%',
      boxShadow: "none !important",
      border: "none !important",
    },
    root: {
      borderRadius: "16px !important",
      color: "#809FB8",
      height: "52px",
    },
    Select: {
      padding: "9.5px 14px !important",
      minHeight: "32px !important",
      border: "2px solid #d9e1e7 !important",
      background: "#F1F4F9 0% 0% no-repeat padding-box !important",
      display: "flex !important",
      justifyContent: "flex-start",
      alignItems: "center",
      borderRadius: "16px !important",
    },
    TableRoot: {
      border: "1px solid #d9e1e7cc !important",
      background: "#FFFFFF 0% 0% no-repeat padding-box !important",
      borderRadius: "16px !important",
      boxShadow: "none !important",
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
    "DRYING"
  ),
];
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function PreviousCultivationTable() {
  const classes = useStyles();
  const [year, setYear] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [DeatilsOpen, setDeatilsOpen] = React.useState(false);

  const handleChange = (event) => {
    setYear(event.target.value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const DeatilsOpenHandleClose = () => {
    setDeatilsOpen(false);
  };
  const DeatilsOpenHandleOpen = () => {
    setDeatilsOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <TableContainer
      component={Paper}
      sx={{ marginTop: "2rem", padding: "1rem" }}
      classes={{ root: classes.TableRoot }}
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
            sx={{ maxWidth: "1500px", boxShadow: "none !important" }}
            classes={{ root: classes.DialogRoot }}
          >
            <NewLotCreation handleClose={handleClose} />
          </Dialog>
          <Dialog
            open={DeatilsOpen}
            TransitionComponent={Transition}
            keepMounted
            fullScreen
            onClose={DeatilsOpenHandleClose}
            aria-describedby="alert-dialog-slide-description"
            sx={{ maxWidth: "1500px", boxShadow: "none !important" }}
            classes={{ root: classes.DialogRoot }}
          >
            <PreviousLotDetails
              DeatilsOpenHandleClose={DeatilsOpenHandleClose}
            />
            {/* sdsdsd */}
          </Dialog>
          <Button
            variant="contained"
            sx={{
              height: "52px !important",
              borderRadius: "16px",
              backgroundColor: "#3A36DB",
              fontSize: "14px",
            }}
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
              className={classes.root}
            >
              <MenuItem value="">
                <span>Newest</span>
              </MenuItem>
              <MenuItem value={2020}>Oldest</MenuItem>
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
            <TableCell>Strain Name</TableCell>
            <TableCell>Exit Date</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Grower</TableCell>
            <TableCell>Batch ID</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Options</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow
              classes={{ root: classes.BodyRowRoot }}
              key={i}
              sx={{ border: 0 }}
            >
              <TableCell component="th" scope="row">
                {row.lotNo}
              </TableCell>
              <TableCell>{row.StrainName}</TableCell>
              <TableCell>{row.exitDate}</TableCell>
              <TableCell>{row.Amount}</TableCell>
              <TableCell>{row.Grower}</TableCell>
              <TableCell>{row.BatchId}</TableCell>
              <TableCell>
                <Chips data={row.Status} />
              </TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  sx={{
                    border: "2px solid #D9E1E7",
                    borderRadius: "10px",
                    height: "40px !important",
                    width: "72px !important",
                    padding: "10px 14px !important",
                    fontSize: "12px !important",
                    color: "#06152B !important",
                    fontWeight: "300 !important",
                    ":hover": {
                      border: "2px solid #D9E1E7",
                    },
                  }}
                  onClick={DeatilsOpenHandleOpen}
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
