import React, { useState } from 'react';
import { BsFillCalendarFill } from "react-icons/bs";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import "../datepicker.css";
// import { BsCalender } from "react-icons/bs"
const CheckIn = () => {
  const [startDate, setStartDate] = useState(false)
  return (
    <div className='relative flex items-center justify-end h-full'>
      {/* ICONS */}
      <div className='absolute z-10 pr-8 text-accent text-base'>
        <div>
          <BsFillCalendarFill/>
        </div>
      </div>
      <DatePicker className='w-full h-full'
        selected={startDate}
        placeholderText="Check in"
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
};
export default CheckIn;
