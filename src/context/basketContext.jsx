import { createContext, useState } from "react";
import { toast } from "react-toastify";
export const BasketContext = createContext();

const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);
  // this func. adds the product to the basket and increase the amount
  const addToBasket = (product) => {
    //Detect if there are products in the cart
    const found = basket.find((i) => i.id === product.id);
    if (!found) {
      //if there is not product in the basket, add one
      setBasket(basket.concat({ ...product, amount: 1 }));
      toast.success("order added to the basket!");
    } else {
      //if there is product, increase the product amount
      const updated = { ...found, amount: found.amount + 1 };
      //update the found product in the array list
      const newBasket = basket.map((i) => (updated.id === i.id ? updated : i));
      // update the array (basket)
      setBasket(newBasket);
      toast.success(`Your order is updated!${updated.amount}}`);
    }
  };
  //this function deletes the id-known-product from the state
  const removeFromBasket = (delete_id) => {
    const filtered = basket.filter((item) => item.id !== delete_id);
    setBasket(filtered);
    toast.error("Your order deleted from th basket!");
  };
  //decrease the amount of products!
  const decreaseAmount = (delete_id) => {
    const found = basket.find((item) => item.id === delete_id);
    if (found.amount > 1) {
      //decrease -1 the amount of product on the list
      const updated = { ...found, amount: found.amount - 1 };
      const newBasket = basket.map((item) =>
        item.id === updated.id ? updated : item
      );
      setBasket(newBasket);
      toast.info(`The amount is decreased to ${updated.amount}`);
    } else {
      removeFromBasket(delete_id);
      toast.info(`The item has been removed from the basket!`);
    }
  };
  return (
    <BasketContext.Provider
      value={{
        basket,
        setBasket,
        addToBasket,
        removeFromBasket,
        decreaseAmount,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
