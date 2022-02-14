import * as React from "react";
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
import { FormControl } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import InputFeild from "../../core/inputFeild";
import Selects from "../../core/select";
// import CustomCalendarDate from "../../core/datePicker";
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
      cursor:'pointer'
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
          <div className={classes.LotStart}>
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
          </div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Week 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className={classes.TableCol}>
                <div>
                  <div>
                    <InputFeild
                      sx={{
                        m: 1,
                        minWidth: 12,
                        minHeight: 68,
                        margin: 0,
                      }}
                      defaultValue=""
                      id="001"
                      label="Lot ID"
                      placeHolder="Numric"
                    />
                  </div>
                  <div>
                    <InputFeild
                      sx={{
                        m: 1,
                        minWidth: 12,
                        minHeight: 68,
                        margin: 0,
                      }}
                      defaultValue=""
                      id="001"
                      label="Batch ID"
                      placeHolder="Alpha Numeric"
                    />
                  </div>
                  <div>
                    <InputFeild
                      sx={{
                        m: 1,
                        minWidth: 12,
                        minHeight: 68,
                        margin: 0,
                      }}
                      defaultValue=""
                      id="001"
                      label="Grower"
                      placeHolder="String Content"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <Selects label="Type" item="Hybrid" />
                  </div>
                  <div>
                    <InputFeild
                      sx={{
                        m: 1,
                        minWidth: 12,
                        minHeight: 68,
                        margin: 0,
                      }}
                      defaultValue=""
                      id="001"
                      label="Seed"
                      placeHolder="String Content"
                    />
                  </div>
                  <div>
                    <InputFeild
                      sx={{
                        m: 1,
                        minWidth: 12,
                        minHeight: 68,
                        margin: 0,
                      }}
                      defaultValue=""
                      id="001"
                      label="Strain"
                      placeHolder="String Content"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <Selects label="Growing Methord" item="Hybrid" />
                  </div>
                  <div>
                    <div className={classes.Para}></div>
                    <InputFeild
                      sx={{
                        m: 1,
                        minWidth: 12,
                        minHeight: 68,
                        margin: 0,
                      }}
                      defaultValue=""
                      id="001"
                      label="Organic Nutrition"
                      placeHolder="Warm Cashing"
                    />
                  </div>
                  <div>
                    <Box sx={{ display: "flex" }}>
                      <InputFeild
                        sx={{
                          m: 1,
                          minWidth: 12,
                          minHeight: 68,
                          margin: 0,
                        }}
                        defaultValue=""
                        id="001"
                        label="Empected Yield"
                        placeHolder="Warm Cashing"
                      />
                      <FormControl
                        sx={{
                          m: 1,
                          minWidth: "50%",
                          minHeight: 68,
                          margin: 0,
                          display: "flex",
                          justyContent: "center",
                        }}
                      >
                        <div style={{ marginTop: "34px" }}>
                          <Selects item="Mes" label="" />
                        </div>
                      </FormControl>
                    </Box>
                  </div>
                </div>
                <div>
                  <div>
                    {/* <CustomCalendarDate/> */}
                    <Selects label="veg Data" item="Date" />
                  </div>
                  <div>
                    <Selects label="Flower Data" item="Date" />
                  </div>
                  <div>
                    <Selects label="Harvest Date" item="Date" />
                  </div>
                </div>
                <div>
                  <div>
                    <Selects label="Flower Data" item="Date" />
                  </div>
                  <div>
                    <Selects label="Package" item="Date" />
                  </div>
                  <div>
                    <Selects label="Shipping" item="Date" />
                  </div>
                </div>
              </div>
              <div className={classes.StartLotDiv}>
                <div className={classes.StartLot}>Start Lot</div>
              </div>
            </AccordionDetails>
          </Accordion>

          <br />
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Week 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <br />
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Week 3</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <br />
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Week 4</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <br />
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Week 5</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <br />
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Week 6</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </DialogContentText>
      </DialogContent>
    </div>
  );
}
