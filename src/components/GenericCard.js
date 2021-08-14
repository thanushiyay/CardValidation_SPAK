import React from "react";
import Chip from "../assets/chip.png";

const CARD_SWITCH = {
  FRONT: "FRONT",
  BACK: 'BACK'
}

export default function GenericCard({
  cardNumber,
  cardHolder,
  cardType,
  expiryMonth,
  expiryYear,
  cardSwitch,
  cardCVV
}) {
  
  return (
    <>
      <div className={"cardWrapper " + cardType + " " + cardSwitch}>
        {cardSwitch ===  CARD_SWITCH.FRONT ? (
          <div className="cardHeader">
            <img src={Chip} className="cardChip" alt="Chip Image" />
            <div className={"cardTypeWrap " + cardType}  alt={cardType + "Image"}/>
          </div>
        ) : (
          <div className="cardBackHeader"></div>
        )}
        <div className="cardBody">
          {cardSwitch === CARD_SWITCH.FRONT ? (
            cardNumber
          ) : (
            <div className="cardBackBody">
              <div>CVV</div>
              {cardCVV.split('').map((item) => '*')}
            </div>
          )}
        </div>
        <div className="cardFooter">
          {cardSwitch === CARD_SWITCH.FRONT ? (
            <>
              <div className="cardFooterSection">
                <span className="footerHeading">Card Holder</span>
                <span>{cardHolder}</span>
              </div>
              <div className="cardFooterSection">
                <span className="footerHeading">Expires</span>
                <span>
                  {expiryMonth}/{expiryYear}
                </span>
              </div>
            </>
          ) : (
            <div className="cardBackFooter">
              <div className="cardHeader">
                <div className={"cardTypeWrap " + cardType} />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
