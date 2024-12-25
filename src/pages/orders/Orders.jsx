import { useState } from "react";
// import DateInput from "../../components/date-input/DateInput";
import Table from "../../components/table/Table";

import "./order.css";

const Orders = () => {
  const [data, setData] = useState("");

  const handleDataChange = (e) => {
    const selectedData = e.target.value;
    setData(selectedData);
  };

  return (
    <div className="container-table">
      <div className="table-date">
        {/* <DateInput /> */}
        <input
          type="date"
          id="date"
          className="date-input"
          value={data}
          onChange={handleDataChange}
        />
      </div>
      <Table data={data} />
    </div>
  );
};

export default Orders;
