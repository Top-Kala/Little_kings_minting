import React, { useState } from "react";
import headerIcon from "../../image/light_king.svg";
import { Link } from "react-router-dom";

const Main = () => {
  const [inputValue, setInputValue] = useState(1);

  const addClickHandler = () => {
    if (inputValue === 1) setInputValue(2);
  };

  const subClickHandler = () => {
    if (inputValue === 2) {
      setInputValue(1);
    }
  };

  return (
    <section className="mintCalculationSection">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="heading">
              <img src={headerIcon} alt="header-Icon" />
              <h3>
                Mint Your Favourite <span>Little Kings</span>
              </h3>
            </div>
            <div className="priceSection">
              <h4>
                <span>Price : </span>0.82 Eth + Gas Free
              </h4>

              <div className="numbers">
                <div className="inputNumber">
                  <button type="button" onClick={subClickHandler}>
                    -
                  </button>
                  <input type="text" value={inputValue} disabled />
                  <button type="button" onClick={addClickHandler}>
                    +
                  </button>
                </div>
                {/* <div className='inputSuggetion'>
                      <button>5</button>
                      <button>10</button>
                      <button>15</button>
                    </div> */}
              </div>

              <Link to="#" className="Wallet">
                <span>
                  Connect to Wallet
                  <div className="yl_bg">
                    <span></span>
                  </div>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
