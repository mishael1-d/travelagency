import React from "react";
import africa from '../../assets/africa.png'
import pay from '../../assets/pay.png'
import support from '../../assets/support.png'
import './Why.css'

function Why() {
  return (
    <div className="why-section__container">
      <div className="container">
        <div className="card__container">
          <div className="card-content__container">
            <img src={africa} alt="" />
            <div className="card-text">
              <h5 className="card-text__title">Africa's No. 1</h5>
              <p>
                HovaTravels is Africa's leading <br />
                travel company
              </p>
            </div>
          </div>
          <div className="card-content__container">
            <img src={pay} alt="" />
            <div className="card-text">
              <h5 className="card-text__title">Pay Small Small</h5>
              <p>
                Lock down great travel deals and <br />
                pay in convenient installments
              </p>
            </div>
          </div>
          <div className="card-content__container">
            <img src={support} alt="" />
            <div className="card-text">
              <h5 className="card-text__title">We are here for you</h5>
              <p>
                Reach us 24/7 <br /> (Monday - Sunday)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
