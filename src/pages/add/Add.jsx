import DateInput from "../../components/date-input/DateInput";
import "./Add.css";
const Add = () => {
  return (
    <div className="add">
      <p className="add-p">Shaxsiy ma{"'"}lumolari</p>
      <form className="add-form">
        <div className="add-grid">
          <div className="addLabelInput">
            <label className="add-label" htmlFor="firstName">
              Ism
            </label>
            <input className="add-input" type="text" id="firstName" />
          </div>
          <div className="addLabelInput">
            <label className="add-label" htmlFor="lastName">
              Familiya
            </label>
            <input className="add-input" type="text" id="lastName" />
          </div>
          <div className="addLabelInput">
            <label className="add-label" htmlFor="mobile">
              Telefon raqami
            </label>
            <input
              className="add-input"
              type="text"
              id="mobile"
              placeholder="+998-"
            />
          </div>
        </div>
        <p className="add-p addInput-p">Kostyum / Tepa qism</p>
        <div className="add-grid grid-gap">
          <div className="addLabelInput">
            <label className="add-label" htmlFor="chest">
              Ko{"'"}krak aylanasi
            </label>
            <input className="add-input" type="text" id="chest" />
          </div>
          <div className="addLabelInput">
            <label className="add-label" htmlFor="waist">
              Bel aylanasi
            </label>
            <input className="add-input" type="text" id="waist" />
          </div>
          <div className="addLabelInput">
            <label className="add-label" htmlFor="length">
              Uzunligi
            </label>
            <input className="add-input" type="text" id="length" />
          </div>
          <div className="addLabelInput">
            <label className="add-label" htmlFor="shoulder">
              Yelka kengligi
            </label>
            <input className="add-input" type="text" id="shoulder" />
          </div>
          <div className="addLabelInput">
            <label className="add-label" htmlFor="shoulderLength">
              Yelka uzunligi
            </label>
            <input className="add-input" type="text" id="shoulderLength" />
          </div>
          <div className="addLabelInput">
            <label className="add-label" htmlFor="front-back">
              Old-orqa kengligi
            </label>
            <input className="add-input" type="text" id="front-back" />
          </div>
        </div>
        <p className="add-p addInput-p">Bryuk / Pastgi qism</p>
        <div className="add-grid grid-gap">
          <div className="addLabelInput">
            <label className="add-label" htmlFor="waistCircumference">
              Bel aylanasi
            </label>
            <input className="add-input" type="text" id="waistCircumference" />
          </div>
          <div className="addLabelInput">
            <label className="add-label" htmlFor="height">
              Bo{"'"}yi
            </label>
            <input className="add-input" type="text" id="height" />
          </div>
          <div className="addLabelInput">
            <label className="add-label" htmlFor="son">
              Son aylanasi
            </label>
            <input className="add-input" type="text" id="son" />
          </div>
          <div className="addLabelInput">
            <label className="add-label" htmlFor="buksa">
              Buksa aylanasi
            </label>
            <input className="add-input" type="text" id="buksa" />
          </div>
          <div className="addLabelInput">
            <label className="add-label" htmlFor="foot">
              Oyoq o{"'"}lchami
            </label>
            <input className="add-input" type="text" id="foot" />
          </div>
          <div className="addLabelInput">
            <label className="add-label" htmlFor="gulfik">
              Gulfik
            </label>
            <input className="add-input" type="text" id="gulfik" />
          </div>
        </div>
        <p className="add-p addInput-p">Dizayn va aksessuarlar</p>
        <div className="add-container">
          <div className="add-dizaynGrid">
            <div className="add-dizaynLabelInput">
              <label className="add-dizaynLabel" htmlFor="material">
                Material turi
              </label>
              <div className="add-inputSvg">
                <input
                  type="text"
                  placeholder="Material nomi yoki kodini yozing"
                  className="add-inputMateral"
                  id="material"
                />
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 12V3.85L4.4 6.45L3 5L8 0L13 5L11.6 6.45L9 3.85V12H7ZM2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V11H2V14H14V11H16V14C16 14.55 15.8042 15.0208 15.4125 15.4125C15.0208 15.8042 14.55 16 14 16H2Z"
                    fill="#49454F"
                  />
                </svg>
              </div>
            </div>
            <div className="add-dizaynLabelInput">
              <label className="add-dizaynLabel" htmlFor="dizayn">
                Dizayni
              </label>
              <div className="add-inputSvg">
                <input
                  type="text"
                  placeholder="Dizayn turini yozing"
                  className="add-inputMateral"
                  id="dizayn"
                />
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 12V3.85L4.4 6.45L3 5L8 0L13 5L11.6 6.45L9 3.85V12H7ZM2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V11H2V14H14V11H16V14C16 14.55 15.8042 15.0208 15.4125 15.4125C15.0208 15.8042 14.55 16 14 16H2Z"
                    fill="#49454F"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="add-textGrid">
            <label htmlFor="textarea-explanation" className="add-textlabel">
              Tikuvchinign izohi
            </label>
            <textarea
              id="textarea-explanation"
              className="add-textArea"
            ></textarea>
          </div>
          <div className="add-checkGrid">
            <div className="add-textCheck">
              <input type="checkbox" id="aksessuar" className="add-check" />
              <label htmlFor="aksessuar" className="add-checkLabel">
                Aksessuar
              </label>
            </div>
            <div className="add-textCheck">
              <input type="checkbox" id="tufli" className="add-check" />
              <label htmlFor="tufli" className="add-checkLabel">
                Tufli
              </label>
            </div>
            <div className="add-textCheck">
              <input type="checkbox" id="galstuk" className="add-check" />
              <label htmlFor="galstuk" className="add-checkLabel">
                Galstuk
              </label>
            </div>
            <div className="add-textCheck">
              <input type="checkbox" id="babochka" className="add-check" />
              <label htmlFor="babochka" className="add-checkLabel">
                Babochka
              </label>
            </div>
          </div>
          <div className="dateNumber-grid">
            <div className="add-dateInput">
              <div className="date">
                <label htmlFor="date" className="date-label">
                  Buyurmaning yakuniy sanasi
                </label>
                <DateInput />
              </div>
            </div>
            <div className="add-price">
              <label htmlFor="sum" className="add-priceLabel">
                Buyurtma summasi
              </label>
              <input id="sum" type="number" className="add-priceInput" />
            </div>
            <div className="add-price">
              <label htmlFor="payment" className="add-priceLabel">
                Oldindan to{"'"}lov
              </label>
              <input id="payment" type="number" className="add-priceInput" />
            </div>
          </div>
          <div className="deleteAdd">
            <div className="add-deleteAdd">
              <button className="svgDelete">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.4 15L10 11.4L13.6 15L15 13.6L11.4 10L15 6.4L13.6 5L10 8.6L6.4 5L5 6.4L8.6 10L5 13.6L6.4 15ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z"
                    fill="#73332C"
                  />
                </svg>

                <span className="svgDelete-span">O{"'"}chirish</span>
              </button>
              <button className="svgAdd">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 17H13V13H17V11H13V7H11V11H7V13H11V17ZM12 22C10.6167 22 9.31667 21.7417 8.1 21.225C6.88333 20.6917 5.825 19.975 4.925 19.075C4.025 18.175 3.30833 17.1167 2.775 15.9C2.25833 14.6833 2 13.3833 2 12C2 10.6167 2.25833 9.31667 2.775 8.1C3.30833 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.31667 8.1 2.8C9.31667 2.26667 10.6167 2 12 2C13.3833 2 14.6833 2.26667 15.9 2.8C17.1167 3.31667 18.175 4.025 19.075 4.925C19.975 5.825 20.6833 6.88333 21.2 8.1C21.7333 9.31667 22 10.6167 22 12C22 13.3833 21.7333 14.6833 21.2 15.9C20.6833 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6917 15.9 21.225C14.6833 21.7417 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
                    fill="#2D4E30"
                  />
                </svg>

                <span className="svgAdd-span">Buyurtmani saqlash</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Add;