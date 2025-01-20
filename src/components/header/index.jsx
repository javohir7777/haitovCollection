import { useLocation } from "react-router-dom";
import "./header.css";
const Header = () => {
  let url = useLocation().pathname.split("/")[1];
  let urlText = "";
  if (url === "") {
    urlText = `Mijoz qo'shish`;
  } else if (url === "orders") {
    urlText = `Buyurtmalar`;
  } else if (url === "done") {
    urlText = `Bajarilgan buyurtmalar`;
  } else if (url === "receipts") {
    urlText = `Receipt`;
  }

  return (
    <header>
      <div className="header-text">{urlText}</div>
    </header>
  );
};

export default Header;
