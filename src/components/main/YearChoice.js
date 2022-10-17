import { DatePicker, Space } from "antd";
import React, { useState } from "react";

const { RangePicker } = DatePicker

function YearChoice(props) {

    const onChange = (date, dateString) => {
        console.log(dateString);
        props.setDate(dateString);
      };
  
    return (
        <DatePicker onChange={onChange} picker="year" />
    );
  }
  export default YearChoice