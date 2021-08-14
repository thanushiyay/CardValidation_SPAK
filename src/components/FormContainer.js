import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "./Card";
import CardTypes from "./CardTypes";

const INIT_CARD_STATE = {
  cardNumber: "",
  cardHolder: "",
  expiryMonth: "",
  expiryYear: "",
  cardCVV: "",
};
const cardNumberRegex = /^\d{0,16}$/g;
const cardHolderRegex =  /^[a-zA-Z\s]*$/g;

export default function FormContainer(props) {
  const [cardSwitch, setCardSwitch] = useState("FRONT");

  const [cardInput, setCardInput] = useState(INIT_CARD_STATE);
  const [isCardNumberError, setIsCardNumberError] = useState(false);
  const [isCardHolderError, setIsCardHolderError] = useState(false);

  const handleInputChange = (event) => {
    
    const temp = { ...cardInput };

    switch (event.target.name) {
      case "cardNumber":
        let cardVal = event.target.value;
        if (cardVal.length < 20) {
          temp[event.target.name] = cardVal
            .replace(/\s?/g, "")
            .replace(/(\d{4})/g, "$1 ")
            .trim();
          setCardInput(temp);
        }
        break;

      case "cardHolder":
        temp[event.target.name] = event.target.value.toUpperCase();
        setCardInput(temp);
        break;

      case "cardCVV":
        let cardcvv = event.target.value;
        if (cardcvv.length < 4) {
          temp[event.target.name] = cardcvv;
          setCardInput(temp);
        }
        break;

      default:
        temp[event.target.name] = event.target.value;
        setCardInput(temp);
    }
  };

  const handleSubmit = (e) => {
    console.log(cardInput);
    e.preventDefault();

    let cardNumberValue = cardInput.cardNumber.split(" ").join("");
    if (cardNumberValue.match(cardNumberRegex) && cardNumberValue.length == 16 && CardTypes(cardNumberValue) != '') {
      setIsCardNumberError(false);
    } else {
      setIsCardNumberError(true);
    }

    let cardHolderValue = cardInput.cardHolder;
    console.log(cardHolderValue);
    if (cardHolderValue.match(cardHolderRegex)) {
      setIsCardHolderError(false);
    } else {
      setIsCardHolderError(true);
    }
  };

  return (
    <>
      <Card cardInput={cardInput} cardSwitch={cardSwitch} />
      <form onSubmit={handleSubmit}>
        <div className="formWrapper">
          <div className="formInputWrapper">
            <label>Card Number</label>
            <Form.Control
              type="text"
              name="cardNumber"
              placeholder=""
              required
              onChange={handleInputChange}
              value={cardInput["cardNumber"]}
            />
            <span style={{ display: isCardNumberError ? "block" : "none" }}>
              Invalid Card Number
            </span>
          </div>
          <div className="formInputWrapper">
            <label>Card Name</label>
            <Form.Control
              type="text"
              placeholder=""
              required
              name="cardHolder"
              onChange={handleInputChange}
              value={cardInput["cardHolder"]}
            />
            <span style={{ display: isCardHolderError ? "block" : "none" }}>
              Invalid Card Holder Name
            </span>
          </div>
          <div className="formInputWrapper formDropDownWrapper">
            <div>
              <label>Expiration Date</label>
              <div className="formDropDown">
                <Form.Select
                  aria-label="Month"
                  required
                  name="expiryMonth"
                  onChange={handleInputChange}
                  value={cardInput["expiryMonth"]}
                >
                  <option value="">Month</option>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </Form.Select>
                <Form.Select
                  aria-label="Year"
                  name="expiryYear"
                  onChange={handleInputChange}
                  required
                  value={cardInput["expiryYear"]}
                >
                  <option value="">Year</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                  <option value="32">32</option>
                </Form.Select>
              </div>
            </div>
            <div>
              <label>CVV</label>
              <Form.Control
                type="number"
                placeholder=""
                name="cardCVV"
                required
                onChange={handleInputChange}
                value={cardInput["cardCVV"]}
                onBlur={() => setCardSwitch("FRONT")}
                onFocus={() => setCardSwitch("BACK")}
              />
            </div>
          </div>
          <div className="formInputWrapper">
            <Button type="submit">Submit</Button>
          </div>
        </div>
      </form>
    
    </>
  );
}
