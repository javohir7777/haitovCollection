import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types"; // ES6
import brandLogo from "../../assets/login/Logo.svg";
import login from "../../assets/login/login.svg";
import "./login.css";
import { requies } from "../../server";
import { toast } from "react-toastify";
import { ACCESSTOKEN } from "../../constants";
import Cookies from "js-cookie";

const Login = ({ setIsAuth }) => {
  const navigator = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  // const [loading, setLoading] = useState(false);

  // const [errorFields, setErrorFields] = useState({
  //   username: false,
  //   password: false,
  // });

  const handleChange = (e) => {
    // const { name, value } = e.target;
    // setFormData({ ...formData, [name]: value });
    // setErrorFields({ ...errorFields, [name]: false });
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {
        data: { access },
      } = await requies.post("signin/", formData);
      navigator("/");
      setIsAuth(true);
      Cookies.set(ACCESSTOKEN, access);
    } catch (error) {
      toast.error("Error", error.message);
    }
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   let errors = {};
  //   if (!formData.login) errors.username = true;
  //   if (!formData.password) errors.password = true;

  //   if (Object.keys(errors).length > 0) {
  //     setErrorFields(errors);
  //     return;
  //   }
  //   navigator("/");
  //   setIsAuth(true);
  //   localStorage.setItem("isAuth", true);
  // }; 
  return (
    <div className="logo">
      <div className="logo-flex">
        <img className="logo-brand__img" src={brandLogo} alt="logo?" />
        <h2 className="logo--h2">Kirish</h2>
        <form
          className="form-login"
          // onSubmit={handleSubmit}
        >
          <input
            // value={formData.login}
            name="username"
            className="logo-input"
            id="username"
            onChange={handleChange}
            type="text"
            placeholder="username"
            // className={`logo-input ${errorFields.login ? "input-error" : ""}`}
          />
          <input
            // className={`logo-input ${
            //   errorFields.password ? "input-error" : ""
            // }`}
            // value={formData.password}
            name="password"
            className="logo-input"
            onChange={handleChange}
            id="password"
            type="password"
            placeholder="parol"
          />
          <button className="logo-btn" type="submit" onClick={handleSubmit}>
            <img src={login} alt="icon?" />
            Kirish
          </button>
        </form>
      </div>
    </div>
  );
};
Login.propTypes = {
  setIsAuth: PropTypes.func,
};
export default Login;
