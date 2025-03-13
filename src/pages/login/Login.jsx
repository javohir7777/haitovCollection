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
import Loading from "../../components/loading/Loading";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Login = ({ setIsAuth }) => {
  const navigator = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const {
        data: { access },
      } = await requies.post("signin/", formData);
      navigator("/");
      setIsAuth(true);
      Cookies.set(ACCESSTOKEN, access);
    } catch (error) {
      toast.error("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="logo">
      <div className="logo-flex">
        <LazyLoadImage
          alt="logo?"
          effect="blur"
          className="logo-brand__img"
          src={brandLogo}
        />
        <h2 className="logo--h2">Kirish</h2>
        <form className="form-login">
          <input
            name="username"
            className="logo-input"
            id="username"
            onChange={handleChange}
            type="text"
            placeholder="username"
          />
          <input
            name="password"
            className="logo-input"
            onChange={handleChange}
            id="password"
            type="password"
            placeholder="parol"
          />
          <button className="logo-btn" type="submit" onClick={handleSubmit}>
            {loading ? <Loading /> : <img src={login} alt="icon?" />}
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
