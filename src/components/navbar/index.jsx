import { Fragment } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { ACCESSTOKEN } from "../../constants";

import navLogo from "../../assets/nav/navLogo.svg";
import lagout from "../../assets/nav/lagout.svg";
import "./navbar.css";
const Navbar = () => {
  const navigate = useNavigate();
  const logout = () => {
    Cookies.remove(ACCESSTOKEN);
    navigate("/login");
  };
  return (
    <Fragment>
      <div className="nav-menus">
        <div className="nav-brand">
          <img src={navLogo} alt="logo?" />
        </div>

        <div className="nav-hr"></div>
        <ul className="nav-menu">
          <NavLink className="nav-link" to="/">
            <svg
              width="57"
              height="34"
              viewBox="0 0 57 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="icon-path"
                d="M16.8884 13.4167H12.2117V8.33334C12.2117 6.93542 11.1594 5.79167 9.87335 5.79167C8.58727 5.79167 7.53502 6.93542 7.53502 8.33334V13.4167H2.85835C1.57227 13.4167 0.52002 14.5604 0.52002 15.9583C0.52002 17.3563 1.57227 18.5 2.85835 18.5H7.53502V23.5833C7.53502 24.9813 8.58727 26.125 9.87335 26.125C11.1594 26.125 12.2117 24.9813 12.2117 23.5833V18.5H16.8884C18.1744 18.5 19.2267 17.3563 19.2267 15.9583C19.2267 14.5604 18.1744 13.4167 16.8884 13.4167ZM42.61 15.9583C46.4917 15.9583 49.6016 12.5525 49.6016 8.33334C49.6016 4.11417 46.4917 0.708336 42.61 0.708336C41.8618 0.708336 41.1369 0.835419 40.4821 1.06417C41.815 3.12292 42.5866 5.61375 42.5866 8.33334C42.5866 11.0529 41.7916 13.5183 40.4821 15.6025C41.1369 15.8313 41.8618 15.9583 42.61 15.9583ZM30.9184 15.9583C34.8 15.9583 37.91 12.5525 37.91 8.33334C37.91 4.11417 34.8 0.708336 30.9184 0.708336C27.0367 0.708336 23.9034 4.11417 23.9034 8.33334C23.9034 12.5525 27.0367 15.9583 30.9184 15.9583ZM30.9184 21.0417C26.2417 21.0417 16.8884 23.5833 16.8884 28.6667V31.2083C16.8884 32.6063 17.9406 33.75 19.2267 33.75H42.61C43.8961 33.75 44.9484 32.6063 44.9484 31.2083V28.6667C44.9484 23.5833 35.595 21.0417 30.9184 21.0417ZM46.3981 21.4483C48.3389 23.3038 49.625 25.6675 49.625 28.6667V32.4792C49.625 32.9113 49.5783 33.3433 49.5081 33.75H55.4709C56.1256 33.75 56.64 33.1908 56.64 32.4792V28.6667C56.64 24.7525 51.0982 22.3379 46.3981 21.4483Z"
                fill="#FFAA00"
              />
            </svg>
            <span className="link-span">Mijoz qo{"'"}shish</span>
          </NavLink>
          <NavLink className="nav-link" to="/orders">
            <svg
              width="38"
              height="40"
              viewBox="0 0 38 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="icon-path"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M31.8 21.9047H26.28C23.2311 21.9047 20.76 24.4628 20.76 27.619V33.3333C20.76 36.4895 23.2311 39.0476 26.28 39.0476H31.8C34.8489 39.0476 37.32 36.4895 37.32 33.3333V27.619C37.32 24.4628 34.8489 21.9047 31.8 21.9047ZM11.56 21.9047H6.04002C2.99114 21.9047 0.52002 24.4628 0.52002 27.619V33.3333C0.52002 36.4895 2.99114 39.0476 6.04002 39.0476H11.56C14.6089 39.0476 17.08 36.4895 17.08 33.3333V27.619C17.08 24.4628 14.6089 21.9047 11.56 21.9047ZM31.8 0.952356H26.28C23.2311 0.952356 20.76 3.51045 20.76 6.66664V12.3809C20.76 15.5371 23.2311 18.0952 26.28 18.0952H31.8C34.8489 18.0952 37.32 15.5371 37.32 12.3809V6.66664C37.32 3.51045 34.8489 0.952356 31.8 0.952356ZM17.08 6.66664V12.3809C17.08 15.5371 14.6089 18.0952 11.56 18.0952H6.04002C2.99114 18.0952 0.52002 15.5371 0.52002 12.3809V6.66664C0.52002 3.51045 2.99114 0.952356 6.04002 0.952356H11.56C14.6089 0.952356 17.08 3.51045 17.08 6.66664Z"
                fill="#FFAA00"
              />
            </svg>
            <span className="link-span">Buyurtmalar</span>
          </NavLink>
          <NavLink className="nav-link" to="/done">
            <svg
              width="36"
              height="40"
              viewBox="0 0 36 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="icon-path"
                d="M4.31185 32.783V4.37106H25.4225V28.2323L29.4447 24.6213V2.18553C29.4447 0.978723 28.545 0 27.4348 0H2.30117C1.1909 0 0.29126 0.978723 0.29126 2.18553V34.9677C0.29126 36.1745 1.1909 37.1532 2.30117 37.1532H19.8461L17.0039 32.783H4.31185Z"
                fill="#FFAA00"
              />
              <path
                className="icon-path"
                d="M35.234 23.497C34.8637 23.1174 34.2944 23.0996 33.9045 23.4485L24.6826 31.7328L18.537 27.7251C18.1291 27.4596 17.6068 27.5387 17.2819 27.92C16.9593 28.2979 16.9241 28.8706 17.1989 29.2928L23.8589 39.537C24.0452 39.8238 24.3483 39.9957 24.6709 39.9991C24.674 39.9991 24.6771 39.9991 24.6802 39.9991C24.9997 39.9991 25.3011 39.8349 25.4906 39.5523L35.3562 24.937C35.6537 24.4936 35.6028 23.8766 35.234 23.497Z"
                fill="#FFAA00"
              />
              <path
                className="icon-path"
                d="M20.9 7.64936H8.8351C7.72484 7.64936 6.8252 8.62808 6.8252 9.83489C6.8252 11.0417 7.72484 12.0204 8.8351 12.0204H20.8992C22.0095 12.0204 22.9084 11.0417 22.9084 9.83489C22.9084 8.62808 22.0103 7.64936 20.9 7.64936Z"
                fill="#FFAA00"
              />
              <path
                className="icon-path"
                d="M20.9 14.2051H8.8351C7.72484 14.2051 6.8252 15.1838 6.8252 16.3906C6.8252 17.5974 7.72484 18.5762 8.8351 18.5762H20.8992C22.0095 18.5762 22.9084 17.5983 22.9084 16.3906C22.9107 15.1838 22.0103 14.2051 20.9 14.2051Z"
                fill="#FFAA00"
              />
              <path
                className="icon-path"
                d="M20.9 20.7617H8.8351C7.72484 20.7617 6.8252 21.7404 6.8252 22.9472C6.8252 24.154 7.72484 25.1328 8.8351 25.1328H20.8992C22.0095 25.1328 22.9084 24.154 22.9084 22.9472C22.9107 21.7404 22.0103 20.7617 20.9 20.7617Z"
                fill="#FFAA00"
              />
            </svg>
            <span className="link-span">Bajarilganlar</span>
          </NavLink>
          <NavLink className="nav-link" to="/receipts">
            <svg
              width="34"
              height="44"
              viewBox="0 0 34 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="icon-path"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.7136 7.57324C13.0305 5.56803 12.4192 3.54492 11.8979 1.486C13.8323 -0.626628 21.3004 -0.347332 23.4505 1.45378L21.4622 6.16243C22.5336 4.76237 22.8932 4.18945 23.5296 3.40885C23.7993 3.58431 24.051 3.78125 24.2883 3.99609C24.8528 4.50456 25.3598 5.07031 25.4605 5.85449C25.5252 6.36295 25.3814 6.88216 24.9247 7.41211L20.3619 12.7044C19.7758 12.6077 19.2005 12.4681 18.6432 12.2712C18.9021 11.666 19.2149 10.9964 19.4738 10.3913L17.8126 12.1745C16.0831 11.8092 14.688 12.0277 13.3936 12.7116L8.7625 7.17936C8.48923 6.84993 8.36339 6.52051 8.36339 6.19108C8.36698 4.85547 10.3661 3.69889 11.4196 3.26204L13.7136 7.57324ZM19.6464 17.5671L18.7439 13.4528C22.6128 14.1689 28.8152 22.0072 30.8179 25.57C31.8391 27.389 32.738 29.3942 33.4715 31.6322C34.9313 37.0534 33.5254 42.1237 27.6214 43.3053C23.9216 44.0465 17.0216 44.0967 13.1312 43.8962C8.94947 43.6813 2.47379 43.6885 0.78386 39.4095C-1.9452 32.5059 3.05628 24.2809 7.6155 19.2464C8.21597 18.584 8.83441 17.9681 9.47802 17.3952C11.1356 15.9414 12.9262 14.2191 15.0584 13.4993L12.9945 17.3236L15.9897 13.3704H17.5681L19.6464 17.5671ZM17.7227 20.9437V21.6706C18.4958 21.7529 19.161 21.9105 19.7147 22.1468C20.2684 22.3867 20.7502 22.7448 21.1637 23.2282C21.4909 23.597 21.7426 23.9766 21.9188 24.3633C22.095 24.7536 22.1849 25.1081 22.1849 25.4339C22.1849 25.7956 22.0518 26.1071 21.7894 26.3685C21.5233 26.6299 21.2033 26.7624 20.8257 26.7624C20.1138 26.7624 19.6536 26.3792 19.445 25.6165C19.2041 24.7178 18.6324 24.1162 17.7191 23.8226V28.3164C18.6144 28.5599 19.3336 28.7855 19.8621 28.986C20.3943 29.1865 20.8725 29.4766 21.2896 29.8597C21.739 30.2536 22.0842 30.7298 22.3287 31.2777C22.5696 31.8291 22.6919 32.4307 22.6919 33.0859C22.6919 33.9059 22.5013 34.6758 22.1094 35.3883C21.721 36.1081 21.1493 36.6881 20.3979 37.1465C19.6428 37.6012 18.7511 37.8698 17.7155 37.9521V38.6862C17.7155 39.1087 17.6724 39.4202 17.5897 39.6136C17.507 39.807 17.3272 39.9036 17.0432 39.9036C16.7843 39.9036 16.6009 39.8249 16.4966 39.6673C16.3924 39.5098 16.342 39.2627 16.342 38.9297V37.9701C15.4971 37.877 14.7564 37.68 14.1235 37.3756C13.4907 37.0749 12.9622 36.6989 12.5379 36.2477C12.1172 35.793 11.8008 35.3275 11.603 34.8441C11.3981 34.3571 11.301 33.8773 11.301 33.4118C11.301 33.068 11.434 32.7565 11.7073 32.4808C11.977 32.2051 12.315 32.0654 12.7177 32.0654C13.0449 32.0654 13.3181 32.1406 13.5446 32.291C13.7676 32.4414 13.9222 32.6562 14.0121 32.9284C14.2062 33.5192 14.3752 33.9704 14.5191 34.2855C14.6665 34.597 14.8858 34.887 15.177 35.1449C15.4683 35.4027 15.8566 35.6032 16.342 35.7393V30.7191C15.3712 30.4505 14.5658 30.1569 13.915 29.8275C13.2642 29.498 12.7356 29.0361 12.3329 28.431C11.9302 27.8258 11.7253 27.0488 11.7253 26.0999C11.7253 24.861 12.1208 23.8441 12.9118 23.0563C13.7029 22.265 14.8463 21.8031 16.342 21.6742V20.9688C16.342 20.3636 16.5721 20.0628 17.0252 20.0628C17.4926 20.0592 17.7227 20.3529 17.7227 20.9437ZM16.3456 27.9118V23.776C15.738 23.9551 15.2633 24.1914 14.9254 24.4886C14.5838 24.7822 14.4148 25.2334 14.4148 25.8314C14.4148 26.3971 14.573 26.8304 14.893 27.1204C15.2094 27.4105 15.6948 27.6755 16.3456 27.9118ZM17.7227 31.1165V35.8503C18.4526 35.707 19.0136 35.417 19.4127 34.9766C19.8082 34.5326 20.0095 34.0241 20.0095 33.4404C20.0095 32.8138 19.8154 32.3304 19.427 31.9867C19.0423 31.6429 18.4742 31.3529 17.7227 31.1165Z"
                fill="#FFAA00"
              />
            </svg>

            <span className="link-span">Tushumalar</span>
          </NavLink>
        </ul>
      </div>
      <div className="nav-btn">
        <a className="nav-link btn-link" href="#" onClick={logout}>
          <img src={lagout} alt="lagout?" />
          <span className="link-span">Tizimdan chiqish</span>
        </a>
      </div>
    </Fragment>
  );
};

export default Navbar;
