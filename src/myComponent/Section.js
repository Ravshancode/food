import React, { useState } from "react";
import "../CssFile/Section.css";
import InfoMoniy from "./InfoMoniy";
import Search from "./SearchCom";
import { IoStar } from "react-icons/io5";
import { MdGridView } from "react-icons/md";
import { HiViewList } from "react-icons/hi";
import Producta from "./praductaInfo";
import icon1 from "../ICon/pngfind 1.png";
import icon2 from "../ICon/pngwing 2.png";
import icon3 from "../ICon/image 3.png";
import icon4 from "../ICon/pngwing 4.png";
import { RiApps2Line } from "react-icons/ri";
const Catigory = () => {
  const [food, setFood] = useState(Producta);
  const [items, setItems] = useState([]);

  let [carwon, setCarwon] = useState("cardwon");
  let [foodItem, setFoodItem] = useState("foodImg");
  let [foodCard, setFoodCard] = useState("foodCard");
  let [foodText, setFoodText] = useState("foodText");
  let [btnADD, setbtnADD] = useState("btnADD");

  const filtrFood = (foodItem) => {
    const result = Producta.filter((curData) => {
      return curData.catigoriy === foodItem;
    });
    setFood(result);
  };
  const List = () => {
    carwon = "cardwon";
    setCarwon(carwon);
    foodItem = "foodImg";
    setFoodItem(foodItem);
    foodCard = "foodCard";
    setFoodCard(foodCard);
    foodText = "foodText";
    setFoodText(foodText);
    btnADD = "btnADD";
    setbtnADD(btnADD);
  };
  const Grid = () => {
    carwon = "cardwon2";
    setCarwon(carwon);
    foodItem = "foodImg2";
    setFoodItem(foodItem);
    foodCard = "foodCard2";
    setFoodCard(foodCard);
    foodText = "foodText2";
    setFoodText(foodText);
    btnADD = "btnADD2";
    setbtnADD(btnADD);
  };
  const FoodAll = () => {
    setFood(Producta);
  };

  return (
    <div className="towComp">
      <div style={{ width: "100%" }}>
        <div className="ullist">
          <Search />
        </div>
        <div className="compress">
          <div className="btnSort">
            <button onClick={() => FoodAll()}>
              {" "}
              <p>
                <i>
                  <RiApps2Line />
                </i>
                <b>All</b>
              </p>
            </button>
            <button onClick={() => filtrFood("Pizza")}>
              <p>
                <i>
                  <img alt="R" src={icon1} />
                </i>
                <b>Pizza</b>
              </p>
            </button>
            <button onClick={() => filtrFood("Sandwich")}>
              <p>
                <i>
                  <img alt="R" src={icon2} />
                </i>
                <b>Sandwich</b>
              </p>
            </button>
            <button onClick={() => filtrFood("Burger")}>
              <p>
                {" "}
                <i>
                  <img alt="R" src={icon3} />
                </i>
                <b>Burger</b>
              </p>
            </button>
            <button onClick={() => filtrFood("HodDog")}>
              {" "}
              <p>
                {" "}
                <i>
                  <img alt="R" src={icon4} />
                </i>
                <b>Hotdog</b>
              </p>
            </button>
          </div>

          <div className="btnfood">
            <button onClick={List}>
              <MdGridView />
            </button>
            <button onClick={Grid}>
              <HiViewList />
            </button>
          </div>
          <div className="card_prod">
            {food.map((product) => {
              const { id, name, moniy, image } = product;

              return (
                <div className={carwon}>
                  <div key={id} className={foodCard}>
                    <img src={image} alt="R" className={foodItem} />
                    <p className="moniy">{moniy}</p>

                    <div className={foodText}>
                      <div>
                        {" "}
                        {name}
                        <p className="Star">
                          <i>
                            <IoStar />
                            <IoStar />
                            <IoStar />
                            <IoStar />
                            <IoStar />
                          </i>
                        </p>
                      </div>

                      <button
                        className={btnADD}
                        onClick={() => {
                          setItems(items);

                          const newItems = [
                            ...items,
                            {
                              name,
                              image,
                              moniy,
                              id,
                            },
                          ];
                          setItems(newItems);
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="infomony">
        {" "}
        <InfoMoniy items={items} />
      </div>
    </div>
  );
};

export default Catigory;
