import { useContext } from "react";
import { BasketContext } from "../context/basketContext";
import BasketItem from "../components/BasketItem";
import Info from "../components/Info";
import Total from "../components/Total";

const Basket = () => {
  const { basket } = useContext(BasketContext);
  const basketData = Array.isArray(basket) ? basket : [];

  return (
    <div className="container mt-5">
      <h1>Basket</h1>

      <div className="row">
        <div className="d-flex flex-column gap-5 mt-5 col-lg-8">
          {basketData.length === 0 ? (
            <Info />
          ) : (
            basketData.map((item) => <BasketItem key={item.id} item={item} />)
          )}
        </div>

        <div className="col-lg-4">
          <Total basket={basketData} />
        </div>
      </div>
    </div>
  );
};

export default Basket;
