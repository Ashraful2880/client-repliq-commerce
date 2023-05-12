import React, { useContext, createContext, useEffect, useState } from "react";
const APIContext = createContext();

export function ContextProvider({ children }) {
  const [items, setItems] = useState([]);
  const [wishListItems, setWishListItems] = React.useState([]);
  const [changes,setChanges]=useState(false)

  useEffect(() => {
    if (localStorage.getItem("cart") !== "undefined") {
      const myCartProduct = localStorage.getItem("cart");
      setItems(JSON.parse(myCartProduct));
    }
  }, [changes]);
  
  useEffect(() => {
    if(localStorage.getItem("wishList")!=="undefined"){
      const wishListProduct = localStorage.getItem("wishList");
      setWishListItems(JSON.parse(wishListProduct));
    }
  }, [changes]);

  return (
    <APIContext.Provider
      value={{
        items,
        setItems,
        wishListItems,
         setWishListItems,
        changes,
        setChanges
      }}
    >
      {children}
    </APIContext.Provider>
  );
}
export function useAPI() {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
