import { useState } from "react";
import "./DateInput.css";

const DateInput = () => {
  const [date, setDate] = useState("");

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
  };
  // console.log(date);

  return (
    <input
      type="date"
      id="date"
      className="date-input"
      value={date}
      onChange={handleDateChange}
    />
  );
};

export default DateInput;
