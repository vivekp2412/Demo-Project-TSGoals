import React, { useMemo } from "react";
import { useAppSelector } from "src/store";
import { calculateTotalAmount } from "src/utils/cart";
import "./cartamount.css";

/**
 * Component Displays Total Cart Amount
 */
const CartAmount = () => {
  const cart = useAppSelector((state) => state.cart.products);
  const orderValue = useMemo(() => calculateTotalAmount(cart), [cart]);
  return <div className="totalAmount">Total Amount: ${orderValue}</div>;
};

export default React.memo(CartAmount);
