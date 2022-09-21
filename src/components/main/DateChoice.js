import { DatePicker } from "antd";
import React, { useState } from "react";
const { RangePicker } = DatePicker
function DateChoice(props) {
    const [dates, setDates] = useState(null);
    const [hackValue, setHackValue] = useState(null);
    const [value, setValue] = useState(null);
  
    const onOpenChange = (open) => {
      if (open) {
        setHackValue([null, null]);
        setDates([null, null]);
      } else {
        setHackValue(null);
      }
    };
  
    return (
      <RangePicker
        value={hackValue || value}
        onCalendarChange={(val) => setDates(val)}
        onChange={(val) => setValue(val)}
        onOpenChange={onOpenChange}
      ></RangePicker>
    );
  }
  export default DateChoice