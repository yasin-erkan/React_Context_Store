import { createContext, useEffect, useState } from "react";
import api from "../api";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Send an API request
  useEffect(() => {
    // If there is a selected category, send request to it, otherwise send request to all products
    const url =
      selectedCategory === "all"
        ? "/products"
        : `/products/category/${selectedCategory}`;
    api.get(url).then((res) => {
      setProducts(res.data);
    });
  }, [selectedCategory]);

  return (
    <ProductContext.Provider
      value={{ products, setProducts, selectedCategory, setSelectedCategory }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider };
