import React, { useState } from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FormControl } from "@mui/material";
import InputFeild from "../../../core/inputFeild";
import Selects from "../../../core/select";
import CustomCalendarDate from "../../../core/datePicker";
import { Box } from "@material-ui/core";
import { makeStyles } from "@mui/styles";
import { createStyles } from "@material-ui/core";
const useStyles = makeStyles(() =>
  createStyles({
    TableCol: {
      display: "flex",
      // flexDirection: "Column",
      margin: "0 auto",
      justifyContent: "space-between",
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

export default function Week1() {
  const classes = useStyles();

  const [selectedValue, setSelectedValue] = useState("");
  const [ExpectedYied, setExpectedYied] = useState("");
  const [GrowingMethords, setGrowingMethords] = useState("");
  const handleSelectChange = (selectedValue) => {
    setGrowingMethords(selectedValue);
  };
  const GrowingMethordHandleSelectChange = (selectedValue) => {
    setSelectedValue(selectedValue);
  };
  const ExpectedYiedHandleSelectChange = (selectedValue) => {
    setExpectedYied(selectedValue);
  };
  console.log(selectedValue, ExpectedYied, GrowingMethords);
  const GrowingMethord = [
    {
      id: "Hybrid",
      name: "Hybrid",
    },
    {
      id: "Indica",
      name: "Indica",
    },
    {
      id: "Sativa",
      name: "Sativa",
    },
  ];
  const Mes = [
    {
      id: "Hybrid",
      name: "Hybrid",
    },
    {
      id: "Indica",
      name: "Indica",
    },
    {
      id: "Sativa",
      name: "Sativa",
    },
  ];
  const CannabisType = [
    {
      id: "Hybrid",
      name: "Hybrid",
    },
    {
      id: "Indica",
      name: "Indica",
    },
    {
      id: "Sativa",
      name: "Sativa",
    },
  ];
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Week 4</Typography>
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
                label="Are You On Track"
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
              <Selects
                label="Type"
                item="Hybrid"
                arrayOfData={CannabisType}
                onSelectChange={handleSelectChange}
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
              <Selects
                label="Growing Methord"
                item="Hybrid"
                arrayOfData={GrowingMethord}
                onSelectChange={GrowingMethordHandleSelectChange}
              />
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
                placeHolder="Worm Cashing"
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
                  <div style={{ marginTop: "22px" }}>
                    <Selects
                      item="Mes"
                      label=""
                      arrayOfData={Mes}
                      onSelectChange={ExpectedYiedHandleSelectChange}
                    />
                  </div>
                </FormControl>
              </Box>
            </div>
          </div>
          <div>
            <div>
              <CustomCalendarDate label="Veg Date" />
            </div>
            <div>
              <CustomCalendarDate label="Veg Date" />
            </div>
            <div>
              <CustomCalendarDate label="Veg Date" />
            </div>
          </div>
          <div>
            <div>
              <CustomCalendarDate label="Shipping" />
            </div>
            <div>
              <CustomCalendarDate label="Package" />
            </div>
            <div>
              <CustomCalendarDate label="Shipping" />
            </div>
          </div>
        </div>
        <div className={classes.StartLotDiv}>
          <div className={classes.StartLot}>Start Lot</div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}
