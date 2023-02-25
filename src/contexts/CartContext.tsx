import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from "react";
import { ICartContext, IProduct } from "./types";

const CartContext = createContext({} as ICartContext);

export const useCartContext = () => {
  return useContext(CartContext);
};

export const CartContextProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [data, setData] = useState<IProduct[]>([]);
  const amount = useMemo(() => data?.length || 0, [data?.length]);

  const onAdd = useCallback(
    (product: any) => {
      const newData = [...data];
      newData.push(product);
      setData(newData);
    },
    [data]
  );
  return (
    <CartContext.Provider
      value={{
        amount,
        data,
        onAdd,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
