import { useEffect, useState } from "react";
// import DateInput from "../../components/date-input/DateInput";

import "./order.css";
import { requies } from "../../server";
import { Link } from "react-router-dom";

const Orders = () => {
  const [data, setData] = useState("");
  const [date, setDate] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleDataChange = (e) => {
    const selectedData = e.target.value;
    setData(selectedData);
  };

  const getData = async () => {
    try {
      const {
        data: { buyurtmalar },
      } = await requies.get(`mijozlar/kunlik-buyurtmalar?date=${data}`);
      setDate(buyurtmalar);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [data]);

  // let dateToSorted = date.toSorted((a, b) => a.id - b.id);

  const deleteId = async (id) => {
    const conDelete = confirm("O'chirishni xoxlaysizmi?");
    conDelete && (await requies.delete(`mijozlar/${id}/delete/`));
    await getData();
  };

  const toggleStatus = async (id, status) => {
    console.log(id, status);
    try {
      const conStatus = confirm("Bajarilsinmi");
      conStatus &&
        (await requies.patch(`mijozlar/${id}/update/`, {
          status: !status,
        }));
      await getData();
    } catch (error) {
      console.error("Statusni o'zgartirishda xatolik:", error);
    }
  };

  const filteredData = date.filter(
    ({ ism, familiya, tel_raqam }) =>
      ism.toLowerCase().includes(searchTerm.toLowerCase()) ||
      familiya.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tel_raqam.includes(searchTerm)
  );

  return (
    <div className="container-table">
      <div className="table-date">
        {/* <DateInput /> */}
        <input
          type="date"
          id="date"
          className="date-input"
          value={data}
          onChange={handleDataChange}
        />
      </div>
      <main className="main">
        <div className="main-clients">
          <div className="main-client">
            <h2 className="main-h2">Mijozlar ro’yxati</h2>
            <p className="main-span">Barcha buyurtmachilar ro’yxati</p>
          </div>
          <div className="main-inputsBtn">
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
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Link to="/" className="main-btn">
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
            </Link>
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
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan={7}>Sanani kiriting</td>
              </tr>
            ) : (
              filteredData.map(
                ({ id, ism, familiya, tel_raqam, status, qoldiq_summa }, i) => (
                  <tr key={id}>
                    <td>{i + 1}</td>
                    <td>{ism}</td>
                    <td>{familiya}</td>
                    <td>{tel_raqam}</td>
                    <td>
                      <button
                        className={status ? "td-btn1" : "td-btn1 td-btn1Grey"}
                        onClick={() => toggleStatus(id, status)}
                      >
                        <span
                          className={
                            status
                              ? "td-greenCircul"
                              : "td-greenCircul td-greyCircul"
                          }
                        ></span>
                        {status ? "Bajarildi" : "Bajarilmadi"}
                      </button>
                    </td>
                    <td>{qoldiq_summa}</td>
                    <td>
                      <Link to={`/orders/${id}`} className="editBtn">
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
                      </Link>
                      <button
                        className="deleteBtn"
                        onClick={() => deleteId(id)}
                      >
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
                )
              )
            )}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Orders;
