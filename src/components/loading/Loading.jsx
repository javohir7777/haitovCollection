import { useLocation } from "react-router-dom";
import loading from "../../assets/loading/loading.svg";
import { useEffect, useState } from "react";
const Loading = () => {
  const [location, setLocation] = useState("");
  let locationPath = useLocation();
  useEffect(() => {
    if (locationPath.pathname === "/login") {
      setLocation("/login");
    } else {
      setLocation("");
    }
  }, [locationPath.pathname]);
  return (
    <div>
      {location ? (
        <img src={loading} alt="loading?" width={35} height={35} />
      ) : (
        <img src={loading} alt="loading?" width={27} height={27} />
      )}
    </div>
  );
};

export default Loading;
