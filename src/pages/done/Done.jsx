import { useState } from "react";

import "./Done.css";
const Done = () => {
  const [colorGreen, setColorGreen] = useState(false);
  const handleClick = () => {
    setColorGreen(!colorGreen); // Rangni almashtirish
  };
  return (
    <div className="container-table" style={{ paddingTop: "42px" }}>
      <main className="main">
        <div className="main-clients">
          <div className="main-client">
            <h2 className="main-h2">Mijozlar ro’yxati</h2>
            <p className="main-span">Barcha buyurtmachilar ro’yxati</p>
          </div>
          <div className="main-inputsBtn">
            <button className="main-export">
              <svg
                className="main-exportSvg"
                width="19"
                height="20"
                viewBox="0 0 19 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_124_2252)">
                  <path
                    d="M6.33334 14.4391L9.50001 17.6058M9.50001 17.6058L12.6667 14.4391M9.50001 17.6058V10.4808M16.53 15.302C17.2183 14.818 17.7344 14.1273 18.0035 13.3301C18.2726 12.5329 18.2807 11.6707 18.0266 10.8686C17.7724 10.0664 17.2693 9.36619 16.5902 8.86939C15.9111 8.3726 15.0914 8.10512 14.25 8.10578H13.2525C13.0144 7.17785 12.5689 6.31602 11.9495 5.58518C11.3301 4.85434 10.553 4.27353 9.67671 3.88648C8.80039 3.49943 7.84768 3.31622 6.8903 3.35065C5.93292 3.38508 4.99583 3.63625 4.14957 4.08524C3.30331 4.53424 2.56994 5.16937 2.00466 5.94281C1.43938 6.71626 1.05692 7.60786 0.88609 8.5505C0.715255 9.49314 0.760491 10.4623 1.01839 11.3849C1.27629 12.3075 1.74014 13.1596 2.37501 13.877"
                    stroke="#344054"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_124_2252">
                    <rect
                      width="19"
                      height="19"
                      fill="white"
                      transform="translate(0 0.980835)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <span className="main-exportSpan">Eksport</span>
            </button>
            <div className="input-svgInput">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.396 17.6058L13.9522 14.1621M15.8127 9.68917C15.8127 13.187 12.9771 16.0225 9.47933 16.0225C5.98153 16.0225 3.146 13.187 3.146 9.68917C3.146 6.19136 5.98153 3.35583 9.47933 3.35583C12.9771 3.35583 15.8127 6.19136 15.8127 9.68917Z"
                  stroke="#344054"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <input
                type="text"
                className="main-search"
                placeholder="Qidirish"
              />
            </div>
            <button className="main-btn">
              <svg
                className="main-btnSvg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.77245 4.87158V16.0902M4.16315 10.4809H15.3817"
                  stroke="#1E1E1E"
                  strokeWidth="1.60586"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="main-btnSpan">Mijoz qo’shish</span>
            </button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>№</th>
              <th className="th-flex">
                <div className="th-svg">
                  <span className="th-span">Ism</span>
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.61744 3.66763V12.6425M8.61744 12.6425L13.1049 8.15507M8.61744 12.6425L4.13 8.15507"
                      stroke="#667085"
                      strokeWidth="1.28213"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </th>
              <th>
                <div className="th-svg">
                  <span className="th-span">Familiya</span>
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.61744 3.66763V12.6425M8.61744 12.6425L13.1049 8.15507M8.61744 12.6425L4.13 8.15507"
                      stroke="#667085"
                      strokeWidth="1.28213"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </th>
              <th>
                <div className="th-svg">
                  <span className="th-span">Telefon raqami</span>
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.61744 3.66763V12.6425M8.61744 12.6425L13.1049 8.15507M8.61744 12.6425L4.13 8.15507"
                      stroke="#667085"
                      strokeWidth="1.28213"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </th>
              <th>
                <div className="th-svg">
                  <span className="th-span">Status</span>
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.61744 3.66763V12.6425M8.61744 12.6425L13.1049 8.15507M8.61744 12.6425L4.13 8.15507"
                      stroke="#667085"
                      strokeWidth="1.28213"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </th>
              <th>
                <div className="th-svg">
                  <span className="th-span">To’lov qoldig’i</span>
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.61744 3.66763V12.6425M8.61744 12.6425L13.1049 8.15507M8.61744 12.6425L4.13 8.15507"
                      stroke="#667085"
                      strokeWidth="1.28213"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </th>
              {/* <th></th> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>id</td>
              <td>ism</td>
              <td>familiya</td>
              <td>tel_raqam</td>
              <td>
                <button
                  className={colorGreen ? "td-btn1" : "td-btn1 td-btn1Grey"}
                  onClick={handleClick}
                >
                  <span
                    className={
                      colorGreen
                        ? "td-greenCircul"
                        : "td-greenCircul td-greyCircul"
                    }
                  ></span>
                  {colorGreen ? "Bajarildi" : "Bajarilmadi"}
                </button>
              </td>
              <td>buyurtma_umumiy_summasi</td>
              <td>
                <button className="editBtn">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_123_917)">
                      <path
                        d="M7.02856 2.81015H2.65356C2.32204 2.81015 2.0041 2.94184 1.76968 3.17626C1.53526 3.41068 1.40356 3.72863 1.40356 4.06015V12.8101C1.40356 13.1417 1.53526 13.4596 1.76968 13.694C2.0041 13.9285 2.32204 14.0601 2.65356 14.0601H11.4036C11.7351 14.0601 12.053 13.9285 12.2874 13.694C12.5219 13.4596 12.6536 13.1417 12.6536 12.8101V8.43515M11.7161 1.87265C11.9647 1.62401 12.3019 1.48432 12.6536 1.48432C13.0052 1.48432 13.3424 1.62401 13.5911 1.87265C13.8397 2.12129 13.9794 2.45852 13.9794 2.81015C13.9794 3.16178 13.8397 3.49901 13.5911 3.74765L7.65356 9.68515L5.15356 10.3101L5.77856 7.81015L11.7161 1.87265Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_123_917">
                        <rect
                          width="15"
                          height="15"
                          fill="white"
                          transform="translate(0.153564 0.31015)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
                <button className="deleteBtn">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.95825 14.8102C4.56867 14.8102 4.23516 14.6796 3.95773 14.4185C3.6803 14.1574 3.54159 13.8435 3.54159 13.4768V4.81015H2.83325V3.47682H6.37492V2.81015H10.6249V3.47682H14.1666V4.81015H13.4583V13.4768C13.4583 13.8435 13.3195 14.1574 13.0421 14.4185C12.7647 14.6796 12.4312 14.8102 12.0416 14.8102H4.95825ZM12.0416 4.81015H4.95825V13.4768H12.0416V4.81015ZM6.37492 12.1435H7.79159V6.14348H6.37492V12.1435ZM9.20825 12.1435H10.6249V6.14348H9.20825V12.1435Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Done;
