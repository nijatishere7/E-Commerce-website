// Hooks
import { useState, createContext } from "react";

// Product 
import { product } from "@/data/product";

// Context
export const ProductsContext = createContext(null);

export const ProductsProvider = ({ children }) => {
  const [data, setData] = useState(product);

  return (
    <ProductsContext.Provider value={{ data, setData }}>
      {children}
    </ProductsContext.Provider>
  );
};
