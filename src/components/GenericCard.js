import React from "react";
import Chip from "../assets/chip.png";

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
        {cardSwitch == "FRONT" ? (
          <div className="cardHeader">
            <img src={Chip} className="cardChip" />
            <div className={"cardTypeWrap " + cardType} />
          </div>
        ) : (
          <div className="cardBackHeader"></div>
        )}
        <div className="cardBody">
          {cardSwitch == "FRONT" ? (
            cardNumber
          ) : (
            <div className="cardBackBody">
              <div>CVV</div>
              {cardCVV.split('').map((item) => '*')}
            </div>
          )}
        </div>
        <div className="cardFooter">
          {cardSwitch === "FRONT" ? (
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
