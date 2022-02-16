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
import axios from "axios";
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
  const [selectedValue, setSelectedValue] = useState("");
  const [ExpectedYied, setExpectedYied] = useState("");
  const [GrowingMethords, setGrowingMethords] = useState("");
  const [Date1, setDate1] = React.useState(new Date());
  const [Date2, setDate2] = React.useState(new Date());
  const [Date3, setDate3] = React.useState(new Date());
  const [Date4, setDate4] = React.useState(new Date());
  const [Date5, setDate5] = React.useState(new Date());
  const [Date6, setDate6] = React.useState(new Date());

  const handleSelectChange = (selectedValue) => {
    // alert('dsf')
    setGrowingMethords(selectedValue);
    console.log(GrowingMethords);
  };
  const GrowingMethordHandleSelectChange = (selectedValue) => {
    setSelectedValue(selectedValue);
  };
  const ExpectedYiedHandleSelectChange = (selectedValue) => {
    setExpectedYied(selectedValue);
  };
  const handleDateChange = () => {};
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
  const [inputValue, setInputValue] = useState({
    lotID: "",
    batchID: "",
    grower: "",
    seed: "",
    strain: "",
    organicNu: "",
    eYeild: "",
  });
  const { lotID, batchID, grower, seed, strain, organicNu, eYeild } =
    inputValue;

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value, "///");
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(inputValue);
  };
  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }
  function formatDate(date) {
    return [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join("-");
  }
  const ButtonOnClick = () => {
    var date1 = formatDate(Date1);
    var date2 = formatDate(Date2);
    var date3 = formatDate(Date3);
    var date4 = formatDate(Date4);
    var date5 = formatDate(Date5);
    var date6 = formatDate(Date6);
    const Details = JSON.stringify({
      strainName: lotID,
      exitDate: date1,
      amount: 1800,
      grower: grower,
      batchId: batchID,
      status: grower,
      type: selectedValue,
      seed: seed,
      growingMethod: GrowingMethords,
      organicNutrition: organicNu,
      expectedYield: eYeild,
      vegDate: date2,
      flowerDate: date3,
      harvestDate: date4,
      curingDate: date5,
      packageDate: date6,
      shippingDate: date6,
    });

    axios
      .post(`https://staketapi.moodfor.codes/lots`, Details, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => console.log(res))
      .catch((error) => {
        console.error("There was an error!", error);
      });
    console.log(Details);
  };
  const handleDateChangeDate1 = (date) => {
    setDate1(date);
  };
  const handleDateChangeDate2 = (date) => {
    setDate2(date);
  };
  const handleDateChangeDate3 = (date) => {
    setDate3(date);
  };
  const handleDateChangeDate4 = (date) => {
    setDate4(date);
  };
  const handleDateChangeDate5 = (date) => {
    setDate5(date);
  };
  const handleDateChangeDate6 = (date) => {
    setDate6(date);
  };

  return (
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
                onChange={handleChange}
                value={lotID}
                sx={{
                  m: 1,
                  minWidth: 12,
                  minHeight: 68,
                  margin: 0,
                }}
                defaultValue=""
                id="name"
                label="Lot ID"
                placeHolder="Numric"
                name="lotID"
              />
            </div>
            <div>
              <InputFeild
                onChange={handleChange}
                sx={{
                  m: 1,
                  minWidth: 12,
                  minHeight: 68,
                  margin: 0,
                }}
                // defaultValue=""
                value={batchID}
                id="001"
                label="Batch ID"
                placeHolder="Alpha Numeric"
                name="batchID"
              />
            </div>
            <div>
              <InputFeild
                onChange={handleChange}
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
                name="grower"
                value={grower}
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
                onChange={handleChange}
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
                name="seed"
                value={seed}
              />
            </div>
            <div>
              <InputFeild
                onChange={handleChange}
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
                name="strain"
                value={strain}
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
                onChange={handleChange}
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
                name="organicNu"
                value={organicNu}
              />
            </div>
            <div>
              <Box sx={{ display: "flex" }}>
                <InputFeild
                  onChange={handleChange}
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
                  name="eYeild"
                  value={eYeild}
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
              <CustomCalendarDate
                label="Veg Date"
                handleDateChange={handleDateChangeDate1}
                value={Date1}
              />
            </div>
            <div>
              <CustomCalendarDate
                label="Veg Date"
                handleDateChange={handleDateChangeDate2}
                value={Date2}
              />
            </div>
            <div>
              <CustomCalendarDate
                label="Veg Date"
                handleDateChange={handleDateChangeDate3}
                value={Date3}
              />
            </div>
          </div>
          <div>
            <div>
              <CustomCalendarDate
                label="Shipping"
                handleDateChange={handleDateChangeDate4}
                value={Date4}
              />
            </div>
            <div>
              <CustomCalendarDate
                label="Package"
                handleDateChange={handleDateChangeDate5}
                value={Date5}
              />
            </div>
            <div>
              <CustomCalendarDate
                label="Shipping"
                handleDateChange={handleDateChangeDate6}
                value={Date6}
              />
            </div>
          </div>
        </div>
        <div className={classes.StartLotDiv} onClick={ButtonOnClick}>
          <div className={classes.StartLot}>Start Lot</div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}
