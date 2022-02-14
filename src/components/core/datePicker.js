// App.js
import "date-fns";
import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

function filterWeekends(date) {
  // Return false if Saturday or Sunday
  return date.getDay() === 0 || date.getDay() === 6;
}

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    console.log(date);
    setSelectedDate(date);
  };

  return (
    <div className="App">
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          label="Material Date Picker"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          shouldDisableDate={filterWeekends}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
}

export default App;
