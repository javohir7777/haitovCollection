import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login";
import Add from "./pages/add/Add";
import { useState } from "react";
import Layout from "./components/layout/Layout";
import Done from "./pages/done/Done";
import Receipts from "./pages/receipts/Receipts";
import Orders from "./pages/orders/Orders";
import { ToastContainer } from "react-toastify";
import Cookies from "js-cookie";
import { ACCESSTOKEN } from "./constants";

function App() {
  const isAuthLocal = Boolean(Cookies.get(ACCESSTOKEN));
  const [isAuth, setIsAuth] = useState(isAuthLocal);
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={isAuth ? <Layout /> : <Navigate to="/login" />}
        >
          <Route path="" element={<Add />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/done" element={<Done />} />
          <Route path="/receipts" element={<Receipts />} />
        </Route>
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
