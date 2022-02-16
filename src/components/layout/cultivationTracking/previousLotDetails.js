import * as React from "react";
import { makeStyles } from "@mui/styles";
import {
  createStyles,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Chips from "../../core/chip";
import Paper from "@mui/material/Paper";

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
export default function PreviousLotDetails(props) {
  const { DeatilsOpenHandleClose } = props;
  const classes = useStyles();
 
  return (
    <div className={classes.Dialog}>
      <div className={classes.CloseDiv}>
        <div className={classes.Close} onClick={DeatilsOpenHandleClose}>
          <CloseIcon />
        </div>
      </div>
      <DialogTitle>{"Previous Lot Details"}</DialogTitle>
      <DialogContent className={classes.DialogContent}>
        <DialogContentText id="alert-dialog-slide-description">
          <TableContainer
            component={Paper}
            sx={{ marginTop: "2rem", padding: "1rem" }}
          >
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
                {rows.map((row) => (
                  <TableRow
                    classes={{ root: classes.BodyRowRoot }}
                    key={row.lotNo}
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
                          color: "#D9E1E7",
                          border: "2px solid #D9E1E7",
                          borderRadius: "10px",
                          ":hover": {
                            border: "2px solid #D9E1E7",
                          },
                        }}
                        //   onClick={DeatilsOpenHandleOpen}
                      >
                        Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContentText>
      </DialogContent>
    </div>
  );
}
