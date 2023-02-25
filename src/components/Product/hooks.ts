import { useCallback, useMemo } from "react";
import { IProduct } from "./types";
import { useCartContext } from "../../contexts/CartContext";

export const useProduct = (props: IProduct) => {
  const { name, id, price, sale = 0 } = props;
  const { onAdd: onAddContext } = useCartContext();
  const convertName = useCallback((name: string) => {
    // Remove accents
    const newName = name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D");
    const regex = new RegExp(" ");
    return newName.replace(regex, "-");
  }, []);

  const alt = useMemo(() => convertName(name), [convertName, name]);
  const url = useMemo(() => `/products/${id}`, [id]);
  const salePrice = useMemo(() => {
    return price * ((100 - sale) / 100);
  }, [price, sale]);

  const onAdd = () => {
    onAddContext(props);
  };

  return {
    alt,
    url,
    salePrice,
    onAdd,
    ...props,
  };
};
