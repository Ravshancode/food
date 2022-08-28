import React, { useState } from "react";
import "../CssFile/infomoniy.css";
import { FiChevronDown } from "react-icons/fi";
import { BsXLg } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import img1 from "../img/img1.jpg";
export default function InfoMoniy(props) {

  const [Itmakf] = useState(1);
 
  return (
    <div className="contenor3">
      <div>
        <div className="chevone">
          <div>
            <img src={img1} alt="R" />
            <p> Karina Putri Agung </p>
            <i>
              <FiChevronDown />
            </i>
          </div>
        </div>
        <div className="card2">
          <div className="propsinput">
            <h3>Recent Order </h3>
            <p>View all</p>
          </div>
          <div className="overflow" style={{ display: "block" }}>
            {props.items &&
              props.items.map((item) => (
                <div  key={item.id} className="cardflex">
                  <div>
                    <img src={item.image} alt="R" />
                  </div>
                  <div className="foodName">
                    <div>
                      {item.name}
                      <p>{Itmakf}</p>
                    </div>
                  </div>
                  <div className="Bsicon">
                    <button>
                      <i>
                        <BsXLg />
                      </i>
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="card3">
          <p>
            Shopping Cart{" "}
            <i>
              <FiEdit />
            </i>{" "}
          </p>
          <div>
            <div className="cardflex2">
              <div>
                <img src={img1} alt="R" />
              </div>
              <div>
                <b>Brey Sandwich</b>
                <p>1 items</p>
              </div>
              <div>
                <b className="cardRight2">$26</b>
              </div>
            </div>
            <div className="cardflex2">
              <div>
                <img src={img1} alt="R" />
              </div>
              <div>
                <b>Tomato Pizza </b>
                <p>2 items</p>
              </div>
              <div>
                <b className="cardRight">$22</b>
              </div>
            </div>

            <div className="cardflex3">
              <div>
                <p>Sub total</p>
              </div>
              <p>$140,00</p>
            </div>
            <div className="cardflex3">
              <div>
                <p> Delivery fee</p>
              </div>
              <p>$10,00</p>
            </div>
            <div className="hr"></div>
            <div className="cardflex3">
              <div>
                <div> Total</div>
              </div>
              <b>$140,00</b>
            </div>
            <button className="btnn">Ready for pickup</button>
          </div>
        </div>
      </div>
    </div>
  );
}
