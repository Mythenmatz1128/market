import { DatePicker, Space } from "antd";
import React, { useState } from "react";

const { RangePicker } = DatePicker

function MonthChoice(props) {

    const onChange = (date, dateString) => {
        console.log(dateString);
        props.setDate(dateString);
      };
  
    return (
        <RangePicker onChange={onChange} picker="month" />
    );
  }
  export default MonthChoice