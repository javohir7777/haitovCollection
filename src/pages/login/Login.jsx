import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types"; // ES6
import brandLogo from "../../assets/login/Logo.svg";
import login from "../../assets/login/login.svg";
import "./login.css";

const Login = ({ setIsAuth }) => {
  const [formData, setFormData] = useState({ login: "", password: "" });
  const [errorFields, setErrorFields] = useState({
    login: false,
    password: false,
  });
  const navigator = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrorFields({ ...errorFields, [name]: false }); // Xatolikni tozalash
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};
    if (!formData.login) errors.login = true;
    if (!formData.password) errors.password = true;

    if (Object.keys(errors).length > 0) {
      setErrorFields(errors);
      return;
    }
    navigator("/");
    setIsAuth(true);
    localStorage.setItem("isAuth", true);
  };
  return (
    <div className="logo">
      <div className="logo-flex">
        <img src={brandLogo} alt="logo?" />
        <h2 className="logo--h2">Kirish</h2>
        <form className="form-login" onSubmit={handleSubmit}>
          <input
            value={formData.login}
            onChange={handleChange}
            className={`logo-input ${errorFields.login ? "input-error" : ""}`}
            type="text"
            placeholder="login"
            name="login"
          />
          <input
            className={`logo-input ${
              errorFields.password ? "input-error" : ""
            }`}
            value={formData.password}
            onChange={handleChange}
            type="password"
            placeholder="parol"
            name="password"
          />
          <button className="logo-btn" type="submit">
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
