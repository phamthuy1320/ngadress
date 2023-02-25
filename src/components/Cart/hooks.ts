import { useMemo } from "react";
import { useCartContext } from "../../contexts/CartContext";

export const useCart = () => {
  const { amount, data } = useCartContext();

  const title = useMemo(() => {
    if (amount > 0 && data?.length) return `GIỎ HÀNG CỦA TÔI (${amount} SẢN PHẨM)`;
    return "GIỎ HÀNG TRỐNG";
  }, [amount, data?.length]);

  const total = useMemo(() => {
    if (!data?.length) return 0;
    return data?.map((item) => item?.price || 0).reduce((a, b) => (a || 0) + (b || 0));
  }, [data]);

  return {
    data,
    amount,
    title,
    total,
  };
};
