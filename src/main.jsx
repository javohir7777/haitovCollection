// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import "react-lazy-load-image-component/src/effects/blur.css";
import "react-toastify/dist/ReactToastify.css";
import "./fonts/stylesheet.css";
import "antd/dist/reset.css";
import "./index.css";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <App />
  // </StrictMode>
);
