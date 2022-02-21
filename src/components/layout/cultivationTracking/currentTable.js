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
import { Box } from "@material-ui/core";
import Button from "@mui/material/Button";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Chips from "../../core/chip";
import { ReactComponent as Icon } from "../../../assect/svg/ICON.svg";
import axios from "axios";
import { useState } from "react";
import Moment from "react-moment";

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
      //   display: "flex",
      //   alignItems: "flex-end",
      //   margin: "1.5rem 0 0 0",
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
    TableRoot: {
      background: "#FFFFFF 0% 0% no-repeat padding-box !important",
      border: "1px solid #D9E1E7CC !important",
      borderRadius: "16px !important",
      boxShadow: "none !important",
    },
  })
);
// function createData(
//   lotNo,
//   StrainName,
//   exitDate,
//   Amount,
//   Grower,
//   BatchId,
//   Status,
//   options
// ) {
//   return {
//     lotNo,
//     StrainName,
//     exitDate,
//     Amount,
//     Grower,
//     BatchId,
//     Status,
//     options,
//   };
// }
// const rows = [
//   createData(
//     "#214314",
//     "Pink Kush",
//     "01/10/2022",
//     "55kg",
//     "Heather K.",
//     "003145",
//     "DRYING"
//   ),
//   createData(
//     "#215613",
//     "Meat Breathe ",
//     "01/21/2020 ",
//     "35kg",
//     "Christian W.",
//     "003145",
//     "DRYING"
//   ),
//   createData(
//     "#214314",
//     "Tropic Runtz",
//     "01/29/2022",
//     "42kg",
//     " Erika D.",
//     "004100",
//     "DRYING"
//   ),
//   createData(
//     "#214314",
//     "Pink Kush",
//     "01/10/2022",
//     "55kg",
//     "Heather K.",
//     "003145",
//     "DRYING"
//   ),
//   createData(
//     "#215613",
//     "Meat Breathe ",
//     "01/21/2020 ",
//     "35kg",
//     "Christian W.",
//     "003145",
//     "DRYING"
//   ),
//   createData(
//     "#214314",
//     "Tropic Runtz",
//     "01/29/2022",
//     "42kg",
//     " Erika D.",
//     "004100",
//     "DRYING"
//   ),
// ];

export default function CurrentTable() {
  const classes = useStyles();
  const [rows, setRows] = useState([]);

  React.useEffect(() => {
    axios
      .get(`https://staketapi.moodfor.codes/lots`)
      .then((res) => {
        const data = res.data;
        // console.log(res.data, "/=");
        setRows(data);
      })
      .catch((err) => console.log(err, "/=error"));
  }, []);
  // console.log(new Date(), "///");
  return (
    <TableContainer
      component={Paper}
      sx={{ marginTop: "2rem", padding: "1rem" }}
      classes={{ root: classes.TableRoot }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex" }}>
          <p className={classes.CurrentHead}>Current Cultivation</p>
        </Box>
        <div>
          <Button
            variant="contained"
            startIcon={<Icon style={{ fill: "#ffff" }} />}
            sx={{
              backgroundColor: "#3A36DB",
              marginRight: "1rem",
              height: "52px !important",
              borderRadius: "16px",
            }}
          >
            Generate Report
          </Button>
          <MoreHorizIcon style={{ color: "#D9E1E7" }} />
        </div>
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
          {rows &&
            rows.map((row, i) => (
              <TableRow
                classes={{ root: classes.BodyRowRoot }}
                key={i}
                sx={{ border: 0 }}
              >
                <TableCell component="th" scope="row">
                  {row.lotId}
                </TableCell>
                <TableCell>{row.strainName}</TableCell>
                <TableCell>
                  <Moment format="YYYY-MM-DD">{row.exitDate}</Moment>
                </TableCell>
                <TableCell>{row.amount} </TableCell>
                <TableCell>{row.grower}</TableCell>
                <TableCell>{row.batchId}</TableCell>
                <TableCell>
                  <Chips data={row.status} />
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
                    // onClick={DeatilsOpenHandleOpen}
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
