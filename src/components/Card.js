import React, { useState, useEffect } from "react";

import CardTypes from "./CardTypes";
import GenericCard from "./GenericCard";

const arr = [
  "#",
  "#",
  "#",
  "#",
  " ",
  "#",
  "#",
  "#",
  "#",
  " ",
  "#",
  "#",
  "#",
  "#",
  " ",
  "#",
  "#",
  "#",
  "#",
];
const DEFAULT_FULL_NAME = 'FULL NAME';
const DEFAULT_EXPIRY_MONTH = "MM";
const DEFAULT_EXPIRY_YEAR = "YY";
const DEFAULT_CARD_TYPE = 'VISA';

export default function Card({ cardInput, cardSwitch }) {

  const [cardType, setCardType] = useState(DEFAULT_CARD_TYPE);

  const checkHash = () => {
    return arr.map((item, index) => {
      return cardInput?.cardNumber?.[index] ? (
        <>{cardInput?.cardNumber?.[index]}</>
      ) : (
        arr[index]
      );
    });
  };

  useEffect(() => {
    let card =
      cardInput?.cardNumber?.length > 0
        ? CardTypes(cardInput?.cardNumber?.split(" ").join(""))
        : "VISA";
    if (card) {
      setCardType(card);
    }
  }, [cardInput.cardNumber]);

  return (
    <GenericCard
      key="1"
      cardNumber={checkHash()}
      cardHolder={cardInput.cardHolder ? cardInput.cardHolder : DEFAULT_FULL_NAME}
      cardType={cardType}
      expiryMonth={cardInput.expiryMonth ? cardInput.expiryMonth : DEFAULT_EXPIRY_MONTH}
      expiryYear={cardInput.expiryYear ? cardInput.expiryYear : DEFAULT_EXPIRY_YEAR}
      cardSwitch={cardSwitch}
      cardCVV={cardInput.cardCVV}
    />
  );
}
