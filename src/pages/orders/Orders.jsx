import DateInput from "../../components/date-input/DateInput";
import Table from "../../components/table/Table";

import "./order.css";

const Orders = () => {
  return (
    <div className="container-table">
      <div className="table-date">
        <DateInput />
      </div>
      <Table />
    </div>
  );
};

export default Orders;
